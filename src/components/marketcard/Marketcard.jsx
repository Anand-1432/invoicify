import React from 'react'
import './marketcard.scss'

import owen from '../../assets/owen.png'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Marketcard = () => {
    return (
        <>
            <div className='marketCard'>
                <img src={owen} alt="..." />
                <section>Microwave</section>
                <span>30% off</span>
                <div className='buy'><AddShoppingCartIcon fontSize='small'/></div>
                <div className='buyText'>Buy Now</div>
            </div>
        </>
    )
}

export default Marketcard