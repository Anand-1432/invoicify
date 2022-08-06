import React from 'react'
import './orderBoxes.scss'

import mix2 from '../../assets/mix2.png'


const orderBoxes = () => {
    return (
        <>
            <div className='orderBoxPage'>

                <div className='upper'>
                    <div className='imgBox'>
                        <img src={mix2} alt="" />
                    </div>
                    <div className='textBox'>
                        <section>Lorem ipsum dolor sit amet, consectetur</section>
                        <div>4 Jars (1500 ml, 1500 ml, 1000 ml, 450 ml)</div>
                        <p>Yellow & Black,     <span> Medium, </span>      1500W</p>
                    </div>
                </div>

                <div className='middle'>
                    <div className='left'>
                        <div id='offer'>Festive Offer - 5% 0ff</div>
                        <div id='button'>
                            2 Qtn.
                        </div>
                    </div>
                    <div className='right'>
                        <div>7,198.00/-</div>
                        <section>6,598.00/-</section>
                    </div>
                </div>

            </div>
        </>
    )
}

export default orderBoxes