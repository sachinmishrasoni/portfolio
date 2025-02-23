import { Box, Button, IconButton } from '@mui/material'
import React from 'react'
import { IconList } from '../../../utils/iconList'

const ViewDownloadBtn = () => {
    const handleView = (e: React.MouseEvent) => {
        e.stopPropagation() // Prevent event bubbling
        console.log('View action triggered')
        // Add your view logic here
    }

    const handleDownload = () => {
        console.log('Download action triggered')
        // Add your download logic here
    }
    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '0.5px solid',
            borderColor: 'primary.main',
            borderRadius: '50px',
            overflow: 'hidden'
        }}>
            <Button aria-label='view' variant='contained' onClick={handleView} sx={{
                p: 0.8,
                minWidth: 'auto',
                borderRadius: '50%',
                position: 'absolute',
                left: 0,
                zIndex: 1
            }}>
                <IconList.eye fontSize={23.7} />
            </Button>
            <Button aria-label='download' onClick={handleDownload} sx={{
                pl: 5.5,
                pr: 2,
                zIndex: 0
            }}>
                CV Download
            </Button>
        </Box>
    )
}

export default ViewDownloadBtn