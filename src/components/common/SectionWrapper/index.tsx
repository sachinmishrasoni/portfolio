// components/SectionWrapper.tsx
import React from "react";
import { Box, BoxProps, alpha, useTheme } from "@mui/material";

interface SectionWrapperProps extends BoxProps {
    id: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, sx, ...rest }) => {
    const theme = useTheme();

    return (
        <Box
            id={id}
            data-section
            minHeight={"100vh"}
            position={"relative"}
            overflow={"hidden"}
            sx={{
                background: `linear-gradient(90deg, 
                    ${alpha(theme.palette.primary.main, 0.1)} 0%, 
                    ${theme.palette.background.default} 50%, 
                    ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
                ...sx,
            }}
            {...rest}
        >
            {children}
        </Box>
    );
};

export default SectionWrapper;
