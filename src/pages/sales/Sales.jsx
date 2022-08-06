import React from 'react'
import './sales.scss'

import Footer from '../../components/footer/Footer';
import Navbar2 from '../../components/navbar2/Navbar2';
import vector from '../../assets/Vector.png'
import qr from '../../assets/qr.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SaleCard from '../../components/saleCard/SaleCard';

import owen from '../../assets/owen.png'
import { Link } from 'react-router-dom';

const Sales = () => {


  const Sales = [
    {
      name: "Microwave",
      brand: "Philips",
      model: "full model name",
      img: owen,
      amt: "4,999",
      customer: "Mr. Rajesh Kumar"
    },
    {
      name: "Microwave",
      brand: "Philips",
      model: "full model name",
      img: owen,
      amt: "4,999",
      customer: "Mr. Rajesh Kumar"
    },
    {
      name: "Microwave",
      brand: "Philips",
      model: "full model name",
      img: owen,
      amt: "4,999",
      customer: "Mr. Rajesh Kumar"
    },
    {
      name: "Microwave",
      brand: "Philips",
      model: "full model name",
      img: owen,
      amt: "4,999",
      customer: "Mr. Rajesh Kumar"
    },
    {
      name: "Microwave",
      brand: "Philips",
      model: "full model name",
      img: owen,
      amt: "4,999",
      customer: "Mr. Rajesh Kumar"
    },
    {
      name: "Microwave",
      brand: "Philips",
      model: "full model name",
      img: owen,
      amt: "4,999",
      customer: "Mr. Rajesh Kumar"
    },
    {
      name: "Microwave",
      brand: "Philips",
      model: "full model name",
      img: owen,
      amt: "4,999",
      customer: "Mr. Rajesh Kumar"
    },
    {
      name: "Microwave",
      brand: "Philips",
      model: "full model name",
      img: owen,
      amt: "4,999",
      customer: "Mr. Rajesh Kumar"
    },
  ]


  const openNavbar = () => {

    const l = document.getElementById('con');
    l.style.display = 'block';

    const bar = document.getElementById('slide');
    bar.style.left = '0px';

  }

  return (
    <>
      <div className='main'>
        <div className='sales'>

          <Navbar2 />

          <div className='navBar'>
            <img id='Onbtn' src={vector} alt="..." onClick={openNavbar} />
            <img id='Offbtn' src={vector} alt="..." />
           <Link to="/scan"><img id='pro' src={qr} alt="..." /></Link>
          </div>

          <hr />
          <div className='filter'>
            <span><ArrowDropDownIcon fontSize='large' /></span>
            <select name="" id="">
              <option value=""> Select Filter</option>
            </select>
          </div>
          <hr id='hr' />

          <div className='saleCon'>

            {Sales.map((v, index) => {
              return (

                <SaleCard
                  key={index}
                  name={v.name}
                  brand={v.brand}
                  model={v.model}
                  img={v.img}
                  amt={v.amt}
                  customer={v.customer}
                />

              );
            })}

          </div>

          <div className='footCon'>
            <Footer />
          </div>

        </div>
      </div>
    </>
  )
}

export default Sales