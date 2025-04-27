import { Box, Typography, Button, ButtonProps, alpha } from '@mui/material';
import React, { Component, ReactNode } from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';

// Create a type that combines ButtonProps with Framer Motion props
type MotionButtonProps = ButtonProps & HTMLMotionProps<'button'>;

// Create a motion-wrapped Button with proper typing
const MotionButton = motion<ButtonProps>(Button) as React.ComponentType<MotionButtonProps>;

interface ErrorBoundaryProps {
    children: ReactNode;
    onReset?: () => void;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

const errorVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            staggerChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: { duration: 0.3 }
    }
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
    }
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    handleReset = () => {
        if (this.props.onReset) {
            this.props.onReset();
        }
        this.setState({ hasError: false, error: undefined });
    };

    render() {
        if (this.state.hasError) {
            return (
                <Box
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // bgcolor: 'grey.100',
                        background: theme => `linear-gradient(90deg, 
                        ${alpha(theme.palette.primary.main, 0.1)} 0%, 
                        ${theme.palette.background.default} 50%, 
                        ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
                        p: 3,
                    }}
                >
                    <AnimatePresence>
                        <motion.div
                            variants={errorVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <Box sx={{ textAlign: 'center' }}>
                                <motion.div variants={childVariants}>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontWeight: 700,
                                            color: 'error.main',
                                            mb: 2,
                                            fontSize: { xs: '3rem', md: '4rem' }
                                        }}
                                    >
                                        {/* Oops!  */}
                                        ☠️
                                    </Typography>
                                </motion.div>

                                <motion.div variants={childVariants}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            mb: 2,
                                            color: 'text.primary',
                                            fontWeight: 500
                                        }}
                                    >
                                        Oops! Something went wrong
                                    </Typography>
                                </motion.div>

                                <motion.div variants={childVariants}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 3,
                                            color: 'text.secondary',
                                            maxWidth: '600px',
                                            bgcolor: 'grey.200',
                                            p: 2,
                                            borderRadius: 1,
                                            wordBreak: 'break-word'
                                        }}
                                    >
                                        {this.state.error?.message || 'An unexpected error occurred'}
                                    </Typography>
                                </motion.div>

                                {this.props.onReset && (
                                    <motion.div variants={childVariants}>
                                        <MotionButton
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleReset}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            sx={{ mt: 2 }}
                                        >
                                            Try Again
                                        </MotionButton>
                                    </motion.div>
                                )}
                            </Box>
                        </motion.div>
                    </AnimatePresence>
                </Box>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;

