import { alpha, Box, Stack, Typography } from '@mui/material'
import SocialMediaBtns from '@/components/ui/SocialMediaBtns'

const AboutMe = () => {
    return (
        <Box id='about-me'>
            <Stack direction={'row'} alignItems={'flex-end'} gap={1}>
                <Stack sx={{ flexShrink: 0 }}>
                    <Typography variant='body1' color='text.secondary'>Discover</Typography>
                    <Typography variant='h4' fontWeight={'bold'} lineHeight={1}>About Me</Typography>
                </Stack>
                <Box sx={{
                    width: '100%',
                    height: '4px',
                    backgroundColor: 'primary.light',
                    borderRadius: '5px',
                    mb: 1.2
                }} />
            </Stack>
            <Box>
                <Typography variant='body1' color='text.secondary' mt={2}>I'm a passionate and dedicated Full Stack Developer with a strong
                    foundation in JavaScript, TypeScript, and React. With a keen eye for design and a knack for
                    problem-solving, I bring a unique blend of creativity and technical expertise to every project I undertake.
                    My journey in the world of web development has been marked by a commitment to staying up-to-date with the latest
                    trends and technologies, ensuring that I can deliver cutting-edge solutions that meet the highest standards of
                    functionality and user experience.</Typography>
            </Box>

            <Box sx={{
                mt: 2,
                backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                borderRadius: '2px 5px 5px 2px',
                p: 1,
                borderLeft: '3px solid',
                borderColor: 'primary.main'
            }}>
                <Typography variant='body1' component={'q'} color='text.secondary' mt={2}>I'm not a great programmer; I'm just a good programmer with great habits.</Typography>
            </Box>

            <Box mt={2}>
                <Typography variant='body1' color='text.secondary' fontWeight={'bold'} >Follow me:</Typography>
                <SocialMediaBtns />
            </Box>
        </Box>
    )
}

export default AboutMe