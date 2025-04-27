import React from "react";
import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import CustomButton from "../../../../../components/ui/CustomButton";
import { IconList } from "../../../../../utils/iconList";

interface ImageFile {
    url: string;
    file: File;
}

interface ImagePreviewProps {
    images: ImageFile[]; // Array of selected images
    previewImage: string | null; // Currently previewed image URL
    onImagesChange: (newImages: ImageFile[]) => void; // Callback for when images change
    onPreviewChange: (imageUrl: string | null) => void; // Callback for preview selection
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
    images,
    previewImage,
    onImagesChange,
    onPreviewChange,
}) => {
    // Handle file input change
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const imageUrls: ImageFile[] = Array.from(files).map((file) => ({
                url: URL.createObjectURL(file),
                file,
            }));
            // Add new images at the beginning
            const updatedImages = [...imageUrls, ...images];
            onImagesChange(updatedImages);
            // Set last uploaded image as preview
            if (imageUrls.length > 0) {
                onPreviewChange(imageUrls[imageUrls.length - 1].url);
            }
        }
    };

    // Handle image selection
    const handleImageSelect = (imageUrl: string) => {
        onPreviewChange(imageUrl);
    };

    // Handle image removal
    const handleRemoveImage = (imageUrl: string) => {
        const updatedImages = images.filter((image) => image.url !== imageUrl);
        onImagesChange(updatedImages);
        // Clean up URL
        URL.revokeObjectURL(imageUrl);

        // Update preview if removed image was being previewed
        if (previewImage === imageUrl) {
            if (updatedImages.length > 0) {
                onPreviewChange(updatedImages[0].url); // Show first remaining image
            } else {
                onPreviewChange(null); // No images left
            }
        }
    };

    // Handle file input click
    const handleButtonClick = () => {
        const fileInput = document.getElementById("fileInput") as HTMLInputElement;
        fileInput?.click();
    };

    return (
        <Box>
            {/* Preview Area */}
            <Paper
                sx={{
                    height: { xs: 225, sm: 300 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "0.01px solid",
                    borderColor: "primary.main",
                    borderRadius: 2,
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                {previewImage ? (
                    <img
                        src={previewImage}
                        alt="Preview"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                ) : (
                    <Typography variant="h6" fontWeight="bold" color="text.secondary">
                        Image Preview
                    </Typography>
                )}
            </Paper>

            {/* Upload and Thumbnails */}
            <Stack
                direction={"row"}
                alignItems={"center"}
                mt={1}
                sx={{
                    position: "relative",
                    overflowX: "hidden",
                }}
            >
                {/* Hidden File Input */}
                <input
                    type="file"
                    id="fileInput"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                />

                {/* Upload Button */}
                <CustomButton
                    variant="contained"
                    onClick={handleButtonClick}
                    sx={{
                        width: 65,
                        height: 65,
                        flexShrink: 0,
                    }}
                >
                    <IconList.plus fontSize={"2rem"} />
                </CustomButton>

                <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />

                {/* Thumbnails */}
                <Stack
                    direction={"row"}
                    gap={1}
                    sx={{
                        width: { xs: "calc(100vw - 8px - 90px)", md: "calc(100vw - 121px - 90px)" },
                        py: 0.5,
                        overflowX: "auto",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                    }}
                >
                    {images.map((image: ImageFile, index: number) => (
                        <Paper
                            key={index}
                            sx={{
                                minWidth: "85px",
                                width: "85px",
                                height: 60,
                                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                                border: "3px solid",
                                borderColor: previewImage === image.url ? "primary.main" : "background.paper",
                                borderRadius: 2,
                                cursor: "pointer",
                                position: "relative",
                                "& img": {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: 1.2,
                                },
                                "& .icon-box": {
                                    opacity: 0,
                                    transition: "opacity 0.3s ease-in-out",
                                },
                                "&:hover .icon-box": {
                                    opacity: 1,
                                },
                            }}
                            onClick={() => handleImageSelect(image.url)}
                        >
                            <img src={image.url} alt={`Thumbnail ${index}`} />

                            <Stack className="icon-box" position={"absolute"} top={-5} right={-5}>
                                <CustomButton
                                    size="small"
                                    variant="contained"
                                    shape="circle"
                                    sx={{
                                        p: 0.3,
                                        boxShadow: "none",
                                        backgroundColor: "error.main",
                                        "&:hover": {
                                            backgroundColor: "error.dark",
                                        },
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent triggering image select
                                        handleRemoveImage(image.url);
                                    }}
                                >
                                    <IconList.close fontSize={15} />
                                </CustomButton>
                            </Stack>
                        </Paper>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
};

export default ImagePreview;
