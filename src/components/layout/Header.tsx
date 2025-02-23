import { alpha, AppBar, Avatar, Box, Button, List, ListItemButton, Stack, Toolbar, Typography } from '@mui/material';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import debounce from 'lodash/debounce';

// Define the type for menu items
interface MenuItem {
    label: string;
    link: string;
}

// Define the type for indicator style
interface IndicatorStyle {
    left?: number;
    width?: number;
    height?: number;
    opacity?: number;
}

const menuItems: MenuItem[] = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Service', link: '#service' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' },
];

const Header = () => {
    const sectionsRef = useRef<HTMLElement[]>([]);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeSection, setActiveSection] = useState<string | null>('home');
    const [isVisible, setIsVisible] = useState(false);

    // Initialize indicator style
    const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({
        left: 0,
        width: 0,
        height: 0,
        opacity: 0,
    });

    // Update indicator position when activeSection changes
    useLayoutEffect(() => {
        const activeIndex = menuItems.findIndex(item => item.label.toLowerCase() === activeSection);
        const activeItem = itemsRef.current[activeIndex];
        if (activeItem) {
            setIndicatorStyle({
                left: activeItem.offsetLeft,
                width: activeItem.offsetWidth,
                height: activeItem.offsetHeight,
                opacity: 1,
            });
        }
    }, [activeSection]);

    // Handle window resize
    const handleResize = useCallback(() => {
        const activeIndex = menuItems.findIndex(item => item.label.toLowerCase() === activeSection);
        const activeItem = itemsRef.current[activeIndex];
        if (activeItem) {
            setIndicatorStyle({
                left: activeItem.offsetLeft,
                width: activeItem.offsetWidth,
                height: activeItem.offsetHeight,
                opacity: 1,
            });
        }
    }, [activeSection]);

    // Scroll listener (debounced)
    const listenToScroll = useCallback(
        debounce(() => {
            const pageYOffset = window.pageYOffset + 200;
            let newActiveSection: string | null = null;

            sectionsRef.current.forEach((section) => {
                if (section) {
                    const sectionOffsetTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
                        newActiveSection = section.id;
                    }
                }
            });

            setActiveSection((prev) => (prev !== newActiveSection ? newActiveSection : prev));

            let hieghtToHidden = 150;
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

            if (winScroll > hieghtToHidden) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, 100),
        []
    );

    // Setup event listeners and section references
    useEffect(() => {
        sectionsRef.current = Array.from(document.querySelectorAll('[data-section]')) as HTMLElement[];
        window.addEventListener('scroll', listenToScroll);
        window.addEventListener('resize', handleResize);

        handleResize(); // Initial call

        return () => {
            window.removeEventListener('scroll', listenToScroll);
            window.removeEventListener('resize', handleResize);
            listenToScroll.cancel();
        };
    }, [handleResize, listenToScroll]);

    return (
        <AppBar
            position="fixed"
            sx={{
                width: {
                    xs: 'calc(100% - 20px)',
                    sm: 'calc(100% - 40px)',
                    md: 'calc(100% - 60px)',
                    lg: '1200px',
                },
                mx: 'auto',
                background: (theme) =>
                    `linear-gradient(175deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(
                        theme.palette.background.paper,
                        0.2
                    )} 50%, ${alpha(theme.palette.primary.main, 0.2)} 100%)`,
                borderRadius: '50px',
                border: '0.1px solid',
                borderColor: 'primary.main',
                top: isVisible ? 5 : '-100px',
                left: '50%',
                transform: 'translateX(-50%)',
                transition: 'all 0.5s ease-in-out',
                boxShadow: 'none',
                backdropFilter: 'blur(10px)',
            }}
        >
            <Toolbar sx={{ px: '10px !important', display: 'flex', justifyContent: 'space-between' }}>
                <Stack direction="row" alignItems="center" gap={1}>
                    <Avatar src="/images/avatar.jpg" />
                    <Typography variant="h4" fontWeight="bold">
                        SAM
                    </Typography>
                </Stack>

                <Box sx={{ position: 'relative' }}>
                    <List
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 0.5,
                            position: 'relative',
                        }}
                    >
                        {menuItems.map((item, index) => (
                            <Box
                                key={item.label}
                                ref={(el: any) => (itemsRef.current[index] = el)}
                                sx={{ position: 'relative' }}
                            >
                                <ListItemButton
                                    onClick={() => {
                                        setActiveSection(item.label.toLowerCase());
                                        window.location.hash = item.link;
                                    }}
                                    sx={{
                                        color:
                                            activeSection === item.label.toLowerCase()
                                                ? 'text.primary'
                                                : 'text.primary',
                                        fontWeight: 'bold',
                                        borderRadius: 25,
                                        transition: 'all 0.3s ease',
                                        zIndex: 2,
                                        '&:hover': {
                                            color:
                                                activeSection === item.label.toLowerCase()
                                                    ? 'text.primary'
                                                    : 'primary.main',
                                        },
                                    }}
                                >
                                    {item.label}
                                </ListItemButton>
                            </Box>
                        ))}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 7,
                                borderRadius: '25px',
                                bgcolor: 'primary.main',
                                zIndex: 0,
                                transition: 'all 0.3s ease-in',
                                ...indicatorStyle,
                            }}
                        />
                    </List>
                </Box>

                <Button variant="contained" sx={{ borderRadius: '25px', boxShadow: 'none' }}>
                    Hire me
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
