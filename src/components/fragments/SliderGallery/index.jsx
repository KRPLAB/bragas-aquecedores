import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";

import styles from "./slider.module.scss";

import slide_image_1 from "../../../assets/fotografias/Artboard 1.png";
import slide_image_2 from "../../../assets/fotografias/Artboard 2.png";
import slide_image_3 from "../../../assets/fotografias/Artboard 3.png";
import slide_image_4 from "../../../assets/fotografias/Artboard 4.png";
import slide_image_5 from "../../../assets/fotografias/Artboard 5.png";
import slide_image_6 from "../../../assets/fotografias/Artboard 6.png";
import slide_image_7 from "../../../assets/fotografias/Artboard 7.png";

export const SliderGallery = () => {
    return (
        <div className={styles.container}>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper-container"
            >
                <SwiperSlide>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/edCek-DNGVA?si=LF60iAxCkyUEY_PX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}