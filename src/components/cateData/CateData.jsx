import React from 'react'
import './cateData.scss'
import { useNavigate } from 'react-router-dom'

import mix1 from "../../assets/mix1.png"


const CateData = (props) => {

  const navigate = useNavigate();

  const sendProductData = (data) =>{
     navigate("/order/brand/category/product", {state:{data}});
  }


  return (
    <>
        <div className='cateData' onClick={()=>{sendProductData(props);}}>
            <div className='imgCon1'><img src={mix1} alt="" /></div>
            <section> {props.price}/- </section>
            <div> {props.productName} </div>
            <p> {props.short} </p>
            <span>Category : {props.category} </span>
        </div>
    </>
  )
}

export default CateData