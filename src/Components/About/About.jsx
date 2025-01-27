import React from "react";
import aboutCSS from './../About/About.module.css';
import aboutImg from './../..//assets/about-one.png';

function About() {
    return(
        <div className={`${aboutCSS.about_wrapper} section`}>
            <div className={aboutCSS.about_img}>
                <img src={aboutImg} alt="about-img" />
            </div>
            <div className={aboutCSS.about_content}>
                <small className="section__Heading">The Zevaris Hotel </small>
                <h2 className="section__Title">Where Elegance Meets <span>Excellance</span></h2>
                <p>  Zevaris Hotel offers a blend of luxury and comfort with world-class amenities and exceptional hospitality. Whether for leisure or business, experience elegance at its finest.</p>
                <div className={aboutCSS.Cards}>
                    <p>350+ <span>Awards Wins</span></p>
                    <p>550k+ <span>Visitors Vists</span></p>
                    <p>250+ <span>Events</span></p>
                </div>
            </div>
        </div>
    )
}

export default About;