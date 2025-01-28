import React from "react";
import roomsCSS from "./Room.module.css"
import { Link } from "react-router-dom";

function Rooms() {
    return(
        <div className={`${roomsCSS.Rooms_container} section`}>
            <small className="section__Heading">Luxuary Suites</small>
            <h2 className="section__Title">Our Best<span>Rooms</span></h2>

            <div className={roomsCSS.cards}>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front1}`}>
                            <button>Junior Suite</button>
                        </div>
                        <div className={roomsCSS.Card_Back}>
                            <div className={roomsCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Junior Suite</h3>
                                <p>- Spacious ambiance</p>
                                <p>- 24/7 room service</p>
                                <p>- Complimentary breakfast</p>
                                <p>- Secure parking</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <Link to ="/juniorsuitebook">
                                <button>Book Now</button>
                                </Link>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front2}`}>
                            <button>Twin Room</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back2}`}>
                            <div className={roomsCSS.price}>
                                <p>$190/N</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Twin Room</h3>
                                <p>- Ideal for friends or family</p>
                                <p>- Modern furnishings</p>
                                <p>- Room cleaning service</p>
                                <p>- Free Wi-Fi & on-site parking</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <Link to = "twinroom">
                                <button>Book Now</button>
                                </Link>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front3}`}>
                            <button>Quad Room</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back3}`}>
                            <div className={roomsCSS.price}>
                                <p>$150/N</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Quad Room</h3>
                                <p>- Perfect for group stays</p>
                                <p>- Comfortable bedding</p>
                                <p>- Daily housekeeping</p>
                                <p>- Valet parking</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <Link to= "/Quadroom">
                                <button>Book Now</button>
                                </Link>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front4}`}>
                            <button>Deluxe Room</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back4}`}>
                            <div className={roomsCSS.price}>
                                <p>$180/N</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Deluxe Room</h3>
                                <p>- Luxurious decor</p>
                                <p>- King-sized bed</p>
                                <p>- Complimentary minibar</p>
                                <p>- High speed Wi-Fi</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <Link to = "/Deluxeroom">
                                <button>Book Now</button>
                                </Link>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front5}`}>
                            <button>Exclusive Room</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back5}`}>
                            <div className={roomsCSS.price}>
                                <p>$220/N</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Exclusive Room</h3>
                                <p>- Premium amenities</p>
                                <p>- Private balcony</p>
                                <p>- Personalized room service</p>
                                <p>- VIP lounge access</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <Link to ="/Exclusiveroom">
                                <button>Book Now</button>
                                </Link>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front6}`}>
                            <button>Personal Room</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back6}`}>
                            <div className={roomsCSS.price}>
                                <p>$200/N</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Personal Room</h3>
                                <p>- Perfect for solo travelers</p>
                                <p>- Cozy interiors</p>
                                <p>- Smart TV & workspace</p>
                                <p>- Laundry service</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <Link to="/Personalroom">
                                <button>Book Now</button>
                                </Link>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms;