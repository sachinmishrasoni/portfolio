import { alpha, Box, Container, Grid2, Stack } from '@mui/material'
import AboutAvatar from '@/components/ui/AboutAvatar';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

const AboutSection = () => {
  return (
    <Box id='about' data-section sx={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      background: theme => `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${theme.palette.background.default} 50%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
    }}>
      <Box sx={{ height: '100%', position: 'relative', zIndex: 1, backdropFilter: 'blur(1px)' }}>
        <Container sx={{ py: 10 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 5, md: 4 }}>
              <AboutAvatar />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 7, md: 8 }}>
              <AboutMe />
            </Grid2>
          </Grid2>

          <Stack direction={'column'} gap={5} mt={5}>
            <Experience />
            <Education />
            <Skills />
          </Stack>
        </Container>
      </Box>


      <Box
        component={'img'}
        src='/svg/blobDiv.svg'
        width={800}
        sx={{
          position: 'absolute',
          top: '20%',
          // left: { xs: '-400px', md: '-500px', lg: '-400px' },
          transform: 'translate(-50%, -50%) rotate(30deg)',
          zIndex: -5,
          opacity: 0.1,
        }}
      />

      <Box
        component={'img'}
        src='/svg/blobDiv.svg'
        width={800}
        sx={{
          position: 'absolute',
          bottom: '-25%',
          // left: { xs: '-400px', md: '-500px', lg: '-400px' },
          transform: 'translate(-50%, -50%) rotate(30deg)',
          zIndex: -5,
          opacity: 0.1,
        }}
      />

      <Box
        component={'img'}
        src='/svg/blobDiv.svg'
        width={800}
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: '-400px', md: '-500px', lg: '-700px' },
          transform: 'translate(-50%, -50%) rotate(30deg)',
          zIndex: -5,
          opacity: 0.1,
        }}
      />
    </Box>
  )
}

export default AboutSection;
