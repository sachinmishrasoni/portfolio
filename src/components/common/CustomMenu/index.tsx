import React from 'react';
import { Menu, MenuItem, ListItemIcon, Typography, MenuProps, Grow } from '@mui/material';

interface IMenuItem {
    text: string;
    path: string;
    icon?: React.ReactNode;
}

// Fix: Omit `onSelect` from `MenuProps` to prevent type conflict
interface CustomMenuProps extends Omit<MenuProps, 'open' | 'onSelect'> {
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
    menuList: IMenuItem[];
    onSelect: (path: string) => void;
    customSx?: MenuProps['sx']; // Allow custom styling
    anchorOrigin?: MenuProps['anchorOrigin']; // Allow customization
    transformOrigin?: MenuProps['transformOrigin']; // Allow customization
}

const CustomMenu: React.FC<CustomMenuProps> = ({
    anchorEl,
    open,
    onClose,
    menuList,
    onSelect,
    customSx,
    anchorOrigin = { vertical: 'top', horizontal: 'right' },
    transformOrigin = { vertical: 'top', horizontal: 'left' },
    ...props // Allow additional props
}) => {
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
            TransitionComponent={Grow}
            sx={{
                '& .MuiMenu-paper': {
                    minWidth: 175,
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
                },
                ...customSx, // Merge custom styles
            }}
            {...props} // Pass additional props
        >
            {menuList.map((item) => (
                <MenuItem
                    key={item.text}
                    onClick={() => onSelect(item.path)} // No type conflict now
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                    {item.icon && <ListItemIcon sx={{ color: 'primary.main' }}>{item.icon}</ListItemIcon>}
                    <Typography variant='body2'>{item.text}</Typography>
                </MenuItem>
            ))}
        </Menu>
    );
};

export default CustomMenu;
