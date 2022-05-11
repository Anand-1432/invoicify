import { useNavigate } from 'react-router-dom'
import React from 'react'
import './productcard.scss'

import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';


const Productcard = (props) => {

  const navigate = useNavigate();

  const sendData = (data) =>{
    console.log(data);
    
    navigate('/product',{state:{
      id:data.id, 
      title:data.title, 
      brand:data.brand, 
      img:data.img,
      shop:data.shop,
      purchase:data.purchase,
      warranty:data.warranty
    }});

  }

  return (
    <>
        <div className='productCard' onClick={()=>sendData(props)}>
          <img src={props.img} alt="..." />
          <section>{props.title}</section>
          <span>{props.brand}</span>
          <div className='call'><HeadsetMicIcon fontSize='small'/></div>
        </div>
    </>
  )
}

export default Productcard