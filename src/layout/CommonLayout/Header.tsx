import { alpha, AppBar, Avatar, Box, IconButton, List, ListItemButton, Stack, Toolbar } from '@mui/material';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import { IconList } from '../../utils/iconList';
import CustomMenu from '../../components/common/CustomMenu';
import ThemeToggleBtn from '../../components/ui/ThemeToggleBtn';
import HeaderName from '@/components/HeaderName';

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
    { label: 'Services', link: '#services' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' },
];

const Header = () => {
    // const navigate = useNavigate();
    const sectionsRef = useRef<HTMLElement[]>([]);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeSection, setActiveSection] = useState<string | null>('home');
    const [isVisible, setIsVisible] = useState(false);

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const menuList = [
        { text: 'Home', path: '/settings', icon: <IconList.home /> },
        { text: 'About', path: '/logout', icon: <IconList.person /> },
        { text: 'Services', path: '/logout', icon: <IconList.service /> },
        { text: 'Projects', path: '/logout', icon: <IconList.project /> },
        { text: 'Contact me', path: '/logout', icon: <IconList.contact /> },
        { text: 'Settings', path: '/logout', icon: <IconList.settings /> },
    ];

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleSelect = (path: string) => {
        console.log('Navigating to:', path);
        handleClose();
    };

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
    // const listenToScroll = useCallback(
    //     debounce(() => {
    //         const pageYOffset = window.pageYOffset + 200;
    //         let newActiveSection: string | null = null;

    //         sectionsRef.current.forEach((section) => {
    //             if (section) {
    //                 const sectionOffsetTop = section.offsetTop;
    //                 const sectionHeight = section.offsetHeight;
    //                 if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
    //                     newActiveSection = section.id;
    //                 }
    //             }
    //         });

    //         setActiveSection((prev) => (prev !== newActiveSection ? newActiveSection : prev));

    //         const hieghtToHidden = 150;
    //         const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    //         if (winScroll > hieghtToHidden) {
    //             setIsVisible(true);
    //         } else {
    //             setIsVisible(false);
    //         }
    //     }, 100),
    //     []
    // );

    const listenToScroll = useMemo(
        () =>
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

                const hieghtToHidden = 150;
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
                    `linear-gradient(175deg, ${alpha(theme.palette.primary.main, 0.4)} 0%, ${alpha(
                        theme.palette.background.paper,
                        0.2
                    )} 50%, ${alpha(theme.palette.primary.main, 0.2)} 100%)`,
                borderRadius: '50px',
                border: '0.1px solid',
                borderColor: theme => alpha(theme.palette.primary.main, 0.5),
                top: isVisible ? 5 : '-100px',
                left: '50%',
                transform: 'translateX(-50%)',
                transition: 'all 0.5s ease-in-out',
                boxShadow: 'none',
                backdropFilter: 'blur(10px)',
                pr: '0px !important',
            }}
        >
            <Toolbar
                sx={{
                    p: '0px !important', pr: '8px !important',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                }}
            >
                <Stack direction="row" alignItems="center" gap={0}>
                    <IconButton sx={{
                        p: 0,
                        margin: 0.5
                    }}>
                        <Avatar
                            src="/images/avatar_face.png"
                            alt="avatar"

                            sx={{ minWidth: { xs: '50px', md: '45px' }, height: { xs: '50px', md: '45px' } }}
                        />
                    </IconButton>
                    {/* <Typography variant="h4" fontWeight="bold" >
                        SAM
                    </Typography> */}
                    <HeaderName />
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
                                // ref={(el: any) => (itemsRef.current[index] = el)}
                                ref={(el: HTMLDivElement | null) => {
                                    itemsRef.current[index] = el;
                                }}
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
                                                ? ''
                                                : 'text.primary',
                                        fontWeight: 'bold',
                                        borderRadius: 25,
                                        py: 0.8,
                                        transition: 'all 0.3s ease',
                                        zIndex: 2,
                                        '&:hover': {
                                            color:
                                                activeSection === item.label.toLowerCase()
                                                    ? ''
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
                                top: '7px',
                                borderRadius: '25px',
                                bgcolor: 'primary.main',
                                zIndex: 0,
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                                transition: 'all 0.3s ease-in',
                                ...indicatorStyle,
                            }}
                        />
                    </List>
                </Box>

                <Stack direction="row" alignItems="center" gap={1}>
                    <ThemeToggleBtn />
                    <IconButton onClick={handleOpen} sx={{ display: { xs: 'block', md: 'none' } }}>
                        <IconList.menuRight />
                    </IconButton>
                </Stack>
            </Toolbar>
            <CustomMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                menuList={menuList}
                onSelect={handleSelect}
                anchorOrigin={{ vertical: 55, horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
        </AppBar>
    );
};

export default Header;
