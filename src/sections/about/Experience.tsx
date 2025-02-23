import { Box, Grid2 } from '@mui/material'
import SubHeader from '../../components/ui/SubHeader'
import experienceData from '../../data/experience';
import CustomTimeline from '../../components/ui/CustomTimeline';

const Experience = () => {
    return (
        <Box id='experience'>
            <SubHeader direction='right' label='Experience' subLabel='Work Experience' />

            <Grid2 container spacing={2} mt={2}>
                <Grid2 size={{ xs: 12, sm: 8 }} order={{ xs: 2, sm: 1 }}>
                    <Box >
                        <CustomTimeline data={experienceData} />
                    </Box>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 4 }} order={{ xs: 1, sm: 2 }} display="flex" justifyContent="center" alignItems="center">
                    <Box component={'img'} src='/images/workingChar.png' sx={{ width: { xs: '300px', sm: '100%' } }} />
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default Experience