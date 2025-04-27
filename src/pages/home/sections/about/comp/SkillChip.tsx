import React from 'react';
import { Chip } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

interface SkillChipProps {
    label: React.ReactNode;
    icon: React.ComponentType<any>;
}

const SkillChip: React.FC<SkillChipProps> = ({ label, icon: IconComponent }) => {
    const theme = useTheme();

    return (
        <motion.div
            whileHover={{ scale: 1.1 }} // Scale effect on hover
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            style={{ display: 'inline-block' }} // Prevent layout shift
        >
            <Chip
                icon={
                    <motion.div
                        whileHover={{ rotate: 15, scale: 1.3, color: '#fff' }} // Rotate & scale effect
                        transition={{ type: 'spring', stiffness: 300 }}
                        style={{ lineHeight: 0 }}
                    >
                        <IconComponent className="icon" fontSize={'20px'} color={theme.palette.primary.main} />
                    </motion.div>
                }
                label={label}
                sx={{
                    px: 0.5,
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: theme => alpha(theme.palette.primary.main, 0.5),
                    backgroundColor: theme => alpha(theme.palette.background.paper, 1),
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                    transition: '0.3s all ease-in',
                    '& span': { zIndex: 5, fontWeight: '500' },
                    '& svg': { zIndex: 5 },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        width: '0%',
                        height: '100%',
                        backgroundColor: theme.palette.primary.main,
                        zIndex: 0,
                        transition: '0.2s all ease-in',
                    },
                    '&:hover::before': {
                        width: '100%',
                    },
                    '&:hover .icon': {
                        color: 'white !important',
                        transform: 'scale(1.2) rotate(20deg)',
                        transition: '0.3s all ease-in',
                    },
                }}
            />
        </motion.div>
    );
};

export default SkillChip;
