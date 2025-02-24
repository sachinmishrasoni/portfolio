import { IconButton, Paper } from '@mui/material'
import { IconList } from '../../../utils/iconList'
import { useAppTheme } from '../../../context/theme/themeProvider';

const SettingBtn = () => {
  const { dispatch } = useAppTheme();
  return (
    <Paper sx={{
        width: 75,
        p: 0.5,
        backgroundColor: 'background.paper',
        position: 'fixed',
        right: -25,
        top: 75,
        borderRadius: '25px',
        zIndex: 50
    }}>
        <IconButton color='primary' onClick={() => dispatch({ type: 'TOGGLE_MODE' })}>
            <IconList.settings className='spin' fontSize={25} />
        </IconButton>
    </Paper>
  )
}

export default SettingBtn