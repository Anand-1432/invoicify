import React from 'react'
import './usecard.scss'

import owen from '../../assets/owen.png'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const UseCard = () => {
    return (
        <>
            <div className='useCards'>
                <img src={owen} alt="..." />
                <section>How To Use Microwave</section>
                <span>A step by step procedure
                      guide to use a microwave...
                </span>
                <div className='buy'><PlayArrowIcon fontSize='small' /></div>
            </div>
        </>
    )
}

export default UseCard