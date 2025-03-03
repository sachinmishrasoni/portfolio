import { alpha, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import split from '../../../utils/splitStringUsingRegex';
import './index.css';

const Loader = () => {
    const textChar = split('Portfolio  Loading...');

    const charVariants = {
        hidden: { opacity: 0, y: '0.25em', scale: 0.8 },
        reveal: { opacity: 1, y: '0em', scale: 1.2 },
    };

    return (
        <Box
            id="pagenotfound" minHeight={'100vh'} position={'relative'} overflow={'hidden'}
            sx={{
                background: theme => `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${theme.palette.background.default} 50%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box>
                <main>
                    <svg className="sp" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#000" />
                                <stop offset="40%" stopColor="#fff" />
                                <stop offset="100%" stopColor="#fff" />
                            </linearGradient>
                            <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#000" />
                                <stop offset="60%" stopColor="#000" />
                                <stop offset="100%" stopColor="#fff" />
                            </linearGradient>
                            <mask id="mask1">
                                <rect x="0" y="0" width="128" height="128" fill="url(#grad1)" />
                            </mask>
                            <mask id="mask2">
                                <rect x="0" y="0" width="128" height="128" fill="url(#grad2)" />
                            </mask>
                        </defs>
                        <g fill="none" strokeLinecap="round" strokeWidth="16">
                            <circle className="sp__ring" r="56" cx="64" cy="64" stroke="#ddd" />
                            <g stroke="hsl(223,90%,50%)">
                                <path className="sp__worm1" d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64" stroke="hsl(343,90%,50%)" strokeDasharray="43.98 307.87" />
                                <g transform="translate(42,42)">
                                    <g className="sp__worm2" transform="translate(-42,0)">
                                        <path className="sp__worm2-1" d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14" strokeDasharray="43.98 175.92" />
                                    </g>
                                </g>
                            </g>
                            <g stroke="hsl(283,90%,50%)" mask="url(#mask1)">
                                <path className="sp__worm1" d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64" strokeDasharray="43.98 307.87" />
                                <g transform="translate(42,42)">
                                    <g className="sp__worm2" transform="translate(-42,0)">
                                        <path className="sp__worm2-1" d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14" strokeDasharray="43.98 175.92" />
                                    </g>
                                </g>
                            </g>
                            <g stroke="hsl(343,90%,50%)" mask="url(#mask2)">
                                <path className="sp__worm1" d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64" strokeDasharray="43.98 307.87" />
                                <g transform="translate(42,42)">
                                    <g className="sp__worm2" transform="translate(-42,0)">
                                        <path className="sp__worm2-1" d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14" strokeDasharray="43.98 175.92" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </main>
            </Box>
            <Typography
                variant="h4"
                fontWeight="bold"
                textAlign={'center'}
                component={motion.div}
                initial="hidden"
                animate="reveal"
                transition={{ staggerChildren: 0.02 }}
            >
                {textChar.map((char, index) => (
                    <motion.span
                        key={`${char}-${index}`}
                        variants={charVariants}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                            repeatDelay: 3,
                            ease: 'easeInOut',
                            delay: index * 0.1,
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </Typography>

            <Typography
                variant="caption"
                textAlign={'center'}
                color="text.secondary"
                component={'p'}
                mt={3}
            // initial={{ scale: 0, opacity: 0 }}
            // animate={{ scale: 1, opacity: 1 }}
            // transition={{
            //     duration: 1,
            //     ease: 'easeInOut',
            // }}
            >
                Designed with
                <motion.span
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.4 }} // Two keyframes
                    transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 10,
                        repeat: Infinity,
                        repeatType: 'reverse', // Beats back and forth
                        repeatDelay: 0.8,
                    }}
                    style={{ display: 'inline-block', marginLeft: '5px', marginRight: '5px' }}
                >
                    ❤️
                </motion.span>
                By SAM
            </Typography>
        </Box>
    );
};

export default Loader;