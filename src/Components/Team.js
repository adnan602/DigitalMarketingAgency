import React from 'react'
import "./style.css"
export const Team = () => {
    return (
        <div>
            <div className="our-team">
                <div className='team-des'>
                    <div>
                        <p>TEAM</p>
                        <h2>Our Team</h2>
                    </div>
                    <p>We help you in finding solutions to your <br /> problem in your startup business</p>
                </div>
                <div className='team-mem'>
                    <i class="fa-solid fa-arrow-left"></i>
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>

        </div>
    )
}



const TeamCard = () => {
    return (
        <div className='team-card'>
            <img src="images/mem1.png" alt="" />
            <p style={{ fontSize: '14px' }}>UX/UI Designer</p>
            <h3>Justin Pierre</h3>
            <p>We help you in finding solutions to your problem.</p>
            <p style={{ fontSize: '12px' }} >Let’s Connect</p>
            <img src="images/socialicon.png" alt="" />
        </div>
    )
}

