import { Button } from '@material-ui/core'
import React from 'react'
import Carousel from '../../../components/carousel/Carousel'
import './productPage.scss'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import offer from '../../../assets/offer.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';


const ProductPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const product = location.state.data;

    const showDes = () =>{
        document.querySelector(".offerDes").style.bottom = "0px";
        document.querySelector(".cover1").style.display = "block";
    }
    const hideDes = () =>{
        document.querySelector(".offerDes").style.bottom = "-240px";
        document.querySelector(".cover1").style.display = "none";
    }

    const addCart = () =>{
       navigate("/cart");
    }

    const [quantity, setQuantity] = useState(1);

   const goBack = () =>{
      navigate(-1);
   }


    return (
        <>
            <div className='main'>
                <div className='productPage' onClick={hideDes}>

                <Button variant='contained' id='b5' onClick={goBack}><ArrowBackIcon/></Button>
               <Link to="/cart"><Button variant='contained' id='b6'><LocalGroceryStoreIcon/></Button></Link>

                    <div className='carBox'>
                        <Carousel 
                            images={product.images}
                        />
                    </div>


                    <div className='empty'>

                        <div className='productBox'>

                            <div className='detail'> {product.productName} </div>
                            <div className='size'> {product.content} </div>
                            <div className='type'>Category : {product.category} </div>
                            <div className='price'>
                                <section>Festive Offer - {product.offerPercent}% 0ff</section>
                                <div className='d1'> {product.oldPrice}/-</div>
                                <div className='d2'> {product.price}.00 /-</div>
                            </div>

                            <div className='offer'>
                                <div className='off1'>
                                    <img src={offer} alt="" />
                                </div>
                                <div className='off2'>
                                    <section> {product.offerName} : Flat {product.offerPercent}% Off</section>
                                    <p>Get {product.offerPercent}% off on all purchases on this festive season...</p>
                                </div>
                                <div className='off3'>
                                    <Button variant='contained' className='bt' onClick={(e)=>{e.stopPropagation() ; showDes();}}> <ArrowForwardIosIcon fontSize='small'/> </Button>
                                </div>
                                <span id='p'>T&C Applies</span>
                            </div>

                            <hr />
                            <div className='dark1'>Color : {product.color} </div>
                            <div className='dark1'>Size : {product.size} </div>
                            <div className='dark1'>Power : {product.power} </div>
                            <hr />

                            <div className='description'>
                                <section>Description : </section>
                                <p> {product.description} </p>
                            </div>

                        </div>

                    </div>

                    <div className='footer'>
                        <div className='d7'> <span>Price :</span> {product.price*quantity}.00 /-</div>
                        <div className='d8'>Qty : {quantity}
                            <button className='but1' onClick={()=>{ if(quantity>1){setQuantity(quantity-1)}}}>-</button>
                            <button className='but2' onClick={()=>setQuantity(quantity+1)}>+</button>
                        </div>
                        <div className='d9'> <Button variant='contained' className='cart' onClick={addCart}>Add To Cart</Button> </div>
                    </div>

                    <div className='offerDes'>
                        <section>Offer Details</section>
                        <hr/>
                        <p> {product.offerDetail} </p>
                    </div>

                    <div className='cover1'></div>


                </div>
            </div>
        </>
    )
}

export default ProductPage