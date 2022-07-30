import React from 'react'
import './address.scss'
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import { useState } from 'react';


const Address = () => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const openBox = () => {
        setShow(true);
    }

    const Array = [
        {
            name: "Devraaj Kumar",
            address: "A one electronics , gol bazar , main street , Jabalpur , Madhya Pradesh - 410222",
            mobile: "123 456 7890",
        },
        {
            name: "Devraaj Kumar",
            address: "A one electronics , gol bazar , main street , Jabalpur , Madhya Pradesh - 410222",
            mobile: "123 456 7890",
        },
    ]


    return (
        <>
            <div className='main'>
                <div className='address'>

                    <div className='header'>
                        <Link to="/profile" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                        Address
                    </div>

                    {Array.map((val, index) => {
                        return (
                            <div key={index} className='addressBox'>
                                <div> {val.name} <button className='btn' onClick={() => openBox()}><MoreVertIcon /></button> </div>
                                <p> {val.address} </p>
                                <section> <span>Mobile </span> : {val.mobile} </section>
                            </div>
                        );
                    })}

                    <Link to="/profile/address/addAddress"> <Button variant='contained' id='but1'>Add New</Button> </Link>

                    {show ? <div id='cover'>
                        <div id='optBox'>
                            <Button variant='outlined' className='btn3' onClick={() => { setShow(false) }}>Make Default</Button>
                            <Button variant='outlined' className='btn4' onClick={() => { navigate("/profile/address/editAddress") }}>Edit</Button>
                            <Button variant='outlined' className='btn5' onClick={() => { setShow(false) }}>Delete</Button>
                        </div>
                    </div> : null}

                </div>
            </div>
        </>
    )
}

export default Address