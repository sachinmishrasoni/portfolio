import { IconList } from "@/utils/iconList";
import { Box, Typography } from "@mui/material";

interface SidebarLogoProps {
    isCollapsed: boolean;
    isMobile: boolean;
}

const SidebarLogo: React.FC<SidebarLogoProps> = ({ isCollapsed, isMobile }) => {
    return (
        <Box
            width={"100%"} display="flex"
            justifyContent={{ xs: "flex-start", md: "center" }}
            alignItems="center" gap={1}
            sx={{ overflow: "hidden" }}
        >
            {/* <Typography
                variant="h5"
                sx={{
                    p: 0.5,
                    px: 1.5,
                    bgcolor: "primary.main",
                    borderRadius: "50%",
                    fontWeight: "bolder",
                    color: "white",
                    flexShrink: 0, // Prevent shrinking
                }}
            >
                S
            </Typography> */}

            <IconList.admin size={35} />

            {/* Show "Admin Panel" only when drawer is open on desktop */}
            {!isCollapsed && !isMobile && (
                <Typography
                    variant="h6"
                    fontWeight="600"
                    sx={{
                        whiteSpace: "nowrap", // Prevents text wrapping or shrinking
                        overflow: "hidden",
                        textOverflow: "ellipsis", // Adds "..." if needed
                        transition: "opacity 0.2s ease-in-out",
                    }}
                >
                    Admin Panel
                </Typography>
            )}

            {/* Show "S Admin Panel" on mobile screens */}
            {isMobile && (
                <Typography
                    variant="h6"
                    fontWeight="600"
                    sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    Admin Panel
                </Typography>
            )}
        </Box>
    );
};

export default SidebarLogo;
