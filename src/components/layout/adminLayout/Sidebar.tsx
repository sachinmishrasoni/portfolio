import { alpha, Box, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'
import { IconList } from '../../../utils/iconList';
import {
    FaBriefcase,
    FaCog,
    FaSignOutAlt,
    FaAngleDown,
    FaAngleRight
} from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import SidebarLogo from '../../ui/adminLayout/SidebarLogo';

interface SidebarProps {
    isCollapsed: boolean;
    isMobile: boolean;
    toggleDrawer: () => void;
    drawerWidth: number;
}

interface NavItem {
    text: string;
    icon: React.ReactNode;
    children?: NavItem[];
    path?: string;
}

const headerHeight = 56; // Standard toolbar height
const footerHeight = 48; // Adjust as needed

// const drawerWidth = 240;
const miniDrawerWidth = 70;


const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, isMobile, toggleDrawer, drawerWidth }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedItem, setSelectedItem] = useState<NavItem | null>(null);

    const handleSubMenuToggle = (text: string) => {
        setOpenSubMenus(prev => ({
            ...prev,
            [text]: !prev[text]
        }));
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, item: NavItem) => {
        if (isCollapsed && item.children) {
            setAnchorEl(event.currentTarget);
            setSelectedItem(item);
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedItem(null);
    };

    const handleNavigation = (path?: string) => {
        if (path) {
            navigate(path); // Navigate to the specified route
            handleMenuClose();
            if (isMobile) {
                toggleDrawer(); // Close drawer on mobile after navigation
            }
        }
    };

    const navItems: NavItem[] = [
        {
            text: 'Dashboard',
            icon: <IconList.layout />,
            path: '/admin',
            // children: [
            //   { text: 'Overview', icon: <FaTachometerAlt /> },
            //   { text: 'Analytics', icon: <FaTachometerAlt /> },
            // ]
        },
        {
            text: 'Portfolio',
            icon: <FaBriefcase />,
            children: [
                { text: 'Profile', icon: <IconList.person size={20} />, path: '/admin/portfolio/profile' },
                { text: 'About', icon: <FaBriefcase />, path: '/admin/portfolio/about' },
                { text: 'Experience', icon: <FaBriefcase />, path: '/admin/portfolio/experience' },
                { text: 'Education', icon: <FaBriefcase />, path: '/admin/portfolio/education' },
                { text: 'Skills', icon: <FaBriefcase />, path: '/admin/portfolio/skills' },
                { text: 'Projects', icon: <FaBriefcase />, path: '/admin/portfolio/projects' },
                { text: 'Contact', icon: <IconList.communication />, path: '/admin/portfolio/contact' },
            ]
        },
        { text: 'Settings', icon: <FaCog /> },
        { text: 'Logout', icon: <FaSignOutAlt />, path: '/auth/logout' },
    ];

    // const renderNavItems = (items: NavItem[], depth: number = 0) => {
    //     return items.map((item: NavItem) => (
    //         <div key={item.text}>
    //             <ListItemButton
    //                 // onClick={() => item.children && handleSubMenuToggle(item.text)}
    //                 onClick={() => {
    //                     if (item.children) {
    //                         handleSubMenuToggle(item.text);
    //                     } else {
    //                         handleNavigation(item.path);
    //                     }
    //                 }}
    //                 sx={{
    //                     // pl: isCollapsed ? 1.5 : depth * 2, // Remove padding when collapsed
    //                     py: 0.5,
    //                     justifyContent: isCollapsed ? 'center' : 'flex-start',
    //                     gap: 2,
    //                     borderRadius: '25px',
    //                     '&:hover': {
    //                         bgcolor: theme => alpha(theme.palette.primary.main, 0.1)
    //                     }
    //                 }}
    //             >
    //                 <Tooltip title={isCollapsed ? item.text : ''} placement="right" arrow>
    //                     <ListItemIcon sx={{
    //                         justifyContent: "center", // Always center the icon
    //                         // width: isCollapsed ? miniDrawerWidth : 'auto', // Match drawer width when collapsed
    //                         mx: isCollapsed ? 0 : "auto", // Center horizontally,
    //                         minWidth: 'auto',
    //                         color: 'primary.main',
    //                         transition: 'all 0.3s ease-in'
    //                     }}>
    //                         {item.icon}
    //                     </ListItemIcon>
    //                 </Tooltip>
    //                 <Collapse
    //                     in={!isCollapsed}
    //                     orientation="horizontal"
    //                     sx={{ width: isCollapsed ? 0 : 'auto', flexGrow: 1 }}
    //                 >
    //                     <ListItemText primary={item.text} />
    //                 </Collapse>
    //                 {!isCollapsed && item.children && (
    //                     <IconButton size="small" color='primary' disableRipple>
    //                         {openSubMenus[item.text] ? <FaAngleDown /> : <FaAngleRight />}
    //                     </IconButton>
    //                 )}
    //             </ListItemButton>

    //             {item.children && (
    //                 <Collapse in={openSubMenus[item.text]} timeout="auto" unmountOnExit>
    //                     <List component="div" disablePadding>
    //                         {renderNavItems(item.children, depth + 1)}
    //                     </List>
    //                 </Collapse>
    //             )}
    //         </div>
    //     ));
    // };


    const renderNavItems = (items: NavItem[], depth: number = 0) => {
        return items.map((item: NavItem) => {
            const isActive = location.pathname === item.path;
            const isOpen = openSubMenus[item.text];
            return (
                <div key={item.text} className='sidebar-item'>
                    <ListItemButton
                        onClick={(event) => {
                            if (item.children) {
                                if (isCollapsed) {
                                    handleMenuOpen(event, item); // Open MUI Menu when collapsed
                                } else {
                                    handleSubMenuToggle(item.text); // Toggle submenu when not collapsed
                                }
                            } else {
                                handleNavigation(item.path);
                            }
                        }}

                        sx={{
                            pl: isCollapsed ? 1.8 : depth * 2, // Remove padding when collapsed
                            py: 0.5,
                            justifyContent: isCollapsed ? 'center' : 'flex-start',
                            borderRadius: '25px',
                            bgcolor: theme => isActive ? alpha(theme.palette.primary.main, 0.3) : 'transparent',
                            '&:hover': {
                                bgcolor: theme => alpha(theme.palette.primary.main, 0.1)
                            }
                        }}
                    >
                        <Tooltip title={isCollapsed ? item.text : ''} placement="right">
                            <ListItemIcon sx={{
                                minWidth: isCollapsed ? 0 : '56px',
                                justifyContent: 'center', // Always center the icon
                                width: isCollapsed ? miniDrawerWidth : 'auto', // Match drawer width when collapsed
                                mx: 'auto', // Center horizontally,
                                color: isActive ? 'primary.dark' : 'primary.main',
                            }}>
                                {item.icon}
                            </ListItemIcon>
                        </Tooltip>
                        <Collapse
                            in={!isCollapsed}
                            orientation="horizontal"
                            sx={{ width: isCollapsed ? 0 : 'auto', flexGrow: 1 }}
                        >
                            <ListItemText primary={item.text} />
                        </Collapse>
                        {!isCollapsed && item.children && (
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main' }}>
                                {isOpen ? <FaAngleDown /> : <FaAngleRight />}
                            </Box>
                        )}
                    </ListItemButton>

                    {!isCollapsed && item.children && (
                        <Collapse in={openSubMenus[item.text]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding sx={{
                                mt: 0.5,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0.5
                            }}>
                                {renderNavItems(item.children, depth + 1)}
                            </List>
                        </Collapse>
                    )}
                </div>
            )
        });
    };

    return (
        <Drawer
            variant={isMobile ? "temporary" : "permanent"}
            open={!isMobile || !isCollapsed}
            onClose={toggleDrawer}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                transition: "all 0.3s ease-in-out",
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    // backgroundColor: "background.paper",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                    border: 'none',
                    boxSizing: "border-box",
                    transition: "width 0.3s ease-in-out",
                },
            }}
        >
            {/* Fixed Header */}
            <Box
                component="header"
                sx={{
                    height: headerHeight,
                    position: "sticky", // Fixed within Drawer
                    top: 0,
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: isCollapsed ? "center" : "flex-start",
                    justifyContent: 'center',
                    px: 2,
                    borderBottom: "1px solid",
                    borderColor: "grey.300",
                }}
            >


                <SidebarLogo isCollapsed={isCollapsed} isMobile={isMobile} />

            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1, // Takes available space
                    overflowY: "auto", // Scrollable
                    overflowX: "hidden",
                    height: `calc(100vh - ${headerHeight + footerHeight}px)`, // Dynamic height
                    px: 1,
                    py: 0,
                    "&::-webkit-scrollbar": { width: 0 }, // Hide scrollbar in Webkit browsers
                    scrollbarWidth: "none", // Firefox
                    msOverflowStyle: "none", // IE/Edge
                }}
            >
                {/* {drawerContent} */}
                <List
                    sx={{
                        p: 0, mt: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5
                    }}
                >
                    {renderNavItems(navItems)}
                </List>

                {/* <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}><IconList.antDesign fontSize={20} /></Box> */}
            </Box>

            {/* Fixed Footer */}
            <Box
                component="footer"
                sx={{
                    height: footerHeight,
                    position: "sticky", // Fixed within Drawer
                    bottom: 0,
                    // bgcolor: "grey.200", // Example background
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
                    px: 1
                }}
            >
                <Typography variant="body2">
                    {isCollapsed ? "©" : "© 2025 SAM"}
                </Typography>
                {/* <CustomButton variant='contained' shape='round' fullWidth>
                    <IconList.logout size={25} />
                    {isCollapsed ? "" : "Logout"}
                </CustomButton> */}
            </Box>

            {/* MUI Menu for child items when collapsed */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: -15,
                }}
                sx={{
                    '& .MuiMenu-paper': {
                        px: 0.5,
                        borderRadius: 2,
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                    },
                    '& .MuiMenuItem-root': {
                        py: 1,
                        borderRadius: 4
                    },
                    '& .MuiListItemIcon-root': {
                        minWidth: '20px !important'
                    }
                }}
            >
                {selectedItem?.children?.map((child) => (
                    <MenuItem
                        key={child.text}
                        onClick={() => handleNavigation(child.path)}
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                        <ListItemIcon sx={{ color: 'primary.main' }}>{child.icon}</ListItemIcon>
                        <Typography variant='body2'>{child.text}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Drawer>
    )
}

export default Sidebar;
