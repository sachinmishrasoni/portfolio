import { alpha, Box, useMediaQuery, useTheme } from "@mui/material"
import Header from "./Header"
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


const AdminLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = () => {
        setIsCollapsed((prev) => !prev);
    };

    const drawerWidth = isMobile ? 300 : isCollapsed ? 75 : 250;
    
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar
                isCollapsed={isCollapsed}
                isMobile={isMobile}
                toggleDrawer={toggleDrawer}
                drawerWidth={drawerWidth}
            />

            <Box
                sx={{
                    flexGrow: 1,
                    transition: "all 0.3s ease-in",
                }}
            >
                <Header
                    isCollapsed={isCollapsed}
                    toggleDrawer={toggleDrawer}
                />

                <Box component={'main'}
                    sx={{
                        minHeight: 'calc(100vh - 60px)',
                        p: 1.5,
                        px: { xs: 1.5, md: 2 },
                        background: theme => `linear-gradient(90deg, 
                                    ${alpha(theme.palette.primary.main, 0.1)} 0%, 
                                    ${theme.palette.background.default} 50%, 
                                    ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
                    }}
                >
                    <Outlet />
                </Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default AdminLayout
