import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Sponsor = () => {


    const sponsorList = [
        { imgUrl: "/src/assets/images/sponsor/01.png", },
        { imgUrl: "/src/assets/images/sponsor/02.png", },
        { imgUrl: "/src/assets/images/sponsor/03.png", },
        { imgUrl: "/src/assets/images/sponsor/04.png", },
        { imgUrl: "/src/assets/images/sponsor/05.png", },
        { imgUrl: "/src/assets/images/sponsor/06.png", },
    ];


    return (
        <div className=' px-32 py-10 bg-gray-100'>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                autoplay={
                    {
                        deley: 2000,
                        disableOnInteraction: false
                    }
                }
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    sponsorList.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div>
                                <img src={item.imgUrl} alt="" />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default Sponsor;