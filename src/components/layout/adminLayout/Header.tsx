import { alpha, AppBar, Avatar, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { IconList } from '../../../utils/iconList';
import { useLocation } from 'react-router-dom';
import { getPageTitle } from '../../../constant/pageTitles';
import { color, motion } from 'framer-motion';
import HeaderActions from '../../ui/adminLayout/HeaderActions';
import CustomMenu from '@/components/common/CustomMenu';

interface IProps {
    isCollapsed?: boolean;
    toggleDrawer?: () => void;
}

// Animation variants for the page title
const titleVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Header: React.FC<IProps> = ({ isCollapsed, toggleDrawer }) => {
    const location = useLocation();
    const activePage = getPageTitle(location.pathname);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const menuItems = [
        { text: 'Settings', path: '/settings', icon: <IconList.settings /> },
        { text: 'Logout', path: '/logout', icon: <IconList.logout /> },
    ];

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleSelect = (path: string) => {
        console.log('Navigating to:', path);
        handleClose();
    };

    return (
        <AppBar
            position='sticky'
            sx={{
                top: 0,
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                backdropFilter: "blur(10px)",
                background: (theme) =>
                    `linear-gradient(175deg, ${alpha(theme.palette.primary.main, 0.4)} 0%, ${alpha(
                        theme.palette.background.paper,
                        0.5
                    )} 50%, ${alpha(theme.palette.primary.main, 0.2)} 100%)`,
                borderBottom: '0.1px solid',
                borderColor: theme => alpha(theme.palette.primary.main, 0.5),
            }}
        >
            <Toolbar sx={{
                minHeight: "56px",
                px: '16px !important',
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <IconButton onClick={toggleDrawer}>
                        <IconList.menuLeft />
                    </IconButton>

                    {/* Apply animation to active page title */}
                    <motion.div key={activePage} initial="hidden" animate="visible" exit="hidden" variants={titleVariants}>
                        <Typography variant='h6' component='h1'>{activePage}</Typography>
                    </motion.div>
                </Stack>

                {/* <HeaderActions /> */}
                <IconButton size='small' sx={{ p: 0 }} onClick={handleOpen}>
                    <Avatar sx={{
                        bgcolor: theme => alpha(theme.palette.primary.main, 0.3),
                        color: theme => theme.palette.primary.dark,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>SM</Avatar>
                </IconButton>
                <CustomMenu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                    menuList={menuItems}
                    onSelect={handleSelect}
                    anchorOrigin={{ vertical: 55, horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
