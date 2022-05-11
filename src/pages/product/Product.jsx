import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import './product.scss'

import owen from '../../assets/owen.png'
import UseCard from '../../components/useCard/UseCard'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import CallIcon from '@material-ui/icons/Call';
import ChatIcon from '@material-ui/icons/Chat';

const Product = () => {

  const location = useLocation();

  const shower = () =>{
    document.getElementById("caller").style.right = '20px'
  }

  const hidder = () =>{
    document.getElementById("caller").style.right = '-90px'
  }

  return (
    <>
      <div className='main'>

        <div className='productPage' onClick={hidder}>

          <Link to="/" className='btn goback'><ArrowBackIcon fontSize='large'/></Link>

          <img className='image' src={owen} alt="" />

          <div className='phead'>
            <div className='help'>
              <div  onClick={(e)=>{e.stopPropagation(); shower()}} ><HeadsetMicIcon/></div>
              <p>Helpline</p>
              <section id='caller'>
                <span id='sp1'><CallIcon/></span>
                <span id='sp2'><ChatIcon/></span>
              </section>
            </div>
            <p className='title'>{location.state.title}</p>
            <section className='brName'>{location.state.brand}</section>
          </div>

          <div className='container-fluid content'>
            <div className='row'>
              <div className='col-6 data'>
                <p>Purchased on</p>
                <section>{location.state.purchase}</section>
                <div id='bn'>{location.state.shop}</div>
                <button className='btn btn-primary'>Service Center</button>
              </div>
              <div className='col-6 data2'>
                <p>Warranty Upto</p>
                <section>{location.state.warranty}</section>
                <button className='btn'>Reciept</button>
              </div>
            </div>
          </div>

          <div className='howTo'>How To Use</div>

          <div className='useCon'>
            <UseCard />
          </div>

        </div>
      </div>
    </>
  )
}

export default Product