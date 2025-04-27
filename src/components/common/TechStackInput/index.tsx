import React, { useState } from "react";
import { Stack, Chip, IconButton } from "@mui/material";
import CustomTextField from "@/components/ui/CustomTextField"; // Adjust path as needed
import { IconList } from "@/utils/iconList"; // Adjust path as needed
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

interface TechStackInputProps {
    techStack: string[]; // Array of tech stack items from parent
    onChange: (updatedTechStack: string[]) => void; // Callback to update parent state
    error?: boolean; // Error state from form
    helperText?: string; // Error message from form
}

const TechStackInput: React.FC<TechStackInputProps> = ({
    techStack,
    onChange,
    // error,
    // helperText,
}) => {
    const [techInput, setTechInput] = useState("");

    // Add a new tech item
    const handleAdd = () => {
        if (techInput.trim()) {
            const updatedTechStack = [...techStack, techInput.trim()];
            onChange(updatedTechStack); // Update parent state
            setTechInput(""); // Clear input
        }
    };

    // Remove a tech item
    const handleDelete = (techToDelete: string) => {
        const updatedTechStack = techStack.filter((tech) => tech !== techToDelete);
        onChange(updatedTechStack); // Update parent state
    };

    // Handle Enter key press to add tech
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && techInput.trim()) {
            e.preventDefault(); // Prevent form submission
            handleAdd();
        }
    };

    // Animation variants for chips
    const chipVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 10 }, // Initial state when entering or exiting
        visible: { opacity: 1, scale: 1, y: 0 },   // Final state when fully visible
        exit: { opacity: 0, scale: 0.8, y: -10 },  // State when exiting
    };

    return (
        <Stack gap={1.5}>
            <CustomTextField
                placeholder="Tech Stack"
                label="Tech Stack"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={handleKeyPress}
                endIcon={
                    techInput.trim() ? (
                        <IconButton onClick={handleAdd}>
                            <IconList.plus />
                        </IconButton>
                    ) : null
                }
            // error={error}
            // helperText={helperText}
            />
            {
                techStack.length > 0 && (
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                        <AnimatePresence mode="popLayout"> {/* Handles exit animations */}
                            {techStack.map((item) => (
                                <motion.div
                                    key={item} // Use item as key for uniqueness (assuming items are unique)
                                    variants={chipVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
                                    layout // Enables layout animation for repositioning
                                >
                                    <Chip
                                        label={item}
                                        sx={{
                                            py: 0.6,
                                            pl: 0.5,
                                            height: "auto",
                                            border: "1px solid",
                                            borderColor: "primary.light",
                                            backgroundColor: "background.paper",
                                        }}
                                        onDelete={() => handleDelete(item)}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </Stack>
                )
            }
        </Stack>
    );
};

export default TechStackInput;
