import React from 'react'

export const Attribute = () => {
    return (
        <div className='attribute'>
            <div>
                <p>ATTRIBUTE</p>
                <h1>What Makes Us Different</h1>
                <p>We help you in finding solutions to your problem in <br /> your startup business</p>
                <p className='explore'>Explore all projects <img src="images/ArrowLeft.svg" alt="" /></p>
            </div>
            <div>
                <div> <img src="images/attr1.png" alt="image" /></div>
                <div >
                    <h2>Custom Development Solutions</h2>
                    <p>This is a task management application that can help
                        you be more productive by schedulig important things.</p>
                    <button className='full-view' ><a href="#">Full View</a></button></div>
            </div>
            <div>
                <div >
                    <h2>Custom Development Solutions</h2>
                    <p>This is a task management application that can help
                        you be more productive by schedulig important things.</p>
                    <button className='full-view' ><a href="#">Full View</a></button>
                </div>

                <div> <img src="images/attr2.png" alt="image" /></div>
            </div>

        </div>
    )
}
