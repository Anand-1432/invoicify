import React from 'react'
import './cart.scss'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Group from '../../components/group/Group';
import Ungroup from '../../components/group/Ungroup';
import SearchIcon from '@material-ui/icons/Search';


const Cart = () => {

    const navigate = useNavigate();

    const distribute = () => {
        document.getElementById("cover").style.display = "block";
        document.getElementById("distributer").style.bottom = "0px"
    }

    const close = () => {
        document.getElementById("cover").style.display = "none";
        document.getElementById("distributer").style.bottom = "-500px"
    }

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
            quantity:2,
        }
    ]

    return (
        <>
            <div className='main'>
                <div className='cartPage'>

                    <div className='header'>
                        <button className='btn back' onClick={goBack}><ArrowBackIcon /></button>
                        My Cart
                    </div>

                    <div className='cartBox'>
                        <div className='grouped'>Grouped Items</div>
                        <Group />
                        <Group />

                        <div className='ungrouped'>Ungrouped Items</div>

                        {Ungrouped.map((val, index) => {
                            return (

                                <Ungroup
                                    key={index}
                                    fun={distribute}
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

                    <div id='cover' onClick={close}></div>

                    <div id='distributer'>
                        <div className='head'>Select Distributer</div>

                        <div className='data'>
                            <div className='instruct'>Selected Items are available only on these distributers near you</div>

                            <div className='search'>
                                <input type="text" placeholder='Search for distributer name, place...' />
                                <span><SearchIcon /></span>
                            </div>

                            <div className='content'>
                                <div className='name'>
                                    <div>Raj Traders</div>
                                    <p>Barkera, Bhopal MP</p>
                                    <span>In Stock</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart