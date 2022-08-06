import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './history.scss'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EqualizerIcon from '@material-ui/icons/Equalizer';

import mix2 from "../../assets/mix2.png"
import { Button } from '@material-ui/core';

const History = () => {

    const navigate = useNavigate();

    const Array = [
        { name: "Raj Traders", img: mix2, items: "4", value: "6,598.00", date: "24 June 2022", status: "approved" },
        { name: "Raj Traders", img: mix2, items: "4", value: "6,598.00", date: "24 June 2022", status: "pending" },
        { name: "Raj Traders", img: mix2, items: "4", value: "6,598.00", date: "24 June 2022", status: "approved" },
        { name: "Raj Traders", img: mix2, items: "4", value: "6,598.00", date: "24 June 2022", status: "pending" },
        { name: "Raj Traders", img: mix2, items: "4", value: "6,598.00", date: "24 June 2022", status: "denied" },
        { name: "Raj Traders", img: mix2, items: "4", value: "6,598.00", date: "24 June 2022", status: "approved" },
        { name: "Raj Traders", img: mix2, items: "4", value: "6,598.00", date: "24 June 2022", status: "denied" },
        { name: "Raj Traders", img: mix2, items: "4", value: "6,598.00", date: "24 June 2022", status: "denied" },
    ]

    const sendData = () => {
        navigate("/history/distributer");
    }

    const showFilter = () => {
        document.getElementById("cover3").style.display = "block";
        document.getElementById("filter").style.bottom = "0px";
    }
    const showTime = () => {
        document.getElementById("cover3").style.display = "block";
        document.getElementById("period").style.bottom = "0px";
    }
    const hideFilter = () => {
        document.getElementById("cover3").style.display = "none";
        document.getElementById("filter").style.bottom = "-250px";
        document.getElementById("period").style.bottom = "-250px";
    }


    return (
        <>
            <div className='main'>
                <div className='history'>

                    <div className='header'>
                        <Link to="/dashBoard" className='btn back'><ArrowBackIcon /></Link>
                        Order History
                    </div>

                    <div className='opt'>
                        <div id='d4' onClick={showFilter}><section><span><EqualizerIcon fontSize='small' /></span> Sort </section></div>
                        <div id='d5' onClick={showTime}> <section> <span><AccessTimeIcon fontSize='small' /></span> Time </section></div>
                    </div>

                    <div className='inner'>
                        {Array.map((val, index) => {

                            return (

                                <div className='historyBox' key={index} onClick={sendData}>

                                    <div className='image'> <img src={val.img} alt="" /> </div>
                                    <div className='text'>
                                        <div> {val.name} </div>
                                        <span> {val.items} Items</span>

                                        {val.status === "approved" ? <section id="s1"> Approved </section> : null}
                                        {val.status === "denied" ? <section id="s2"> Denied </section> : null}
                                        {val.status === "pending" ? <section id="s3"> Pending </section> : null}

                                    </div>
                                    <div className='price'>
                                        <div> {val.date} </div>
                                        <span>Total Value</span>
                                        <section> {val.value}/-</section>
                                    </div>

                                </div>

                            );
                        })}
                    </div>


                    <div id='cover3' onClick={hideFilter}></div>
                    <div id='filter'>
                        <div>Select Filter</div>
                        <Button variant='outlined' className='bt'>All Orders</Button>
                        <Button variant='outlined' className='bt'>Approved</Button>
                        <Button variant='outlined' className='bt'>Denied</Button>
                    </div>

                    <div id='period'>
                        <div>Select Period</div>
                        <Button variant='outlined' className='bt'>Last 30 Days</Button>
                        <Button variant='outlined' className='bt'>2022</Button>
                        <Button variant='outlined' className='bt'>2021</Button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default History