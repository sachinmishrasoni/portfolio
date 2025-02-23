import { Box, Stack } from '@mui/material'

const AboutAvatar = () => {
    return (
        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <Stack direction={'column'} gap={2}>
                <Box sx={{
                    height: '300px',
                    width: '40px',
                    border: '3px solid',
                    borderColor: 'primary.main',
                    borderRadius: '25px',
                }} />

                <Box sx={{
                    width: '40px',
                    height: '40px',
                    border: '3px solid',
                    borderColor: 'primary.main',
                    borderRadius: '50%',
                }} />
            </Stack>
            <Box
                sx={{
                    width: '200px',
                    height: '100%', // Set a fixed height to maintain shape
                    border: '3px solid',
                    borderColor: 'primary.light', // Ensure 'primary.light' exists in your theme
                    borderRadius: '100px', // If you want a circular image
                    overflow: 'hidden', // Prevents border issues with objectFit
                    display: 'flex', // Ensures proper alignment
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="img"
                    src={'/images/person.jpg'}
                    alt="Person Image"
                    sx={{
                        width: '100%', // Makes image fill the container
                        height: '100%', // Ensures proper sizing
                        objectFit: 'cover', // Ensures image does not distort
                    }}
                />
            </Box>


            <Stack direction={'column-reverse'} gap={2}>
                <Box sx={{
                    height: '300px',
                    width: '40px',
                    border: '3px solid',
                    borderColor: 'primary.main',
                    borderRadius: '25px',
                }} />

                <Box sx={{
                    width: '40px',
                    height: '40px',
                    border: '3px solid',
                    borderColor: 'primary.main',
                    borderRadius: '50%',
                }} />
            </Stack>
        </Box>
    )
}

export default AboutAvatar