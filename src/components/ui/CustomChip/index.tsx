import React from 'react';
import { Chip } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface CustomChipProps {
    label: any;
    icon: React.ComponentType<any>;
}

const CustomChip: React.FC<CustomChipProps> = ({ label, icon: IconComponent }) => {
    const theme = useTheme();
    
    return (
        <Chip
            icon={<IconComponent className='icon' fontSize={'20px'} color={theme.palette.primary.main} />}
            label={label}
            sx={{
                px: 0.5,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'primary.light',
                // backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                transition: '0.3s all ease-in',
                '& span': { zIndex: 5, fontWeight: '500' },
                '& svg': { zIndex: 5 },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    width: '0%',
                    height: '100%',
                    backgroundColor: theme.palette.primary.dark,
                    zIndex: 0,
                    transition: '0.5s all ease-in',
                },
                '&:hover::before': {
                    width: '100%'
                },
                '&:hover .icon': {
                    color: 'white !important',
                    transform: 'scale(1.2) rotate(20deg)',
                    transition: '0.3s all ease-in'
                }
            }}
        />
    );
};

export default CustomChip;
