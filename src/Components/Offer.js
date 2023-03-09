import React, { useContext } from 'react'
import "./style.css";
import { Services } from './Services';
import { Attribute } from './Attribute';
import { useAppContext } from '../Contexts/app.context';


const Offer = ({ }) => {
    const { offerData } = useAppContext()
    return (
        < >
            <div className='offer'>
                <div className='left'>
                    <p>WHAT WE DO</p>
                    <h2>We Have Dedicated Designers On These</h2>
                </div>
                <div className='right'>
                    <p>With a lot of professional trainer, we help you in finding solutions to your problem in your startup business</p>
                </div>
                <img src="images/Arrowbutton.svg" alt="img" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card offerData={offerData} />

            </div>
            <div className='view-all'><button ><a href="#">View All</a></button></div>
        </>
    )
}

const Card = ({ offerData }) => {
    return offerData.map((curElem) => {
        // const { name, id, image, description } = curElem;
        return (
            <div className="offer-one" key={curElem.id}>
                <div>
                    <img className='imgicon' src={curElem.image} alt="imag" />
                    <h2>{curElem.name}</h2>
                    <p>{curElem.description}</p>
                    <p className='learnmore'>LEARN MORE<img src="images/ArrowLeft.svg" alt="" /></p>
                </div>
            </div>
        )
    })


}

export default Offer