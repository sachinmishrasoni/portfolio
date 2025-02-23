import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'
// import CardImg from '../../../../assets/Images/projectpooe.png'

import 'swiper/css';

const CardSwiper = () => {
    const pagination = {
        clickable: true,
        dynamicBullets: true,
    }
    return (
        <>
            <Box className={`card-media`}
                sx={{
                    '& .swiper': {
                        cursor: 'pointer',
                    },
                    '& .swiper-pagination': {
                        bottom: '5px'
                    },
                    '& .swiper-pagination-bullet': {
                        backgroundColor: 'white',
                        opacity: '1'
                    },
                    '& .swiper-pagination-bullet-active': {
                        backgroundColor: 'colors.highlightColor'
                    },
                    '& .swiper:hover::before': {
                        content: '""',
                        position: 'absolute',
                        left: '0px',
                        bottom: '0px',
                        width: '100%',
                        height: '50px',
                        backgroundImage: 'linear-gradient(transparent, rgba(0,0,0,0.5))',
                        zIndex: '5',
                        borderRadius: '0 0 5px 5px'
                    }
                }}>
                <Swiper
                    className='project-card-swiper'
                    spaceBetween={5}
                    slidesPerView={1}
                    loop
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false
                    }}
                    pagination={pagination}
                    modules={[Autoplay, Pagination]}
                >
                    {
                        [0, 1, 2].map((_items, index) =>
                            <SwiperSlide key={index}>
                                <Box
                                    className='card-img-box'
                                    sx={{
                                        height: { xxs: '150px', sm: '150px' },
                                        // backgroundImage: `url('${CardImg}')`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: '50% 10%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'relative',
                                        borderRadius: 1.5,
                                    }}>
                                </Box>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </Box>
        </>
    )
}

export default CardSwiper