import { Box } from '@mui/material';
import React from 'react';

interface FlipCardProps {
    width: string;
    height?: string;
    frontComponent: React.ReactNode;
    backComponent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ width, height = '150px', frontComponent, backComponent }) => {
    return (
        <Box
            sx={{
                width: width,
                height: height,
                cursor: 'pointer',
                perspective: '5000px',
                '&:hover .rotate-box': {
                    transform: 'rotateX(180deg)',
                    transition: 'transform 1s',
                }
            }}>
            <Box
                className='rotate-box'
                sx={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    transition: 'transform 1s',
                    transformStyle: 'preserve-3d'
                }}>
                <Box className={'front-side-box'} sx={{ width: '100%', height: '100%', position: 'absolute', backfaceVisibility: 'hidden' }}>
                    {frontComponent}
                </Box>
                <Box className={'back-side-box'} sx={{ width: '100%', height: '100%', position: 'absolute', transform: 'rotateX(180deg)', backfaceVisibility: 'hidden' }}>
                    {backComponent}
                </Box>
            </Box>
        </Box>
    );
};

export default FlipCard;