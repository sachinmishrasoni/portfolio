import { Paper, PaperProps, SxProps, Theme } from '@mui/material';
import { useRef, MouseEvent, ReactNode } from 'react';

interface SpotlightPaperProps extends PaperProps {
    children: ReactNode;
    spotlightColor?: string;
    sx?: SxProps<Theme>;
}

const SpotlightPaper = ({
    children,
    spotlightColor = 'rgba(255, 255, 255, 0.25)',
    sx,
    ...props
}: SpotlightPaperProps) => {
    const paperRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (paperRef.current) {
            const rect = paperRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            paperRef.current.style.setProperty('--mouse-x', `${x}px`);
            paperRef.current.style.setProperty('--mouse-y', `${y}px`);
            paperRef.current.style.setProperty('--spotlight-color', spotlightColor);
        }
    };

    return (
        <Paper
            ref={paperRef}
            onMouseMove={handleMouseMove}
            sx={{
                position: 'relative',
                borderRadius: '1.5rem',
                border: '1px solid',
                borderColor: 'divider',
                p: 3,
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: () =>
                        `radial-gradient(circle at var(--mouse-x) var(--mouse-y), 
            ${spotlightColor}, transparent 80%)`,
                    opacity: 0,
                    transition: 'opacity 0.5s ease',
                    pointerEvents: 'none',
                },
                '&:hover::before, &:focus-within::before': {
                    opacity: 0.6,
                },
                ...sx,
            }}
            {...props}
        >
            {children}
        </Paper>
    );
};

export default SpotlightPaper;