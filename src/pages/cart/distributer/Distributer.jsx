import React from 'react'
import './distributer.scss'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Ungroup from '../../../components/group/Ungroup';
import { Button } from '@material-ui/core'


const Distributer = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }


  const Ungrouped = [
    {
      productName: "Lorem ipsum dolor sit amet, consectetur",
      content: "4 Jars (1500 ml, 1500 ml, 1000 ml, 450 ml)",
      color: "Black & Yellow",
      size: "Medium",
      power: "1500W",
      offerName: "Festive Offer",
      offerPercent: "5",
      price: "3,299.00",
      oldPrice: "3,599.00",
      quantity: 2,
    },
    {
      productName: "Lorem ipsum dolor sit amet, consectetur",
      content: "4 Jars (1500 ml, 1500 ml, 1000 ml, 450 ml)",
      color: "Black & Yellow",
      size: "Medium",
      power: "1500W",
      offerName: "Festive Offer",
      offerPercent: "5",
      price: "3,299.00",
      oldPrice: "3,599.00",
      quantity: 2,
    },
    {
      productName: "Lorem ipsum dolor sit amet, consectetur",
      content: "4 Jars (1500 ml, 1500 ml, 1000 ml, 450 ml)",
      color: "Black & Yellow",
      size: "Medium",
      power: "1500W",
      offerName: "Festive Offer",
      offerPercent: "5",
      price: "3,299.00",
      oldPrice: "3,599.00",
      quantity: 2,
    },
  ]



  return (
    <>
      <div className='main'>
        <div className='distributerPage'>

          <div className='header'>
            <button className='btn back' onClick={goBack}><ArrowBackIcon /></button>
            My Cart
          </div>

          <div className='grouped'>Raj Traders</div>

          <div className='unContainer'>

            {Ungrouped.map((val, index) => {
              return (
                <Ungroup
                  key={index}
                  productName={val.productName}
                  content={val.content}
                  color={val.color}
                  size={val.size}
                  power={val.power}
                  offerName={val.offerName}
                  offerPercent={val.offerPercent}
                  price={val.price}
                  oldPrice={val.oldPrice}
                  quantity={val.quantity}
                />
              );
            })}

          </div>

          <div className='footer'>
            <div className='d7'> <span>Price :</span> 6,598.00/-</div>
            <div className='d9'> <Button variant='contained' className='cart'>Place Order</Button> </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Distributer