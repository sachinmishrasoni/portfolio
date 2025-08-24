import { Box } from '@mui/material';
import NickName from './NickName';
import FullName from './FullName';
import './index.css'

const HeaderName = () => {
    return (
        <>
            <Box

                sx={{
                    width: '56px',
                    // height: { xxs: '30px', sm: '35px', md: '35px' },
                    height: { xs: '30px', md: '40px' },
                    cursor: 'pointer',
                    perspective: '5000px',
                    '&:hover .rotate-box': {
                        transform: 'rotateX(180deg)',
                        transition: 'transform 1s',
                    }
                }}>
                <Box
                    className='rotate-box'
                    sx={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        transition: 'transform 1s',
                        transformStyle: 'preserve-3d'
                    }}>
                    <Box className={'front-side-box'} sx={{ width: '100%', height: '100%', position: 'absolute', backfaceVisibility: 'hidden' }}>
                        <NickName />
                    </Box>
                    <Box className={'back-side-box'} sx={{ width: '100%', height: '100%', position: 'absolute', transform: 'rotateX(180deg)', backfaceVisibility: 'hidden' }}>
                        <FullName />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default HeaderName;