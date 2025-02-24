import { alpha, Box, Button, Container, Divider, Grid2, IconButton, Stack, Typography } from '@mui/material'
import SectionHeader from '../../components/ui/SectionHeader'
import { IconList } from '../../utils/iconList'
import SocialMediaBtns from '../../components/ui/SocialMediaBtns'
import ContactForm from './ContactForm'
import { useAppTheme } from '../../context/theme/themeProvider'
import { sendEmail, sendTelegram, sendWhatsApp } from '../../utils/socialHandlers'

const contactData = [
    {
        title: 'Address',
        icon: IconList.location,
        content: 'Karol Bagh, New Delhi, India',
        onClick: ()=> console.log('clicked')
    },
    {
        title: 'Email',
        icon: IconList.email,
        content: 'sachunmishraf103@gmail.com',
        onClick: sendEmail
    },
    {
        title: 'Whatsapp',
        icon: IconList.whatsapp,
        content: '+91-7545823925',
        onClick: sendWhatsApp
    },
    {
        title: 'Telegram',
        icon: IconList.telegram,
        content: '@sachinmishrasoni',
        onClick: sendTelegram
    }
]

const Contact = () => {
    const { showToast } = useAppTheme();

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                showToast(`Copied: ${text}`, 'success');
            })
            .catch((err) => {
                alert(`Failed to copy: ${err}`);
                console.error('Failed to copy:', err);
            });
    };
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
                        <ContactForm />
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
                                            {
                                                item.title !== 'Address' && (
                                                    <Button variant='outlined' size='small'
                                                        sx={{ borderRadius: '25px', boxShadow: 'none' }}
                                                        onClick={item.onClick || (() => { })}
                                                    >Send</Button>
                                                )
                                            }
                                            <IconButton color='primary' onClick={() => handleCopy(item.content)}>
                                                <IconList.copy fontSize={25} />
                                            </IconButton>
                                        </Box>
                                    </Stack>
                                ))
                            }
                        </Stack>

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