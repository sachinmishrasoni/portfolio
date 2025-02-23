import { Button, Stack, Tooltip } from '@mui/material'
import { IconList } from '../../../utils/iconList'

const items = [
    { label: 'LinkedIn', icon: IconList.linkedin, link: '' },
    { label: 'GitHub', icon: IconList.github, link: '' },
    { label: 'Facebook', icon: IconList.facebook, link: '' },
    { label: 'Instagram', icon: IconList.instagram, link: '' },
    // { label: 'Twitter', icon: IconList.twitter, link: '' },
]
const SocialMediaBtns = () => {
    return (
        <Stack direction={'row'} alignItems={'center'} gap={1}>
            {
                items.map((item, index) => (
                    <Tooltip key={index} title={item.label} arrow>
                        <Button
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
                        >
                            <item.icon className='icon' fontSize={22} />
                        </Button>
                    </Tooltip>
                ))
            }
        </Stack>
    )
}

export default SocialMediaBtns