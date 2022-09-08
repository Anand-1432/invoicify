import React from 'react'
import './design1.scss'
import MaxCard1 from './max-e-card1/MaxCard1'

import img1 from '../../../assets/cart11.png'
import img2 from '../../../assets/cart12.png'
import img3 from '../../../assets/cart13.png'
import img4 from '../../../assets/cart14.png'
import img5 from '../../../assets/cart15.png'
import img6 from '../../../assets/cart16.png'

const Design1 = (props) => {
  return (
    <>
      <div className='design1'>
        <MaxCard1 data={props.data} img={img1} color1="#732424" color2="#732424" />
        <MaxCard1 data={props.data} img={img2} color1="black" color2="white" />
        <MaxCard1 data={props.data} img={img3} color1="white" color2="white" />
        <MaxCard1 data={props.data} img={img4} color1="black" color2="black" />
        <MaxCard1 data={props.data} img={img5} color1="white" color2="#732424" />
        <MaxCard1 data={props.data} img={img6} color1="black" color2="black" />
      </div>
    </>
  )
}

export default Design1