import React from 'react'
import './maxcard2.scss'

import cart21 from '../../../../assets/cart21.png'

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