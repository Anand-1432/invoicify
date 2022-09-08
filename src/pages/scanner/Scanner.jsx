import React, { useState, useEffect, useRef } from 'react'
import './scanner.scss'
import QrScanner from 'react-qr-scanner'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FlashOffIcon from '@material-ui/icons/FlashOff';

import img from '../../assets/scanner.gif'
import { useNavigate } from 'react-router-dom';

import { QrReader } from "@blackbox-vision/react-qr-reader";
import { useTorchLight } from "@blackbox-vision/use-torch-light";


const Scanner = () => {

    const navigate = useNavigate();

    const ref = useRef(null);
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const ref1 = useRef(null);
    const [size, setSize] = useState("");



    useEffect(() => {
        setWidth(ref.current.offsetWidth);
        setHeight(ref.current.offsetHeight);
        setSize(ref1.current.offsetWidth);
    }, []);

    const handleScan = (data) => {
        if (data) {
            navigate("/confirmation");
        }
    }
    const handleError = (err) => {
        console.error(err);
    }

    const previewStyle = {
        height: height,
        width: width,
        objectFit: 'fill'
    }

    const previewStyle1 = {
        height: 850,
        width: 850,
        marginLeft: "-280px",
        objectFit: 'fill'
    }

    const goback = () => {
        navigate(-1);
    }

    const streamRef = useRef(null);
    const [data, setData] = useState(null);

    const [on, toggle] = useTorchLight(streamRef.current, {
        debug: true,
        vibrate: 200
    });




    return (
        <>
            <div className='main' ref={ref1}>
                <div className='scannerStyle' ref={ref}>

                    {size > 500 ? <QrScanner
                        style={previewStyle}
                        onError={handleError}
                        onScan={handleScan}
                        facingMode='rear'
                    />
                        :
                        <QrReader
                            facingMode="environment"
                            key="environment"
                            constraints={{ facingMode: 'environment' }}
                            onLoad={({ stream }) => (streamRef.current = stream)}
                            onScan={(data) => { handleScan(data); setData(data) }}
                            onError={handleError}
                            style={previewStyle1}
                        />
                    }

                    <button className='btn btn1' onClick={goback}><ArrowBackIcon /></button>


                    <button className='btn btn2' onClick={toggle}> {on ? <FlashOffIcon /> : <FlashOnIcon />}</button>


                    <div className='blur'>

                        <div className='mainBox'>
                            <div className='scanBox'>
                                <img src={img} alt="" />
                            </div>

                            <p>Scanner QR code to add warranty <br />
                                spot code to connect
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Scanner