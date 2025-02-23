import { Fab, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { IconList } from '../../../utils/iconList';

interface ScrollToTopProps {
    bottomXs?: number;
    bottomMd?: number;
    rightXs?: number;
    rightMd?: number;
    showAfterScroll?: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
    bottomXs = 25,
    bottomMd = 50,
    rightXs = 25,
    rightMd = 50,
    showAfterScroll = 300,
}) => {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    const toggleVisibility = useCallback(() => {
        if (window.pageYOffset > showAfterScroll) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [showAfterScroll]);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [toggleVisibility]);

    // Animation variants
    const buttonVariants = {
        hidden: {
            opacity: 0,
            scale: 0.5,
            y: 20,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
                mass: 0.5,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 20,
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <Fab
                    component={motion.div}
                    color="primary"
                    aria-label="scroll to top"
                    onClick={scrollToTop}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    sx={{
                        position: 'fixed',
                        bottom: { xs: bottomXs, md: bottomMd },
                        right: { xs: rightXs, md: rightMd },
                        zIndex: 1000,
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                        transition: theme.transitions.create(['background-color'], {
                            duration: theme.transitions.duration.short,
                        }),
                    }}
                >
                    <IconList.arrowUp className='up-down' fontSize={25} />
                </Fab>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
