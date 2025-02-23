import { alpha, Box, Button, Container, Grid, Stack, Typography, useTheme } from '@mui/material'
import computerCharPng from '/images/cartoonChar.png'
import Particles from '../../components/animated/Particles'
import ViewDownloadBtn from '../../components/ui/ViewDownloadBtn';
import { TypeAnimation } from 'react-type-animation';
import Mouse from '../../components/animated/Mouse';
import BlobDiv from '../../components/common/BlobDiv';
// import blobDiv from '/svg/blobDiv.svg'

const Hero = () => {
    const theme = useTheme();
    return (
        <Box
            id="home"
            data-section
            height={'100vh'}
            position={'relative'}
            overflow={'hidden'}
            sx={{
                background: theme => `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${theme.palette.background.default} 50%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
            }}
        >

            <Box sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 2, // Lower zIndex than content
                pointerEvents: 'auto' // Allow mouse through to particles
            }}>
                <Particles
                    particleColors={[theme.palette.primary.main, theme.palette.primary.light]}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    inset: 0, zIndex: 2,
                    backdropFilter: 'blur(1px)',
                    pointerEvents: 'none'
                }}
            >
                <Container sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        {/* Image Grid - First on mobile */}
                        <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
                            <Box
                                component={'img'}
                                src={computerCharPng}
                                sx={{
                                    width: '100%',
                                    height: { xs: '300px', md: 'auto' },
                                    objectFit: 'contain',
                                    display: 'block',
                                    mx: 'auto',
                                    maxWidth: '500px'
                                }}
                            />
                        </Grid>

                        {/* Content Grid - Second on mobile */}
                        <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                height: { md: '100vh' },
                                textAlign: { xs: 'center', md: 'left' }
                            }}>
                                <Typography variant='h6'>Hi there! 👋</Typography>
                                <Typography variant='h3' fontWeight={'bold'} sx={{
                                    '& span': {
                                        color: 'primary.main'
                                    }
                                }}>
                                    I'm <span>Sachin Mishra</span>
                                </Typography>
                                <Stack direction={'row'} justifyContent={{ xs: 'center', md: 'flex-start' }} alignContent={'center'} gap={1}>
                                    <Typography variant='h4' color='primary'>a</Typography>
                                    <Typography variant='h4'>
                                        <TypeAnimation
                                            sequence={['Full Stack Developer.', 3000, 'MERN Stack Developer.', 3000, 'MEAN Stack Developer.', 3000]}
                                            wrapper='span'
                                            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                                            repeat={Infinity}
                                        />
                                    </Typography>
                                </Stack>
                                <Typography variant='h6' component={'q'} mt={0.5}>
                                    Coding is my language, and the web is my canvas. Join me on a journey of innovation,
                                    where every pixel and line of code has a purpose.
                                </Typography>

                                <Stack
                                    direction={'row'}
                                    gap={2}
                                    mt={2}
                                    alignItems={'center'}
                                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                                    sx={{ pointerEvents: 'auto' }}
                                >
                                    <Button
                                        variant='contained'
                                        sx={{ borderRadius: '25px', boxShadow: 'none' }}
                                    >
                                        Hire me
                                    </Button>
                                    {/* <Button
                                        variant='outlined'
                                        sx={{ borderRadius: '25px', boxShadow: 'none' }}
                                    >
                                        Download CV
                                    </Button> */}
                                    <ViewDownloadBtn />
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* <Box component={'img'} src='/svg/blobDiv.svg' width={800}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: { xs: '-400px', sm: '-700px', md: '-500px', lg: '-700px' },
                    transform: 'translate(-50%, -50%) rotate(30deg)',
                    zIndex: 0,
                    opacity: 0.1,
                    color: 'orange'
                }}
            /> */}

            {/* <Box
                component={BlobDiv} // Use the component instead of `img`
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: { xs: '-400px', sm: '-700px', md: '-500px', lg: '-700px' },
                    transform: 'translate(-50%, -50%) rotate(30deg)',
                    zIndex: 0,
                    opacity: 0.1,
                }}
            /> */}

            <BlobDiv
              sx={{
                position: 'absolute',
                top: '50%',
                right: { xs: '-400px', sm: '-700px', md: '-500px', lg: '-700px' },
                transform: 'translate(-50%, -50%) rotate(30deg)',
                zIndex: 0,
                opacity: 0.1
              }}
            />

            <Box sx={{
                position: 'absolute',
                bottom: 50,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2
            }}>
                <Mouse />
            </Box>
        </Box>
    )
}

export default Hero