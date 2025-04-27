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
        zIndex: 50,
        // boxShadow: 'none'
        // boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
    }}>
        <IconButton color='primary' onClick={() => dispatch({ type: 'TOGGLE_MODE' })}>
            <IconList.settings className='spin' fontSize={25} />
        </IconButton>
    </Paper>
  )
}

export default SettingBtn