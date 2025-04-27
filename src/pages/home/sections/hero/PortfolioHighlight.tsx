import React from "react";
import { Paper, Stack, Typography, Divider, alpha } from "@mui/material";
import { FaCode, FaTools, FaGithub } from "react-icons/fa"; // React Icons

const PortfolioHighlight: React.FC = () => {
    return (
        <Paper
            sx={{
                p: 2, width: "100%", borderRadius: 3,
                backgroundColor: theme => alpha(theme.palette.primary.main, 0.2),
                backdropFilter: 'blur(50px) !important',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            }}
        >
            <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                alignItems="center"
                divider={<Divider orientation="vertical" flexItem />}
                sx={{

                }}
            >
                
                {/* Open Source Section */}
                <Stack alignItems="center" justifyContent="center" sx={{ flexGrow: 1 }}>
                    <FaGithub size={25} color="#4caf50" />
                    <Typography variant="h5" fontWeight="bold">05+</Typography>
                    <Typography variant="caption" color="text.secondary">Projects</Typography>
                </Stack>

                {/* Technologies Section */}
                <Stack alignItems="center" justifyContent="center" sx={{ flexGrow: 1 }}>
                    <FaTools size={25} color="#ff9800" />
                    <Typography variant="h5" fontWeight="bold">10+</Typography>
                    <Typography variant="caption" color="text.secondary">Tech Stack</Typography>
                </Stack>

                {/* DSA Section */}
                <Stack alignItems="center" justifyContent="center" sx={{ flexGrow: 1 }}>
                    <FaCode size={25} color="#2196f3" />
                    <Typography variant="h5" fontWeight="bold">100+</Typography>
                    <Typography variant="caption" color="text.secondary">DSA Solved</Typography>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default PortfolioHighlight;
