import { alpha, Box, Chip } from '@mui/material'
import Marquee from '../../animated/Marquee'

const skills = [
    'MongoDB', 'GitHub', 'Bootstrap', 'TypeScript', 'Postman', 
    'React', 'C++', 'Tailwind', 'Figma', 'C', 'Jira', 
    'JavaScript', 'NodeJs', 'Photoshop', 'Express', 'Python', 
    'Html', 'MaterialUI', 'Git', 'Css', 'Mysql', 'Angular', 
    'Redux', 'NextJs', 'AntDesign', 'NestJs',
];

const SkillsMarquee = () => {
    return (
        <Box sx={{
            py: 3,
            position: 'relative',
            background: theme => `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${theme.palette.background.default} 50%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
            userSelect: 'none',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: theme => alpha(theme.palette.primary.main, 0.3),
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: { xs: '50px', sm: '150px' },
                height: '100%',
                background: theme => `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.1)} 50%, transparent 100%)`,
                zIndex: 2
            }} />

            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: { xs: '50px', sm: '150px' },
                height: '100%',
                background: theme => `linear-gradient(90deg, ${alpha(theme.palette.background.default, 1)} 50%, transparent 100%)`,
                zIndex: 1
            }} />

            <Marquee baseVelocity={50}>
                {
                    skills.map((item, index) => (
                        <Chip
                            key={index}
                            label={item}
                            icon={<img width={item === 'MongoDB' ? 12 : 22} src={`/skill-svg/${item.toLowerCase()}.svg`} />}
                            sx={{ px: 1.3, py: 2.5, borderRadius: 50, }}
                        />
                    ))
                }
            </Marquee>

            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: { xs: '50px', sm: '150px' },
                height: '100%',
                background: theme => `linear-gradient(-90deg, ${alpha(theme.palette.background.default, 1)} 50%, transparent 100%)`,
                zIndex: 1
            }} />
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: { xs: '50px', sm: '150px' },
                height: '100%',
                background: theme => `linear-gradient(-90deg, ${alpha(theme.palette.primary.main, 0.05)} 50%, transparent 100%)`,
                zIndex: 1
            }} />
        </Box>
    )
}

export default SkillsMarquee