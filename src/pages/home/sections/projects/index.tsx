import { Chip, Container, Grid2, Stack, Typography } from '@mui/material'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionWrapper from '@/components/common/SectionWrapper'

const ProjectsSection = () => {
    return (
        <SectionWrapper id='projects'>
            <Container sx={{ py: 6 }}>
                <SectionHeader title={'Projects'} subtitle={'My Work'} conunt={'04'} />

                <Typography variant="body1" color="text.secondary" mt={2} sx={{ lineBreak: 'anywhere' }}>
                Here are some of my full-stack projects, showcasing clean design, scalable backend solutions, and responsive interfaces. Take a look and explore the code or try them live!
                </Typography>

                <Stack direction="row" justifyContent={"center"} alignItems={"center"} gap={1}>
                    <Chip label="Professional" color="primary" clickable/>
                    <Chip label="Personal" variant='outlined' clickable color="primary" />
                </Stack>

                <Grid2 container spacing={2} mt={5}>
                    {
                        Array(6).fill('').map((_item, index) => (
                            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
                                <ProjectCard  />
                            </Grid2>
                        ))
                    }

                </Grid2>
            </Container>
        </SectionWrapper>
    )
}

export default ProjectsSection;
