import { useState } from 'react';
import { 
  Box, 
  Drawer, 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  List, 
  ListItemButton, 
  ListItemText, 
  ListItemIcon,
  Collapse,
  Tooltip
} from "@mui/material";
import {
  FaTachometerAlt,
  FaBriefcase,
  FaCog,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
  FaAngleDown,
  FaAngleRight
} from 'react-icons/fa';

interface NavItem {
  text: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

const drawerWidth = 240;
const miniDrawerWidth = 60;

const Admin: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSubMenuToggle = (text: string) => {
    setOpenSubMenus(prev => ({
      ...prev,
      [text]: !prev[text]
    }));
  };

  const navItems: NavItem[] = [
    { 
      text: 'Dashboard', 
      icon: <FaTachometerAlt />,
      children: [
        { text: 'Overview', icon: <FaTachometerAlt /> },
        { text: 'Analytics', icon: <FaTachometerAlt /> },
      ]
    },
    { 
      text: 'Portfolio', 
      icon: <FaBriefcase />,
      children: [
        { text: 'Projects', icon: <FaBriefcase /> },
        { text: 'Skills', icon: <FaBriefcase /> },
      ]
    },
    { text: 'Settings', icon: <FaCog /> },
    { text: 'Logout', icon: <FaSignOutAlt /> },
  ];

  const renderNavItems = (items: NavItem[], depth: number = 0) => {
    return items.map((item: NavItem) => (
      <div key={item.text}>
        <ListItemButton 
          onClick={() => item.children && handleSubMenuToggle(item.text)}
          sx={{ 
            pl: isCollapsed ? 1 : depth * 2, // Remove padding when collapsed
            justifyContent: isCollapsed ? 'center' : 'flex-start'
          }}
        >
          <Tooltip title={isCollapsed ? item.text : ''} placement="right">
            <ListItemIcon sx={{ 
              minWidth: isCollapsed ? 0 : '56px',
              justifyContent: 'center', // Always center the icon
              width: isCollapsed ? miniDrawerWidth : 'auto', // Match drawer width when collapsed
              mx: 'auto' // Center horizontally
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
            <IconButton size="small">
              {openSubMenus[item.text] ? <FaAngleDown /> : <FaAngleRight />}
            </IconButton>
          )}
        </ListItemButton>
        
        {item.children && (
          <Collapse in={openSubMenus[item.text]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderNavItems(item.children, depth + 1)}
            </List>
          </Collapse>
        )}
      </div>
    ));
  };

  const drawerContent = (
    <Box sx={{ 
      width: isCollapsed ? miniDrawerWidth : drawerWidth,
      transition: 'width 0.2s',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ 
        p: 1,
        display: 'flex',
        justifyContent: isCollapsed ? 'center' : 'flex-end'
      }}>
        <IconButton onClick={handleCollapseToggle}>
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </IconButton>
      </Box>
      
      <List sx={{ p: 0 }}>
        {renderNavItems(navItems)}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: isCollapsed ? miniDrawerWidth : drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isCollapsed ? miniDrawerWidth : drawerWidth,
            boxShadow: '0px 8px 10px rgba(0,0,0,0.1)',
            transition: 'width 0.2s',
            overflowX: 'hidden',
            top: '64px',
            height: 'calc(100% - 64px)'
          }
        }}
      >
        {drawerContent}
      </Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <AppBar 
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin Panel
            </Typography>
            {/* <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <FaBars />
            </IconButton> */}
          </Toolbar>
        </AppBar>

        <Box 
          component="main"
          sx={{ 
            flexGrow: 1,
            p: 3,
            mt: 8,
            minHeight: 'calc(100vh - 64px)'
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome to Admin Dashboard
          </Typography>
          <Typography paragraph>
            This is your portfolio admin panel. Use the drawer on the left to navigate
            between different sections.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;