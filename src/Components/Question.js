import React from 'react'

export const Question = () => {
    return (
        <div className='ques'>
            <div>
                <form action="#">
                    <input type="text" name='fullname' placeholder='Your full name' />
                    <input type="text" name='email' placeholder='Email address' />
                    <input type="text" name='lines' placeholder='Drop us a few lines here...' />
                    <button>Send us a message</button>
                </form>
            </div>
            <div className='ques-ss'>
                <p style={{ fontSize: '14px ' }}>FREQUENTLY ASKED QUESTIONS</p>
                <h1>Feel Free To Ask</h1>
                <p>We help you in finding solutions to your <br /> problem  in your startup business</p>
            </div>

        </div >
    )
}
