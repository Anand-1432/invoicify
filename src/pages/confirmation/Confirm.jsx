import React from 'react'
import './confirm.scss'

import { Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

import img from '../../assets/owen.png'
import audio from '../../audio/s1.mp3'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckIcon from '@material-ui/icons/Check';
import { useState } from 'react';
import n4 from '../../assets/n4.gif';


const Confirm = () => {

    const navigate = useNavigate();
    const [play] = useSound(audio);
    const [notify, setNotify] = useState(false);

    if(notify){
        play();
    }


    const goBack = () => {
        navigate(-1);
    }


    const data = {
        name: "Microwave",
        brand: "Philips",
        model: "full model name",
        img: img,
        bestPrice: "4,236",
        amt: "4,999",
        customer: "Mr. Rajesh Kumar",
        productName: "Phillips Mocrowave Neo Series 244 ",
        purchase: "02/12/2021",
        warranty: "02/12/2022",
        shop: "A-one Electronics",
        gst: "18",
        imei: "1242 -4235-1325-3523",

    };

    const sendData = () => {
        navigate('/sales/product_data', { state: { data } });
    }


    const [progress, setProgress] = useState(0);

    if (progress == 100) {
        setTimeout(() => {setNotify(true)}, 1000);
    }

    const swiper = (e) => {
        const val = e.target.value;
        const text = document.getElementById("text");
        text.style.left = `${val / 1.525}%`;
        setProgress(val);

        const inner = document.getElementById("inner");
        const content = document.getElementById("content");
        const swiper = document.getElementById("swiper");

        if (val > 50) {
            text.style.color = "green";
            inner.style.backgroundColor = "#01B574";
            swiper.style.borderColor = "#C6C6C6"
            content.style.right = "110px";
            content.innerHTML = "Confirming...";

        } else {
            text.style.color = "#0F55A7";
            inner.style.backgroundColor = "#0F55A7";
            swiper.style.borderColor = "#6B8BAF"
            content.style.right = "40px";
            content.innerHTML = "Slide to confirm";
        }


    }

    return (
        <>
            <div className='main'>
                <div className='confirm'>

                    <button className='btn' onClick={goBack}><ArrowBackIcon fontSize='large' /></button>

                    <div className='imgCon'><img src={img} alt="" /></div>

                    <div className='head1'>
                        <h4>{data.name}</h4>
                        <div>{data.brand}</div>
                    </div>

                    <div className='top'>
                        <div className='d1'>
                            <div className='c1'>Buyer’s Name</div>
                            <div className='c2'>{data.customer}</div>
                        </div>
                        <div className='d2'>
                            <div className='c1'>Date</div>
                            <div className='c2'>{data.purchase}</div>
                        </div>
                    </div>


                    <table>
                        <tr>
                            <td className='tp'>Prduct Name</td>
                            <td className='bt'> {data.productName}  </td>
                        </tr>
                        <tr>
                            <td className='tp'>Base Price</td>
                            <td className='bt'> {data.bestPrice}/-</td>
                        </tr>
                        <tr>
                            <td className='tp'>GST {data.gst}%</td>
                            <td className='bt'>963/-</td>
                        </tr>
                    </table>

                    <div className='bottom'>
                        <div id='b1'>Total Price</div>
                        <div id='b2'> {data.amt}/-</div>
                    </div>


                    <div className='sliderBox'>
                        <div id='inner'>
                            <div id='text'> {(progress < 50) ? <ArrowForwardIcon /> : <CheckIcon />}</div>
                            <input type="range" min="0" max="100" id="swiper" value={progress} onChange={swiper} />
                            <div id="content">Slide to confirm</div>
                        </div>
                    </div>

                    {notify ?
                        <div className='notify'>
                            <img src={n4} alt="" />
                            <div id='text'>Warranty added <br /> successfully</div>
                            <div className='btBox'>
                                <Button variant='contained' id="bt" onClick={sendData}>Done</Button>
                            </div>
                        </div> : null}

                </div>
            </div>
        </>
    )
}

export default Confirm