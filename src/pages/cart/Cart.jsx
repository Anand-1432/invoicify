import React from 'react'
import './cart.scss'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Group from '../../components/group/Group';
import Ungroup from '../../components/group/Ungroup';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';


const Cart = () => {

    const navigate = useNavigate();

    const [distributerData, setDistributerData] = useState([]);
    const [item, setitem] = useState();

    const distribute = (data) => {
        document.getElementById("cover").style.display = "block";
        document.getElementById("distributer").style.bottom = "0px"
        setDistributerData(data.distributer);
        setitem(data);
    }

    const itemData = (data) =>{
        console.log(data);
        console.log(item);
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
            quantity: 2,
            distributer: [
                {
                    name: "Raj Traders",
                    address: "Barkera, Bhopal MP",
                    status: true,
                },
                {
                    name: "Anand Rao Gaikwad",
                    address: "Dewas, MP",
                    status: false,
                },
            ]
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
            distributer: [
                {
                    name: "Jatin",
                    address: "SATI vidisha",
                    status: false,
                },
                {
                    name: "Vishesh",
                    address: "invoicify",
                    status: true,
                },
            ]
        }
    ]

    const groupedArray = [
        {
            distributerName: "Raj Traders",
            adrress: "Shop No 23, 4th Block, Barkhera",
            city: "Bhopal MP",
            mobile: "+91 - 754 924 2346",
            quantity: "4",
            total: "6,598.00",
            item: [
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
                    distributer: [
                        {
                            name: "Raj Traders",
                            address: "Barkera, Bhopal MP",
                            status: true,
                        },
                        {
                            name: "Anand Rao Gaikwad",
                            address: "Dewas, MP",
                            status: false,
                        },
                    ]
                },
            ]
        },
        {
            distributerName: "Anand",
            adrress: "Shop No 23, 4th Block, Barkhera",
            city: "Bhopal MP",
            mobile: "+91 - 754 924 2346",
            quantity: "4",
            total: "6,598.00",
            item: [
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
                    distributer: [
                        {
                            name: "Raj Traders",
                            address: "Barkera, Bhopal MP",
                            status: true,
                        },
                        {
                            name: "Anand Rao Gaikwad",
                            address: "Dewas, MP",
                            status: false,
                        },
                    ]
                },
            ]
        },
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

                        {
                            groupedArray.map((val, index) => {
                                return (
                                    <Group
                                        key={index}
                                        data={val}
                                    />
                                );

                            })
                        }

                        <div className='ungrouped'>Ungrouped Items</div>

                        {Ungrouped.map((val, index) => {
                            return (

                                <Ungroup
                                    key={index}
                                    fun={() => distribute(val)}
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


                                {distributerData.map((val, index) => {
                                    return (

                                        <div className='name' key={index} onClick={()=>itemData(val)}>
                                            <div> {val.name} </div>
                                            <p> {val.address} </p>
                                            {val.status ? <span id='in'>In Stock</span> : <span id="out">Out of Stock</span>}
                                        </div>
                                    );
                                })}

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart