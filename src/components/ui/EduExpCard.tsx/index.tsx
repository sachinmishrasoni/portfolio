import SpotlightPaper from '../SpotlightPaper'
import { alpha, Paper, Stack, Typography, useTheme } from '@mui/material'
import { ExpEduCardProps } from '../../../types';

interface EduExpCardProps {
    data: ExpEduCardProps;
    isExpanded: boolean; // Whether this card is currently expanded
    onToggleExpand: () => void; // Function to toggle expand/collapse
}

const EduExpCard = ({ data, isExpanded, onToggleExpand }: EduExpCardProps) => {
    const theme = useTheme();
    return (
        <Stack alignItems={'flex-start'} gap={1}>
            <Paper sx={{
                px: 2,
                display: 'inline-block',
                borderRadius: 5,
                backgroundColor: 'primary.dark',
                color: 'primary.contrastText',
                transform: 'translateX(-50px)',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            }}>
                <Typography variant='caption' fontWeight={'bold'}>{data.startDate + ' - ' + data.endDate}</Typography>
            </Paper>
            <SpotlightPaper
                spotlightColor={alpha(theme.palette.primary.main, 0.2)}
                sx={{
                    p: 2,
                    borderRadius: 3,
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                    cursor: 'default',
                    transition: '0.3s all ease-in-out',
                    '&:hover': {
                        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
                    }
                }}
            >
                <Typography variant='h6' fontWeight={'bold'}>{data.title}</Typography>
                <Stack direction={'row'} flexWrap={'wrap'} gap={1} divider={<Typography variant='caption'>|</Typography>}>
                    <Typography variant='caption'>{data.location}</Typography>
                    <Typography variant='caption'>1 Year</Typography>
                    <Typography variant='caption'>{data.jobType}</Typography>
                </Stack>
                <Typography
                    className={`${!isExpanded ? 'two-line-ellipsis' : ''}`}
                    variant='body1'
                    color='text.secondary'
                >{data.description}</Typography>

                <Typography variant='caption' onClick={onToggleExpand} color='primary' sx={{
                    pt: 1,
                    pr: 1,
                    cursor: 'pointer',
                }}>{isExpanded ? 'Show Less' : 'Show More'}</Typography>
            </SpotlightPaper>
        </Stack>
    )
}

export default EduExpCard