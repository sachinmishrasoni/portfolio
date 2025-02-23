import { alpha, Box, Button, Container, Divider, Grid2, IconButton, Stack, Typography, useTheme } from '@mui/material'
import SectionHeader from '../../components/ui/SectionHeader'
import { IconList } from '../../utils/iconList'
import CustomTextField from '../../components/ui/CustomTextField'
import SocialMediaBtns from '../../components/ui/SocialMediaBtns'
import SpotlightPaper from '../../components/ui/SpotlightPaper'

const contactData = [
    {
        title: 'Address',
        icon: IconList.location,
        content: 'Karol Bagh, New Delhi, India',
        onClick: () => {
        }
    },
    // {
    //     title: 'Phone',
    //     icon: IconList.phone,
    //     content: '+91 1234567890',
    //     onClick: () => {
    //     }
    // },
    {
        title: 'Email',
        icon: IconList.email,
        content: 'b9QJm@example.com',
        onClick: () => {

        }
    },
    {
        title: 'Whatsapp',
        icon: IconList.whatsapp,
        content: '+91 1234567890',
        onClick: () => {

        }
    },
    {
        title: 'Telegram',
        icon: IconList.telegram,
        content: '@sachinmishrasoni',
        onClick: () => {

        }
    }
]

const Contact = () => {
    const theme = useTheme();
    return (
        <Box id="contact" data-section width={'100%'} minHeight={'100vh'} position={'relative'} overflow={'hidden'}
            sx={{
                background: theme => `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${theme.palette.background.default} 50%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
            }}
        >
            <Container sx={{ py: 5 }}>
                <SectionHeader title={'Contact me'} subtitle={'Way to'} conunt={'05'} />

                <Grid2 container spacing={3} mt={5}>
                    <Grid2 size={{ xs: 12 }} order={{ xs: 1 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Box component={'img'} src='/images/contact.png' sx={{ width: { xs: '200px', sm: '200px' } }} mb={2} />

                        <Box>
                            <Typography variant='h4' fontWeight={'bold'} color='primary.main' textAlign={'center'}>Let's get in touch! 📬</Typography>
                            {/* <Typography>Send me a message</Typography> */}
                            <Typography variant='h6' color='secondary.main' textAlign={'center'}>💡Tell me about your project—let's build something amazing together.</Typography>
                            <Typography variant='body1' color='text.secondary' mt={2} textAlign={'center'}>✉️ Feel free to drop me a message; I'm just a click away!</Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, md: 6 }} order={{ xs: 2, sm: 3, md: 3 }}>
                        <SpotlightPaper
                            spotlightColor={alpha(theme.palette.primary.main, 0.25)}
                            sx={{
                                p: 2,
                                borderRadius: 2,
                                position: 'relative',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                                overflow: 'hidden',
                                zIndex: 5
                            }}
                        >
                            <Typography variant='h6' color='text.secondary'>Send me a message</Typography>
                            <Box component={'form'} sx={{
                                mt: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            }}>
                                <CustomTextField
                                    required
                                    placeholder='Name'
                                    prefixIcon={<IconList.user fontSize={20} />}
                                />
                                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>
                                    <CustomTextField
                                        required
                                        placeholder='Email'
                                        type='email'
                                        prefixIcon={<IconList.email fontSize={20} />}
                                    />
                                    <CustomTextField
                                        required
                                        placeholder='Phone' type='tel'
                                        prefixIcon={<IconList.phone fontSize={20} />}
                                    />
                                </Stack>
                                <CustomTextField
                                    required
                                    placeholder='Subject'
                                    prefixIcon={<IconList.user fontSize={20} />}
                                />
                                <CustomTextField
                                    required
                                    placeholder='Message'
                                    multiline
                                    rows={5}
                                />
                                <Button variant='contained' type='submit'>Submit</Button>
                            </Box>
                            <Box sx={{
                                position: 'absolute',
                                top: '-30px',
                                right: '-20px',
                                borderRadius: '50%',
                                color: 'primary.light',
                                zIndex: -1,
                                opacity: theme => theme.palette.mode === 'dark' ? 0.02 : 0.05
                            }}>
                                <IconList.telegram fontSize={300} />
                            </Box>
                        </SpotlightPaper>
                    </Grid2>
                    <Grid2
                        size={{ xs: 12, sm: 6, md: 6 }}
                        order={{ xs: 3, sm: 2, md: 2 }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Stack
                            direction={{ xs: 'column' }}
                            divider={<Divider orientation={'horizontal'} flexItem />}
                            spacing={1.5}
                        >
                            {
                                contactData.map((item, index) => (
                                    <Stack key={index} direction={'row'} alignItems={'center'} gap={1.5}
                                        position={'relative'}
                                        overflow={'hidden'}
                                        sx={{
                                            '& .action-box': {
                                                transition: 'right 0.3s ease-in'
                                            },
                                            '&:hover .action-box': {
                                                right: 0,
                                            }
                                        }}
                                    >
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '55px',
                                            height: '55px',
                                            borderRadius: '50%',
                                            bgcolor: theme => alpha(theme.palette.primary.main, 0.2),
                                            color: 'primary.main',
                                        }}>
                                            {item.icon && item.icon({ fontSize: 25 })}
                                        </Box>
                                        <Stack>
                                            <Typography variant='body1' color='text.secondary'>{item.title}</Typography>
                                            <Typography variant='body1'>{item.content}</Typography>
                                        </Stack>

                                        <Box className='action-box' sx={{
                                            position: 'absolute',
                                            top: 0,
                                            right: '-150px',
                                            minWidth: '50px',
                                            height: '100%',
                                            // backgroundColor: 'primary.light',
                                            zIndex: 5,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: 1
                                        }}>
                                            <Button variant='outlined' size='small'
                                                sx={{ borderRadius: '25px', boxShadow: 'none' }}
                                            >Send</Button>
                                            <IconButton color='primary'>
                                                <IconList.copy fontSize={25} />
                                            </IconButton>
                                        </Box>
                                    </Stack>
                                ))
                            }
                        </Stack>
                        {/* <Divider sx={{ my: 3 }}>or</Divider> */}
                        <Box mt={2}>
                            <Typography variant='h6' mb={1}>Or, Connect with me on social networks:</Typography>
                            <SocialMediaBtns />
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default Contact