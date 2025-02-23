import { Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

interface ExperienceData {
    title: string;
    timePeriod: string;
    company: string;
    jobType: string;
    description: string;
}

interface ExperienceCardProps {
    data: ExperienceData;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const paperRef = useRef<HTMLDivElement>(null);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (paperRef.current && !paperRef.current.contains(event.target as Node)) {
            setIsExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Paper ref={paperRef} sx={{
            p: 2,
            borderRadius: 2,
            position: 'relative',
            // backgroundColor: '#F7F7F7',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
        }}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Typography variant='h6' fontWeight={'bold'}>{data.title}</Typography>
                <Paper
                    sx={{
                        px: 1.5,
                        pr: 2,
                        pb: 0.2,
                        borderRadius: '15px 0 0 15px',
                        // position: 'absolute',
                        // right: 0,
                        transform: 'translateX(15px)',
                        backgroundColor: 'primary.dark',
                        boxShadow: 'none'
                    }}>
                    <Typography fontWeight={'bold'} variant='caption' lineHeight={0} >{data.timePeriod}</Typography>
                </Paper>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Typography variant='body2' color={'primary.light'}>{data.company}</Typography>
                <Typography variant='caption' textAlign={'right'}>{data.jobType}</Typography>
            </Stack>

            <Typography variant='body2' mt={0.5} color={'text.secondary'}
                sx={{
                    overflow: isExpanded ? 'visible' : 'hidden',
                    textOverflow: isExpanded ? 'unset' : 'ellipsis',
                    display: isExpanded ? 'block' : '-webkit-box',
                    WebkitLineClamp: isExpanded ? 'unset' : 3,
                    WebkitBoxOrient: 'vertical',
                }}
            >
                {data.description}
            </Typography>
            <Typography component={'h5'} variant='caption' fontWeight={'bold'} color={'primary'}
                sx={{ cursor: 'pointer' }}
                onClick={handleToggleExpand}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </Typography>
        </Paper>
    );
};

export default ExperienceCard;
