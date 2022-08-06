import React from 'react'
import { useNavigate } from 'react-router-dom'
import './saleCard.scss'


const SaleCard = (pros) => {

  const navigate = useNavigate();

  const sendData = () =>{
    navigate("/sales/product_data", {state: {data : pros}});
  }

  return (
    <>
         <div className='sallingcard' onClick={sendData}>
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