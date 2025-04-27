import { Box, Button } from '@mui/material'
import React from 'react'
import { IconList } from '../../../utils/iconList'

const ViewDownloadBtn = () => {
    const resumeViewLink = 'https://drive.google.com/file/d/18J7xCAVRC6cso9Ahafe2dCtAzoA7LaTA/view?usp=sharing';
    // const resumeDownloadLink = 'https://drive.google.com/uc?export=download&id=18J7xCAVRC6cso9Ahafe2dCtAzoA7LaTA';

    const handleView = (e: React.MouseEvent) => {
        e.stopPropagation()
        window.open(resumeViewLink, '_blank');
    }

    // const handleDownload = () => {
    //     const link = document.createElement('a');
    //     link.href = resumeDownloadLink;
    //     link.download = 'Sachin_Kumar_Resume.pdf'; // Optional: Suggests a filename
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/docs/sachin_cv'; // Path to your CV file
        link.download = 'Sachin_Resume.pdf'; // File name to be saved as
        link.target = '_blank'; // Open in a new tab/window
        document.body.appendChild(link); // Append link to body (necessary for some browsers)
        link.click(); // Trigger the download
        document.body.removeChild(link); // Clean up by removing the link from the DOM
    };
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
                zIndex: 0,
                color: 'primary.dark',
                backdropFilter: 'blur(10px)'
            }}>
                CV Download
            </Button>
        </Box>
    )
}

export default ViewDownloadBtn