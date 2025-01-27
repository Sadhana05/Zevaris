import React from "react";
import testimonialCSS from './../Testimonials/Testimonial.module.css';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules';

import img1 from './../../assets/testi-01.jpg';
import img2 from './../../assets/testi-04.jpg';
import img3 from './../../assets/testi-03.jpg';
function Testimonial() {
    return (
        <div className={`${testimonialCSS.testimonial_wrapper} section`}>
            <small className="section__Heading">Testimonials</small>
            <h2 className="section__Title">What Our Clients <span>Says</span></h2>
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                    }}
                    breakpoints={{
                        0:{
                            slidesPerView:1
                        },
                        1200: {
                            slidesPerView:2
                        }
                    }}
                    speed={1500}
                    modules={[Autoplay]}
                    className={testimonialCSS.swiper}
                >
                    
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img1} alt="" />
                        <div className={testimonialCSS.content}>
                            <h3>Sharmila<span>manager</span></h3>
                            <p>My experience at this hotel was truly remarkable. The staff was incredibly welcoming, the amenities were top-notch, and the atmosphere was perfect for relaxation. Highly recommended!</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img2} alt="" />
                        <div className={testimonialCSS.content}>
                            <h3>Saranya<span>sales manager</span></h3>
                            <p>The level of service exceeded my expectations. From the moment I arrived, I felt valued and taken care of. The food, ambiance, and overall experience were exceptional.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img3} alt="" />
                        <div className={testimonialCSS.content}>
                            <h3>Aadithya Baskar<span>manager</span></h3>
                            <p>A fantastic stay with outstanding hospitality. The rooms were spacious, well-maintained, and provided all the necessary comforts. Looking forward to my next visit!</p>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>

        </div>
    )
}
export default Testimonial;