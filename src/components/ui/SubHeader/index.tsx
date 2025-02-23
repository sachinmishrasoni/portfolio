import { alpha, Box, Stack, Typography } from '@mui/material'
import { MdOutlineComputer } from "react-icons/md";

interface SubHeaderProps {
  direction?: 'left' | 'right'
  label: string;
  subLabel: string;
}
const SubHeader: React.FC<SubHeaderProps> = ({ direction = 'left', label = 'Label', subLabel = 'Sub Label' }) => {

  const flexDirection = direction === 'left' ? 'row' : 'row-reverse';
  return (
    <Stack direction={flexDirection} justifyContent={'space-between'} alignItems={'center'} gap={0}>
      <Stack alignItems={'center'} sx={{
        minWidth: '200px',
        px: 2,
        py: 1,
        border: '3px solid',
        borderColor: 'primary.main',
        borderRadius: '50px',
      }}>
        <Typography variant='h5' lineHeight={1} fontWeight={'bold'}>{label}</Typography>
        <Typography variant='caption' color='text.secondary' lineHeight={1} mt={0.3}>{subLabel}</Typography>
      </Stack>

      <Box sx={{
        height: '3px',
        width: '100%',
        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.2),
        borderRadius: '15px'
      }} />

      <Box sx={{
        p: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        border: '3px solid',
        borderColor: 'primary.main',
        color: 'primary.main'
      }}>
        <MdOutlineComputer size={30} />
      </Box>
    </Stack>
  )
}

export default SubHeader