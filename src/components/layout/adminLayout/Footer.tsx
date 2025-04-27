import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.9rem 0',
        bgcolor: 'default.paper',
        borderTop: '1px solid',
        borderColor: 'primary.main'
    }}>
        <Typography variant='body2'>Copyright © 2025 All rights reserved.</Typography>
    </Box>
  )
}

export default Footer