import { Box, Container, Grid, Typography, Link, Tooltip, Stack } from '@mui/material';
import SocialMediaBtns from '../ui/SocialMediaBtns';

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
                py: 6,
                backgroundColor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {/* About Section */}
                    <Grid item xs={12} md={3}>
                        {/* <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            SAM
                        </Typography> */}
                        <FooterHeader title="SAM" />
                        <Typography variant="body2" color="text.secondary">
                            Passionate full-stack developer creating meaningful digital experiences through
                            innovative solutions and clean code.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} md={3}>  {/* Changed from md={2} to md={3} for better spacing */}
                        {/* <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Quick Links
                        </Typography> */}
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
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} md={3}>
                        {/* <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Contact
                        </Typography> */}
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
                    </Grid>

                    {/* Social Links */}
                    <Grid item xs={12} md={3}>
                        {/* <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Follow Me
                        </Typography> */}
                        <FooterHeader title="Follow Me" />
                        <Box>
                            <SocialMediaBtns />
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright */}
                <Box mt={5}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                        sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 3 }}
                    >
                        © {currentYear}{' '}
                        <Tooltip title="Sachin Mishra Soni" arrow placement='top'>
                            <span style={{ cursor: 'pointer', fontWeight: 'bold' }}>SAM</span>
                        </Tooltip>. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;