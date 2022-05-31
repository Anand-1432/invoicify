import React from 'react'
import './saleCard.scss'


const SaleCard = (pros) => {
  return (
    <>
         <div className='sallingcard'>
             <img src={pros.img} alt="" />
             <h5>{pros.name}({pros.model})</h5>
             <span>{pros.brand}</span>
             <p>{pros.customer}</p>
             <div>{pros.amt}/-</div>
         </div>
    </>
  )
}

export default SaleCard