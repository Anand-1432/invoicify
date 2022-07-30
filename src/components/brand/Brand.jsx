import React from 'react'
import './brand.scss'
import { useNavigate } from 'react-router-dom'


const Brand = (props) => {

  const navigate = useNavigate();

  const pushData = (data) =>{
    navigate("/order/brand", {state:{data}});
  }

  return (
    <>
        <div className='brandBox' onClick={()=>{pushData(props.category);}}>
            <div className='imgSec'>
                <img src={props.img} alt="" />
            </div>
            <div className='name'> {props.brand} </div>
        </div>
    </>
  )
}

export default Brand;