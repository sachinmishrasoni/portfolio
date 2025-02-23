import { alpha, Box, Container, Grid2, Typography, useTheme } from '@mui/material'
import servicesData from '../../data/services'
import SectionHeader from '../../components/ui/SectionHeader'
import SpotlightPaper from '../../components/ui/SpotlightPaper'

const Service = () => {
    const theme = useTheme();
    return (
        <Box id="service" data-section minHeight={'100vh'} position={'relative'} overflow={'hidden'}
            sx={{
                background: theme => `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${theme.palette.background.default} 50%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
            }}
        >
            <Container sx={{ py: 5 }}>
                <SectionHeader title={'My Services'} subtitle={'What I Offer'} conunt={'03'} />

                <Grid2 container spacing={2} mt={2}>
                    {
                        servicesData.map((item, index) => (
                            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }} >
                                <SpotlightPaper
                                    spotlightColor={alpha(theme.palette.primary.main, 0.25)}
                                    sx={{
                                        backgroundColor: 'background.paper',
                                        p: 2,
                                        minHeight: 200,
                                        borderRadius: 3,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 1,
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                                        transition: 'all 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        },
                                        '& .icon': {
                                            color: 'primary.main',
                                            transition: 'all 0.3s ease-in-out',
                                        },
                                        '&:hover .icon': {
                                            transform: 'scale(1.5) rotate(5deg)',
                                        }
                                    }}
                                >
                                    <Box className='icon' color={'primary.main'}>{item.icon && item.icon({ fontSize: 45 })}</Box>
                                    <Typography variant='h5' fontWeight={'bold'} >{item.title}</Typography>
                                    <Box sx={{
                                        width: '15%',
                                        height: '4px',
                                        backgroundColor: 'primary.main',
                                        borderRadius: '5px'
                                    }} />
                                    <Typography variant='body1' color='text.secondary' textAlign={'center'}>{item.description}</Typography>
                                </SpotlightPaper>
                            </Grid2>
                        ))
                    }
                </Grid2>
            </Container>
        </Box>
    )
}

export default Service