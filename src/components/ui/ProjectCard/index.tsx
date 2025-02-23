import { alpha, Box, Button, Chip, Paper, Stack, Typography, useTheme } from '@mui/material'
import { FaReact } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'
import CardSwiper from './CardSwiper'
import { useEffect, useRef, useState } from 'react';
import SpotlightPaper from '../SpotlightPaper';

const techs = ['React', 'Nodejs', 'Material UI', 'TypeScript', 'Express', 'MongoDB'];

const ProjectCard = () => {
  const theme = useTheme();
  const [visibleTechs, setVisibleTechs] = useState<string[]>([]);
  const [hiddenCount, setHiddenCount] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const moreChipWidth = 60; // Approximate width of "+X More" chip

  useEffect(() => {
    const calculateVisibleTechs = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      const techElements = Array.from(container.children).filter(
        (child) => child.getAttribute('role') === 'tech-chip'
      );

      let totalWidth = 0;
      let visibleCount = 0;

      for (const element of techElements) {
        const elementWidth = element.getBoundingClientRect().width + 8; // +8 for gap
        if (totalWidth + elementWidth <= containerWidth - moreChipWidth) {
          totalWidth += elementWidth;
          visibleCount++;
        } else {
          break;
        }
      }

      setVisibleTechs(techs.slice(0, visibleCount));
      setHiddenCount(techs.length - visibleCount);
    };

    calculateVisibleTechs();
    const observer = new ResizeObserver(calculateVisibleTechs);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [techs]);

  return (
    <>
      <SpotlightPaper
        spotlightColor={alpha(theme.palette.primary.main, 0.25)}
        sx={{
          p: 2,
          borderRadius: 3,
          backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.5),
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(5px)',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
        }}
      >
        <Box sx={{
          height: 100,
          width: 100,
          backgroundColor: theme => alpha(theme.palette.primary.main, 0.5),
          borderRadius: '50%',
          position: 'absolute',
          left: -15,
          top: -15,
          zIndex: -1,
          filter: 'blur(50px)'
        }} />

        {
          false ? (<CardSwiper />) : (
            <Paper sx={{
              height: 150,
              boxShadow: 'none',
              color: 'text.primary',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: '12 !important'
            }} >
              <Typography variant='h4'>Image</Typography>
            </Paper>
          )
        }
        <Box mt={1}>
          <Typography variant='h5' fontWeight={'bold'}>Project Title</Typography>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography component={'p'} variant='caption' fontWeight={'bold'} color={'gray'}>3 year ago</Typography>
            <Stack direction={'row'} gap={0.5} alignItems={'center'}>
              <GoDotFill color='lightgreen' />
              <Typography variant='caption' color={'gray'}>Completed</Typography>
            </Stack>
          </Stack>
          <Typography variant='body1' color={'text.secondary'}
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minHeight: '3em', // 2 lines * 1.5em line-height
              lineBreak: 'anywhere'
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sequi fugiat, provident voluptates ipsa excepturi sit id molestias dolorem eaque modi a quae in neque cum quaerat dicta placeat aliquid.
          </Typography>

          {/* <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'} gap={1} mt={1}>
            <Typography variant='body2' fontWeight={'bold'}>Tech : </Typography>
            <Chip
              size='small'
              label='React'
              icon={<FaReact size={15} />}
              sx={{
                fontSize: '0.65rem'
              }}

            />
            <Chip
              size='small'
              label='React'
              icon={<FaReact size={15} />}
              sx={{
                fontSize: '0.65rem'
              }}

            />
            <Chip
              size='small'
              label='Nodejs'
              icon={<FaReact size={15} />}
              sx={{
                fontSize: '0.65rem'
              }}

            />
            <Chip
              size='small'
              label='Material UI'
              icon={<FaReact size={15} />}
              sx={{
                fontSize: '0.65rem'
              }}

            />
            <Chip
              size='small'
              label='3+ More'
              // icon={<FaReact size={15} />}
              sx={{
                fontSize: '0.65rem'
              }}

            />
          </Stack> */}

          {/* Tech chips with dynamic overflow */}
          <Stack
            ref={containerRef}
            direction='row'
            alignItems='center'
            flexWrap='nowrap'
            gap={1}
            mt={1}
            sx={{
              overflow: 'hidden',
              position: 'relative',
              pr: hiddenCount > 0 ? 6 : 0
            }}
          >
            {/* <Typography variant='body2' fontWeight={'bold'}>
          Tech :
        </Typography> */}

            {visibleTechs.map((tech, index) => (
              <Chip
                key={index}
                role='tech-chip'
                size='small'
                label={tech}
                icon={<FaReact size={15} />}
                sx={{ fontSize: '0.65rem', flexShrink: 0 }}
              />
            ))}

            {hiddenCount > 0 && (
              <Chip
                size='small'
                label={`+${hiddenCount} More`}
                sx={{
                  fontSize: '0.65rem',
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  flexShrink: 0
                }}
              />
            )}
          </Stack>

          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            mt={1}
            sx={{
              '& button': {
                fontSize: '0.65rem',
                fontWeight: 'bold',
                borderRadius: 5,
                letterSpacing: 1.5,
                textTransform: 'none'
              }
            }}
          >
            <Stack direction={'row'} alignItems={'center'} gap={1}>
              <Button className='live-btn' variant='contained'>Live</Button>
              <Button className='github-btn' variant='outlined'>GitHUB</Button>
            </Stack>
            <Button sx={{ overflow: 'hidden' }}>
              Details
            </Button>
          </Stack>
        </Box>
      </SpotlightPaper>
    </>
  )
}

export default ProjectCard