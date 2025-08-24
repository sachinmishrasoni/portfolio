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
  Tooltip,
  Stack,
  alpha,
  useTheme,
  useMediaQuery
} from "@mui/material";
import {
  FaBriefcase,
  FaCog,
  FaSignOutAlt,
  FaAngleDown,
  FaAngleRight
} from 'react-icons/fa';
import { IconList } from '../../utils/iconList';
import { Outlet, useNavigate } from 'react-router-dom';
import CustomButton from '../../components/ui/CustomButton';

interface NavItem {
  text: string;
  icon: React.ReactNode;
  children?: NavItem[];
  path?: string;
}

const drawerWidth = 240;
const miniDrawerWidth = 70;

const AdminLayout1: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
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

  const handleNavigation = (path?: string) => {
    if (path) {
      navigate(path); // Navigate to the specified route
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
        { text: 'About', icon: <FaBriefcase />, path: '/admin/portfolio/about' },
        { text: 'Experience', icon: <FaBriefcase />, path: '/admin/portfolio/experience' },
        { text: 'Education', icon: <FaBriefcase />, path: '/admin/portfolio/education' },
        { text: 'Skills', icon: <FaBriefcase />, path: '/admin/portfolio/skills' },
        { text: 'Projects', icon: <FaBriefcase />, path: '/admin/portfolio/projects' },
      ]
    },
    { text: 'Settings', icon: <FaCog /> },
    { text: 'Logout', icon: <FaSignOutAlt />, path: '/auth/logout' },
  ];

  const renderNavItems = (items: NavItem[], depth: number = 0) => {
    return items.map((item: NavItem) => (
      <div key={item.text}>
        <ListItemButton
          // onClick={() => item.children && handleSubMenuToggle(item.text)}
          onClick={() => {
            if (item.children) {
              handleSubMenuToggle(item.text);
            } else {
              handleNavigation(item.path);
            }
          }}
          sx={{
            pl: isCollapsed ? 1.5 : depth * 2, // Remove padding when collapsed
            justifyContent: isCollapsed ? 'center' : 'flex-start',
            borderRadius: '25px',
            '&:hover': {
                bgcolor: theme => alpha(theme.palette.primary.main, 0.1)
            }
          }}
        >
          <Tooltip title={isCollapsed ? item.text : ''} placement="right">
            <ListItemIcon  sx={{
              minWidth: isCollapsed ? 0 : '56px',
              justifyContent: 'center', // Always center the icon
              width: isCollapsed ? miniDrawerWidth : 'auto', // Match drawer width when collapsed
              mx: 'auto', // Center horizontally,
              color: 'primary.main'
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
            <IconButton size="small" color='primary'>
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
      flexDirection: 'column',
      // px: 1
    }}>
      {/* <Box sx={{
        p: 1,
        display: 'flex',
        justifyContent: isCollapsed ? 'center' : 'flex-end'
      }}>
        <IconButton onClick={handleCollapseToggle}>
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </IconButton>
      </Box> */}

      <List sx={{ p: 0, mt: 1 }}>
        {renderNavItems(navItems)}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Drawer
        // variant="permanent"
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={() => setMobileOpen(false)}
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
            height: 'calc(100% - 64px)',
            px: isCollapsed ? 0.5 : 1,
          }
        }}
      >
        {drawerContent}
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          borderTop: '1px solid',
          width: '100%',
          py: 1
        }}>
          <CustomButton variant='contained' fullWidth shape='semi-round' sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            fontSize: 13,
            textTransform: 'capitalize',
            fontWeight: 'bold',
            lineHeight: 1
          }}>
            <FaSignOutAlt size={20} />
            {isCollapsed ? '' : 'Logout'}
          </CustomButton>
        </Box>
      </Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1
          }}
        >
          <Toolbar>
            <Stack direction={'row'} alignItems={'center'} gap={1}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleCollapseToggle}
              >
                <IconList.menuLeft />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Admin Pannel</Typography>
            </Stack>

          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: 7,
            minHeight: 'calc(100vh - 64px)'
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout1;