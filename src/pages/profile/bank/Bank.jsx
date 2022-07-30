import React from 'react'
import './bank.scss';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import { useState } from 'react';

const Bank = () => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const openBox = () => {
        setShow(true);
    }

    const Array = [
        {
            name: "Devraaj Kumar",
            account: "2323 1245 1243 234",
            ifsc: "UNI013A2324",
            bank: "Union Bank of India"
        },
    ]

    return (
        <>
            <div className='main'>
                <div className='bank'>

                    <div className='header'>
                        <Link to="/profile" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                        Bank
                    </div>

                    {Array.map((val, index) => {
                        return (
                            <div key={index} className='addressBox'>
                                <div className='d1'>{val.name} <button className='btn' onClick={() => openBox()}><MoreVertIcon /></button> </div>
                                <p> <span> Account No. </span> : {val.account} </p>
                                <section> <span> IFSC Code </span> : {val.ifsc} </section>
                                <div className='d2'> <span> Bank Name </span> : {val.bank}</div>
                            </div>
                        );
                    })}

                    <Link to="/profile/bank/addbank"> <Button variant='contained' id='but1'>Add New</Button> </Link>

                    {show ? <div id='cover'>
                        <div id='optBox'>
                            <Button variant='outlined' className='btn3' onClick={() => { setShow(false) }}>Make Default</Button>
                            <Button variant='outlined' className='btn4' onClick={() => { navigate("/profile/bank/editbank") }}>Edit</Button>
                            <Button variant='outlined' className='btn5' onClick={() => { setShow(false) }}>Delete</Button>
                        </div>
                    </div> : null}

                </div>
            </div>
        </>
    )
}

export default Bank