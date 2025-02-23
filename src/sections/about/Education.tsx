import { Box, Grid2 } from '@mui/material'
import SubHeader from '../../components/ui/SubHeader'
import educationData from '../../data/education';
import CustomTimeline from '../../components/ui/CustomTimeline/index.tsx';

const Education = () => {
    return (
        <Box id='education'>
            <SubHeader direction='left' label='Education' subLabel='My Educational Background' />
            <Grid2 container spacing={2} mt={2}>
                <Grid2 size={{ xs: 12, sm: 4 }} display="flex" justifyContent="center" alignItems="center">
                    <Box component={'img'} src='/images/educationChar.png' sx={{ width: { xs: '300px', sm: '100%' } }} />
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 8 }} >
                    <Box>
                        <CustomTimeline data={educationData} />
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default Education