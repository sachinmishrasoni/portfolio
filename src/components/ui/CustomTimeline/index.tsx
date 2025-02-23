import React, { useState } from 'react'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, TimelineSeparator } from '@mui/lab'
import { FaCheck } from "react-icons/fa6";
import EduExpCard from '../EduExpCard.tsx'
import { ExpEduCardProps } from '../../../types/index.tsx';
import { Button } from '@mui/material';

interface IProps {
    data: ExpEduCardProps[]
}

const CustomTimeline: React.FC<IProps> = ({ data }) => {
    const [visibleItems, setVisibleItems] = useState(2);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleSeeMore = () => {
        setVisibleItems(data.length); // Show all items
    };
    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
                '& .MuiTimelineDot-root': {
                    width: 15,
                    height: 15,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                '&.MuiTimeline-root': {
                    p: 0,
                    // pl: 2,
                    mt: 0,
                    '& .MuiTimelineContent-root': {
                        pr: 0
                    }
                }
            }}
        >
            {
                data.slice(0, visibleItems).map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator >
                            <TimelineDot
                                sx={{
                                    color: 'black',
                                    backgroundColor: 'primary.main',
                                    //                         boxShadow: `1px 1px 5px ${theme.palette.mypresetcolor.highlightColor},
                                    // -1px -1px 5px ${theme.palette.mypresetcolor.highlightColor}`
                                }} >
                                <FaCheck size={50} />
                            </TimelineDot>
                            {/* {index < data.length - 1 && <TimelineConnector sx={{ bgcolor: 'primary.main' }} />} */}
                            {index < visibleItems - 1 && <TimelineConnector sx={{ bgcolor: 'primary.main' }} />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <EduExpCard
                                data={item}
                                isExpanded={expandedIndex === index}
                                onToggleExpand={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            />
                        </TimelineContent>
                    </TimelineItem>
                ))
            }

            {visibleItems < data.length && (
                <Button
                    variant="outlined"
                    onClick={handleSeeMore}
                    sx={{
                        borderRadius: 25,
                        alignSelf: 'center', // Center the button horizontally
                        mt: 2, // Margin top for spacing
                    }}
                >
                    See more
                </Button>
            )}
        </Timeline>
    )
}

export default CustomTimeline