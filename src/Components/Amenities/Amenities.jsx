import React from "react";
import aminitiesCSS from './../Amenities/Amenities.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Autoplay } from "swiper/modules";
import img2 from './../../assets/gym.jpg';
import img1 from './../../assets/pool.jpg';
import img3 from './../../assets/rest.jpg';
import { Link } from "react-router-dom";

function Amenities(){
    return (
        <div className={`${aminitiesCSS.aminities_wrapper} section`}>
            <small className="section__Heading">Luxury Amenities</small>
            <h2 className="section__Title">Our Best <span>Amenities</span></h2>

            <Swiper 
                className={aminitiesCSS.swiper}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1000,
                }}
                speed={2000}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className={aminitiesCSS.amenities__item}>
                        <img src={img1} alt="amenities-img" />

                        <div className={aminitiesCSS.content}>
                            <h2>Swimming Pool</h2>
                            <p>Enjoy a refreshing swim in our temperature-controlled pool, offering a serene escape with stunning views and relaxing lounge areas.</p>
                            <Link to = "/Swimmingpool">
                            <button>Book Now !</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={aminitiesCSS.amenities__item}>
                        <img src={img2} alt="amenities-img" />

                        <div className={aminitiesCSS.content}>
                            <h2>Gym and Sports</h2>
                            <p>Stay fit and active with our state-of-the-art gym, equipped with the latest fitness equipment, personal training services, and group exercise classes.</p>
                            <Link to ="/Gymsport">
                            <button>Book Now !</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={aminitiesCSS.amenities__item}>
                        <img src={img3} alt="amenities-img" />

                        <div className={aminitiesCSS.content}>
                            <h2>Restro and Cafe</h2>
                            <p>Savor delicious cuisine at our fine dining restaurant and café, featuring a diverse menu with gourmet dishes, freshly brewed coffee, and delightful desserts.</p>
                            <Link to ="/RestroCafe">
                            <button>Book Now !</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Amenities;