import React from 'react'

export const Services = () => {
    return (
        <div className='services'>
            <p id='p1'>SERVICE</p>
            <h1>Your Goals, Our Services</h1>
            <p id='p2'>We help you in finding solutions to your problem <br /> in your startup business</p>
            <div className='services-offer'>
                <div className='services-card'>
                    <img src="images/marketing.png" alt="" />
                    <h1>Marketing</h1>
                    <p>This is a task management application that
                        can help you be more productive by schedulig important things that you want to do today</p>
                    <p className='learnmore'>LEARN MORE <img src="images/ArrowLeft.svg" alt="" /></p>
                </div>
                <div className='services-card'>
                    <img src="images/dev.png" alt="" />
                    <h1>Development</h1>
                    <p>This is a task management application that
                        can help you be more productive by schedulig important things that you want to do today</p>
                    <p className='learnmore'>LEARN MORE <img src="images/ArrowLeft.svg" alt="" /></p>
                </div>
                <div className='services-card'>
                    <img src="images/crea.png" alt="" />
                    <h1>Creative</h1>
                    <p>This is a task management application that
                        can help you be more productive by schedulig important things that you want to do today</p>
                    <p className='learnmore'>LEARN MORE <img src="images/ArrowLeft.svg" alt="" /></p>
                </div>
                <div className='services-card'>
                    <img src="images/strat.png" alt="" />
                    <h1>Strategy</h1>
                    <p>This is a task management application that
                        can help you be more productive by schedulig important things that you want to do today</p>
                    <p className='learnmore'>LEARN MORE <img src="images/ArrowLeft.svg" alt="" /></p>
                </div>
            </div>
            <p className='explore'>Explore all projects <br /> <img src="images/ArrowLeft.svg" alt="" /></p>
        </div>
    )
}
