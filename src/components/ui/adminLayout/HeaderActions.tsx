import React from 'react';
import { Stack } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconList } from '../../../utils/iconList';
import CustomButton from '../../ui/CustomButton';

// Define animation variants
const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

const HeaderActions: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname.startsWith('/admin/portfolio/projects')) {
        if (location.pathname === '/admin/portfolio/projects') {
            // Show "Add" button on Projects page
            return (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={buttonVariants}
                >
                    <CustomButton
                        shape='round'
                        variant='contained'
                        startIcon={<IconList.plus />}
                        onClick={() => navigate('/admin/portfolio/projects/add')}
                    >
                        Add
                    </CustomButton>
                </motion.div>
            );
        } else if (location.pathname === '/admin/portfolio/projects/add' || location.pathname.includes('/edit')) {
            // Show "Save & Close" buttons on Add/Edit pages
            return (
                <Stack direction="row" spacing={1} component={motion.div} initial="hidden" animate="visible" exit="hidden" variants={buttonVariants}>
                    <CustomButton
                        shape='round'
                        variant='contained'
                        color="primary"
                        startIcon={<IconList.angular />}
                        onClick={() => console.log('Save Project')}
                    >
                        Save
                    </CustomButton>
                    {/* <CustomButton
                        variant='outlined'
                        color="error"
                        onClick={() => navigate('/admin/portfolio/projects')}
                        shape='round'
                        sx={{ minWidth: 'auto' }}
                    >
                        <IconList.close fontSize={20} />
                    </CustomButton> */}
                </Stack>
            );
        }
    }

    return null;
};

export default HeaderActions;
