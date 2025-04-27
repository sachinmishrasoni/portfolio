import CustomButton from '@/components/ui/CustomButton';
import { IconList } from '@/utils/iconList';
import { alpha, Box, Chip, Container, Divider, IconButton, Paper, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectDetail = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const overlayOpacity: number = Math.min(scrollY / 175, 1);
  const blurAmount: number = Math.min(scrollY / 100, 5);

  return (
    <Box className='project-detail'>
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1,
      }}>
        <Container disableGutters maxWidth='md'>
          <Box sx={{
            width: '100%',
            height: { xs: 195, sm: 210, md: 250 },
            position: 'relative',
            backgroundImage: "url('/images/project01.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            backgroundPosition: "center",
            // backgroundAttachment: 'fixed',
            backgroundColor: alpha('#000', 0.1),
            borderRadius: '0px 0px 15px 15px',
          }}>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: theme => alpha(theme.palette.background.default, overlayOpacity),
                backdropFilter: `blur(${blurAmount}px)`,
                transition: 'background-color 0.3s ease',
                borderRadius: '0px 0px 15px 15px',
              }}
            />
            <Stack direction={'row'} alignItems={'center'} 
            sx={{ position: 'relative', zIndex: 10, px: 1 }}
            >
              <IconButton onClick={() => navigate(-1)} sx={{ backdropFilter: 'blur(50px)' }}>
                <IconList.back />
              </IconButton>
            </Stack>
          </Box>
        </Container>
      </Box>
      {/* Banner height */}
      <Box
        className='banner-height'
        sx={{ height: { xs: 195 + 2, sm: 210 + 2, md: 250 + 2 }, zIndex: -2 }}
      />

      <Box sx={{
        width: '100%',
        minHeight: {
          xs: 'calc(100vh - 195px)',
          sm: 'calc(100vh - 210px)',
          md: 'calc(100vh - 250px)'
        },
        // mt: 30,
        backgroundColor: 'background.default',
        borderRadius: '15px 15px 0 0',
        position: 'relative',
        zIndex: 5
      }}>
        <Container maxWidth='md' sx={{ pb: 3, }}>
          <Box sx={{
            py: 2,
            backgroundColor: 'background.paper',
            position: 'sticky',
            top: 0,
          }}>

            <Stack>
              <Typography variant='h4' fontWeight={'bold'}>Project Name</Typography>

              <Stack direction={'row'} gap={1}
                divider={<Divider orientation="vertical" flexItem />} mt={0.5}
              >
                <Typography variant='caption' color='text.secondary'>02 Feb 2023</Typography>
                <Typography variant='caption' color='text.secondary'>On-Going</Typography>
              </Stack>
            </Stack>

            <Stack direction={'row'} gap={1} mt={1.5}>
              <CustomButton fullWidth variant='contained' shape='round' size='small' startIcon={<IconList.github />}>GitHub</CustomButton>
              <CustomButton fullWidth variant='contained' shape='round' size='small' startIcon={<IconList.eye />}>Live View</CustomButton>
            </Stack>

          </Box>


          <Stack direction={'row'} gap={1.5} sx={{
            overflowX: 'auto',
            scrollbarWidth: 'none',
            pb: 2
          }}>
            {
              Array(10).fill(0).map((_, index) => (
                <Paper key={index} sx={{ width: 200, minWidth: 200, height: 125, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', border: '1px solid lightgray' }} />
              ))
            }
          </Stack>

          <Stack mb={2}>
            <Typography variant='caption' color='text.secondary'>Technologies :</Typography>
            <Stack direction={'row'} flexWrap={'wrap'} gap={1} mt={1}>
              {
                Array(10).fill(0).map((_, index) => (
                  <Chip key={index} label='React' size='small' />
                ))
              }
            </Stack>
          </Stack>
          <Stack gap={0.5}>
            <Typography variant='caption' color='text.secondary'>Descriptions :</Typography>
            <Typography variant='body1' color='text.secondary'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam magnam eaque corporis nam nobis minima omnis! Impedit tempora deserunt nesciunt ipsa magni voluptates, eos ut esse molestiae aut sint repudiandae! Provident quasi deleniti exercitationem cupiditate dolore doloremque, qui repellendus doloribus quisquam magnam esse excepturi? Nulla deserunt porro quisquam obcaecati eum ratione quas fugit, aliquid labore, animi aut odit dolores laboriosam inventore consequatur perferendis voluptates consequuntur veritatis dolorum repellendus! Placeat recusandae quas rerum labore suscipit, deserunt nobis esse quod. Dolor pariatur ipsam, quis incidunt dolore, reiciendis, nesciunt dolorem aut doloremque ducimus officia veritatis accusantium? Velit, maiores delectus dignissimos iure in odit? lorem1000
            </Typography>
          </Stack>
        </Container>
      </Box>

    </Box>
  )
}

export default ProjectDetail;
