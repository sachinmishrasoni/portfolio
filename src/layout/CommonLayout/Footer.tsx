import { Box, Container, Typography, Link, Tooltip, Stack, Grid2, alpha } from '@mui/material';
import SocialMediaBtns from '../../components/ui/SocialMediaBtns';

const FooterHeader = ({ title }: { title: string }) => (
    <Box display={'flex'}>
        <Typography variant="h6" color="text.primary" gutterBottom sx={{
            fontWeight: 'bold',
            '&::after': {
                content: '""',
                display: 'block',
                width: '45%',
                height: '2px',
                backgroundColor: 'primary.main',
            }
        }}>
            {title}
        </Typography>
    </Box>
)
const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', url: '#home' },
        {
            label: 'About',
            url: '#about',
            subLinks: [
                { label: 'Skills', url: '#skills' },
                { label: 'Experience', url: '#experience' },
                { label: 'Education', url: '#education' },
            ]
        },
        { label: 'Service', url: '#service' },
        { label: 'Projects', url: '#projects' },
        { label: 'Contact', url: '#contact' },
    ]

    return (
        <Box
            component="footer"
            sx={{
                // pt: 6,
                // backgroundColor: 'background.paper',
                // borderTop: '1px solid',
                // borderColor: 'divider',
                // borderRadius: '15px 15px 0 0'
                background: theme => `linear-gradient(90deg, 
                                    ${alpha(theme.palette.primary.main, 0.1)} 0%, 
                                    ${theme.palette.background.default} 50%, 
                                    ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
            }}
        >
            <Box sx={{
                backgroundColor: 'background.paper',
                borderRadius: '50px 50px 0 0',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            }}>
                <Container>
                    <Grid2 container spacing={2} py={5}>
                        {/* About Section */}
                        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                            <FooterHeader title="SAM" />
                            <Typography variant="body2" color="text.secondary">
                                Passionate full-stack developer creating meaningful digital experiences through
                                innovative solutions and clean code.
                            </Typography>
                        </Grid2>

                        {/* Quick Links */}
                        <Grid2 size={{ xs: 12, sm: 3, lg: 3 }}>
                            <FooterHeader title="Quick Links" />
                            <Box component="nav">
                                {quickLinks.map((item, index) => (
                                    <Box key={index} sx={{ mb: 1 }}>
                                        <Link
                                            href={item.url}
                                            color="text.secondary"
                                            display="block"
                                            gutterBottom
                                            sx={{
                                                textDecoration: 'none',
                                                '&:hover': { color: 'primary.main' },
                                                fontWeight: item.subLinks ? 600 : 'normal'
                                            }}
                                        >
                                            {item.label}
                                        </Link>

                                        {item.subLinks && (
                                            <Stack spacing={0.5} sx={{ pl: 2, borderLeft: '2px solid', borderColor: 'divider' }}>
                                                {item.subLinks.map((subLink, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={subLink.url}
                                                        color="text.secondary"
                                                        display="block"
                                                        sx={{
                                                            textDecoration: 'none',
                                                            fontSize: '0.875rem',
                                                            '&:hover': {
                                                                color: 'primary.main',
                                                                transform: 'translateX(4px)'
                                                            },
                                                            transition: 'all 0.2s ease'
                                                        }}
                                                    >
                                                        {subLink.label}
                                                    </Link>
                                                ))}
                                            </Stack>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        </Grid2>

                        {/* Contact Info */}
                        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                            <FooterHeader title="Contact" />
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                Karol Bagh, New Delhi, India
                            </Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                Email: sachinmishraf103@gmail.com
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Phone: +91-7545823925
                            </Typography>
                        </Grid2>

                        {/* Social Links */}
                        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                            <FooterHeader title="Follow Me" />
                            <Box>
                                <SocialMediaBtns />
                            </Box>
                        </Grid2>
                    </Grid2>

                    {/* Copyright */}
                    <Box sx={{
                        py: 2,
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            align="center"
                        // sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 3 }}
                        >
                            © {currentYear}{' '}
                            <Tooltip title="Sachin Mishra Soni" arrow placement='top'>
                                <span style={{ cursor: 'pointer', fontWeight: 'bold' }}>SAM</span>
                            </Tooltip>. All rights reserved.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;