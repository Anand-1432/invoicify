import React from 'react'
import './maxcard3.scss'

import cart31 from '../../../../assets/cart31.png'

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