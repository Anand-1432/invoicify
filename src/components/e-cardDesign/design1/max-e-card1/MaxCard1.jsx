import React from 'react'
import './maxcard1.scss'

import cart11 from '../../../../assets/cart11.png'

const MaxCard = (props) => {
    return (
        <>
            <div className='cardCon'>
                <div className='cardBox'>
                    <img src={props.img} alt="" />
                </div>
            </div>
        </>
    )
}

export default MaxCard