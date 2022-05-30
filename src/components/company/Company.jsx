import React from 'react'
import './company.scss'

import img from '../../assets/induction.png'

const Company = () => {
    return (
        <>
            <div className='company'>
                <p>Prestige Launched its new
                    Induction series</p>

                    <button className='btn'>Know More!</button>

                    <img src={img} alt="" />
            </div>
        </>
    )
}

export default Company