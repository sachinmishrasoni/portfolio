import { Box, Breadcrumbs, Chip, Grid2, Stack, Typography } from "@mui/material"
import ProjectCard from "@/components/ui/ProjectCard"
import CustomButton from "@/components/ui/CustomButton"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/store"
import { useEffect } from "react"
import { fetchProjects } from "@/store/features/projects/projectThunks"

const PortfolioProjects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { projects, loading, error } = useSelector((state: RootState) => state.projects);

  console.log(projects, 'projects');

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Box>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography>Portfolio</Typography>
          <Typography>Projects</Typography>
        </Breadcrumbs>
        <CustomButton variant="outlined" shape={'round'} size="small"
          onClick={() => navigate('/admin/portfolio/projects/add')}
        >Add Project</CustomButton>
      </Stack>

      <Stack direction={'row'} flexWrap={'wrap'} gap={1} mt={1}>
        {
          ['All', 'Latest', 'Oldest'].map((item, index) => (
            <Chip key={index} label={item}
              sx={{
                py: 0.6,
                px: 1.5,
                height: 'auto'
              }}
              clickable
            />
          ))
        }
      </Stack>

      <Grid2 container spacing={2} mt={2}>
        {
          projects.map((item, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ display: 'flex', justifyContent: 'center' }} >
              <ProjectCard data={item} />
            </Grid2>
          ))
        }
      </Grid2>


    </Box>
  )
}

export default PortfolioProjects