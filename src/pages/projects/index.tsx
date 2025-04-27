import { Box, Container, Stack, Typography } from '@mui/material'

const Projects = () => {
    return (
        <Box className='projects-page'>
            <Container sx={{ minHeight: '100vh', py: 5 }}>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Typography variant='h4' fontWeight='bold'>Projects</Typography>
                    <Typography variant='h3' sx={{ opacity: 0.5, fontWeight: 'bold' }}>05</Typography>
                </Stack>
                lorem2000
            </Container>
        </Box>
    )
}

export default Projects