import { Box, Stack, Typography } from '@mui/material'

const FullName = () => {
    return (
        <>
            <Box display={'inline-block'}>
                <Stack
                    sx={{
                        position: 'relative'
                    }}>
                    <Typography color={'primary.main'} variant='h4' fontWeight={'bold'} display={'flex'} position={'relative'}>
                        S
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'absolute',
                                right: 0,
                                top: 5,
                                '@media(max-width: 900px)': {
                                    top: 6
                                },
                                '@media(max-width: 600px)': {
                                    top: 3
                                }
                            }}
                        >
                            <Typography
                                variant='h5'
                                sx={{
                                    color: 'white',
                                    fontVariant: 'small-caps',
                                    fontWeight: 'bold',
                                    position: 'absolute'
                                }}>achin
                                <Typography
                                    variant='caption'
                                    sx={{
                                        color: 'primary.main',
                                        fontSize: '0.55rem',
                                        position: 'absolute',
                                        top: 0.3,
                                        right: 0,
                                        '@media(max-width: 900px)': {
                                            top: -0.8
                                        },
                                        '@media(max-width: 600px)': {
                                            top: -2
                                        }
                                    }}
                                >Mishra</Typography>
                                <Typography
                                    variant='caption'
                                    sx={{
                                        color: 'primary.main',
                                        fontSize: '0.65rem',
                                        position: 'absolute',
                                        right: -14,
                                        top: 6,
                                        transform: 'rotate(-90deg)',
                                        '@media(max-width: 900px)': {
                                            top: 4
                                        },
                                        '@media(max-width: 600px)': {
                                            fontSize: '0.62rem'
                                        }
                                    }}
                                >Soni</Typography>
                            </Typography>

                        </Box>

                    </Typography>

                    {/* <Stack flexDirection={'row'}>

                        <Typography
                            variant='caption'
                            sx={{
                                fontVariant: 'small-caps',
                                transform: 'rotate(-90deg)',
                            }}
                        >Soni</Typography>
                    </Stack> */}
                </Stack>
            </Box>
        </>
    )
}

export default FullName;