import { alpha, Box, Stack, Typography } from '@mui/material'
import Marquee from '../../animated/Marquee'
import { IconList } from '../../../utils/iconList'

const strArr = [
    'Fullstack', 'Frontend', 'Animations', 'Backend', 'Website', 'Development', 'Community', 'Design', 'UI/UX', 'Graphics',
]
const HeroSectionMarquee = () => {
    return (
        <Box py={3} sx={{
            position: 'relative',
            background: theme => `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${theme.palette.background.default} 50%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
            userSelect: 'none',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: theme => alpha(theme.palette.primary.main, 0.1),
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

            <Marquee direction='left' baseVelocity={30}>
                {
                    strArr.map((item, index) => (
                        <Stack key={index} direction={'row'} alignItems={'center'} gap={2.5} sx={{ px: 1, color: 'text.secondary', opacity: 0.4 }}>
                            <IconList.star fontSize={35} />
                            <Typography variant='h2'>{item}</Typography>
                        </Stack>
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

export default HeroSectionMarquee