import { Box, Container, Grid, Typography, Link, IconButton, Tooltip, Stack } from '@mui/material';
import { IconList } from '../../utils/iconList';

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

    const socialLinks = [
        { icon: <IconList.github />, url: 'https://github.com/yourusername' },
        { icon: <IconList.linkedin />, url: 'https://linkedin.com/in/yourprofile' },
        { icon: <IconList.twitter />, url: 'https://twitter.com/yourhandle' },
        { icon: <IconList.facebook />, url: 'https://facebook.com/yourpage' },
        { icon: <IconList.email />, url: 'mailto:youremail@example.com' },
    ];

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
                            Email: hello@example.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone: +91-7543823928
                        </Typography>
                    </Grid>

                    {/* Social Links */}
                    <Grid item xs={12} md={3}>
                        {/* <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Follow Me
                        </Typography> */}
                        <FooterHeader title="Follow Me" />
                        <Box>
                            {socialLinks.map((social, index) => (
                                <IconButton
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: 'text.secondary',
                                        '&:hover': { color: 'primary.main' }
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
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