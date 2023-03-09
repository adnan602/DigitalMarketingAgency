import React from 'react'
import "./style.css";

export const OurClients = () => {
    return (
        <div className="our-clients">
            <p>Our Clients</p>
            <h2>We Partner with the Biggest Brands In
                <br /> Digital To Create Powerful Products <br /> And Experiences</h2>
            <div className='clients'>
                <img src="images/3d.png" alt="image" />
                <img src="images/logos.png" alt="image" className='clt' />
                <img src="images/3d2.png" alt="image" />
            </div>
        </div>
    )
}
