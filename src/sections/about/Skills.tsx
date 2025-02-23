import { Box, Grid2, Stack, Typography } from '@mui/material'
import SubHeader from '../../components/ui/SubHeader';
import skills from '../../data/skills';
import CustomChip from '../../components/ui/CustomChip';
import { IconList } from '../../utils/iconList';

const SkillBox = ({ label, skillsData }: { label: string, skillsData: { label: string, icon: React.ComponentType<any> }[] }) => {
  return (
    <Box px={1.5}>
      <Stack direction={'row'} alignItems={'center'} gap={0.5} color='text.secondary' mb={0.5}>
        <IconList.circleDot fontSize={15} />
        <Typography variant='caption' >{label}</Typography>
      </Stack>

      <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
        {
          skillsData.map((item, index) => (
            <CustomChip key={index} label={item.label} icon={item.icon} />
          ))
        }
      </Stack>
    </Box>
  )
}

const Skills = () => {
  return (
    <Box id='skills'>
      <SubHeader direction='right' label='Skills' subLabel='My Technical Skills' />
      <Grid2 container spacing={2} mt={2}>
        <Grid2 size={{ xs: 12, sm: 8 }} order={{ xs: 2, sm: 1 }}>

          <Box>
            <Typography variant='h6' fontWeight={'bold'} mb={1}>Professional:</Typography>
            <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
              {
                skills.professional.map((item, index) => (
                  <CustomChip key={index} label={item.label} icon={item.icon} />
                ))
              }
            </Stack>
          </Box>

          <Box mt={1.5}>
            <Typography variant='h6' fontWeight={'bold'} mb={1}>Technical</Typography>

            <Stack direction={'column'} gap={1.5}>
              <SkillBox label='Language' skillsData={skills.language} />
              <SkillBox label='Frontend' skillsData={skills.frontend} />
              <SkillBox label='Backend' skillsData={skills.backend} />
              <SkillBox label='Database' skillsData={skills.database} />
              <SkillBox label='Version Control & Tools' skillsData={skills.other} />
            </Stack>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 4 }} order={{ xs: 1, sm: 2 }} display="flex" justifyContent="center" alignItems="center">
          <Box component={'img'} src='/images/cartoonChar.png' sx={{ width: { xs: '300px', sm: '100%' } }} />
        </Grid2>

      </Grid2>
    </Box>
  )
}

export default Skills