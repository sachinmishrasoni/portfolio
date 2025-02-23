import { Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';

interface EducationData {
  title: string;
  year: string;
  course: string;
  address: string;
  description: string;
}

interface EducationCardProps {
  data: EducationData;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const EducationCard: React.FC<EducationCardProps> = ({ 
  data, 
  isExpanded, 
  onToggleExpand 
}) => {
  const paperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (paperRef.current && !paperRef.current.contains(event.target as Node)) {
      // Implement close logic if needed
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
      // backgroundColor: 'background.paper',
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
            position: 'absolute',
            right: 0,
            backgroundColor: 'primary.dark',
            boxShadow: 'none'
          }}>
          <Typography fontWeight={'bold'} variant='caption' lineHeight={0} color={'white'}>
            {data.year}
          </Typography>
        </Paper>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Typography variant='body2' color={'primary.light'}>
          {data.course}
        </Typography>
        <Typography variant='caption' textAlign={'right'}>
          {data.address}
        </Typography>
      </Stack>

      <Typography variant='body2' mt={0.5} color={'text.secondary'}
        sx={{
          overflow: isExpanded ? 'visible' : 'hidden',
          textOverflow: isExpanded ? 'unset' : 'ellipsis',
          display: isExpanded ? 'block' : '-webkit-box',
          WebkitLineClamp: isExpanded ? 'unset' : 2,
          WebkitBoxOrient: 'vertical',
          wordBreak: 'break-word'
        }}
      >
        {data.description}
      </Typography>
      <Typography 
        component={'h5'} 
        variant='caption' 
        fontWeight={'bold'} 
        color={'primary'}
        sx={{ cursor: 'pointer' }}
        onClick={onToggleExpand}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </Typography>
    </Paper>
  );
};

export default EducationCard;