import React from "react";
import footerCSS from './../Footer/Footer.module.css';

function Footer() {
    return (
        <footer className={`${footerCSS.footer_wrapper} section`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}>
                    <h2>ZevaiS</h2>
                    <p>Experience the perfect blend of luxury and comfort at ZevaiS. Our commitment is to provide exceptional hospitality and unforgettable moments for our guests.</p>
                </div>
            </div>

            <div className={footerCSS.FooterLinks}>
                <h3>Quick Links</h3>
                <p>About</p>
                <p>Contact Us</p>
                <p>Rooms</p>
                <p>GYM</p>
            </div>

            <div className={footerCSS.FooterLinks}>
                <h3>City Branches</h3>
                <p>Mexico</p>
                <p>Paris</p>
                <p>Germany</p>
                <p>Australia</p>
                <p>Califonia</p>
            </div>

            <div className={footerCSS.FooterLinks}>
                <h3>Contact</h3>
                <p>Address : <span>370 Street- Mumbai , India</span></p>
                <p>Email : <span>ex@gmail.com</span></p>
                <p>Phone : <span>9876543210</span></p>
            </div>
        </footer>
    )
}

export default Footer;