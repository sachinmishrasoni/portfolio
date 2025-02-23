import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

interface SectionHeaderProps {
    title?: string;
    subtitle?: string;
    conunt?: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({ title = 'Title', subtitle = 'Subtitle', conunt = '01' }) => {
    return (
        <Stack direction={'row'} alignItems="flex-end" gap={1} sx={{ width: '100%', userSelect: 'none' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
                <Stack direction={'row'} justifyContent={'flex-end'} alignItems={'center'} gap={1}>
                    <Box sx={{
                        height: '3px',
                        width: '30%',
                        backgroundColor: 'primary.light',
                        borderRadius: '15px'
                    }} />
                    <Typography variant='body1' color='text.secondary' sx={{ lineHeight: 1, flexShrink: 0 }}>{subtitle}</Typography>
                </Stack>
                <Typography variant='h4' fontWeight={'bold'} sx={{ lineHeight: 1 }}>{title}</Typography>
            </Box>
            <Box sx={{
                width: '100%',
                height: '4px',
                backgroundColor: 'primary.light',
                borderRadius: '5px',
                alignSelf: 'flex-end', // This aligns the line with the text,
                mb: 1
            }} />
            {
                Array(5).fill(0).map((_, index) => (
                    <Box key={index} sx={{
                        width: '8px !important',
                        height: '4px',
                        backgroundColor: 'primary.light',
                        borderRadius: '5px',
                        alignSelf: 'flex-end', // This aligns the line with the text
                        flexShrink: 0,
                        mb: 1
                    }} />
                ))
            }
            <Typography variant='h1' fontWeight={'bold'} sx={{ opacity: 0.1, position: 'absolute', right: -10, top: -20 }}>{conunt}</Typography>
        </Stack>
    )
}

export default SectionHeader