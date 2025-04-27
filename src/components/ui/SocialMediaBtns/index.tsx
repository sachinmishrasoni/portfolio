import { Button, Stack, Tooltip } from '@mui/material'
import { IconList } from '../../../utils/iconList'

const items = [
    { label: 'LinkedIn', icon: IconList.linkedin, link: 'https://www.linkedin.com/in/sachinmishrasoni/' },
    { label: 'GitHub', icon: IconList.github, link: 'https://github.com/sachinmishrasoni' },
    { label: 'Facebook', icon: IconList.facebook, link: 'https://www.facebook.com/sachinmishrasoni' },
    { label: 'Instagram', icon: IconList.instagram, link: 'https://www.instagram.com/sachinmishrasoni/' },
    { label: 'X', icon: IconList.twitter, link: '' },
]
const SocialMediaBtns = () => {

    const handleClick = (link: string) => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer'); // Opens link in new tab
        }
    };

    return (
        <Stack direction={'row'} flexWrap={'wrap'} alignItems={'center'} gap={1}>
            {
                items.map((item, index) => (
                    <Tooltip key={index} title={item.label} arrow>
                        <span>
                            <Button
                                onClick={() => handleClick(item.link)}
                                sx={{
                                    minWidth: 'auto',
                                    height: 'auto',
                                    p: 1.5,
                                    borderRadius: '50%',
                                    backgroundColor: 'transparent',
                                    boxshadow: 'none',
                                    position: 'relative',
                                    transition: '1s all ease-in-out',
                                    '&:hover': {
                                        // boxShadow: theme => `0px 0px 12px 4px ${theme.palette.primary.main}`,
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '0%',
                                        height: '0%',
                                        backgroundColor: 'primary.light',
                                        borderRadius: '50%',
                                        transition: '0.3s all ease-in',
                                        zIndex: 0
                                    },
                                    '&:hover::before': {
                                        width: '100%',
                                        height: '100%'
                                    },
                                    '& .icon': {
                                        zIndex: 5,
                                        transition: '0.3s all ease-in'
                                    },
                                    '&:hover .icon': {
                                        color: '#fff',
                                        transform: 'scale(1.2) rotate(15deg)'
                                    }
                                }}
                                disabled={!item.link}
                            >
                                <item.icon className='icon' fontSize={22} />
                            </Button>
                        </span>
                    </Tooltip>
                ))
            }
        </Stack>
    )
}

export default SocialMediaBtns