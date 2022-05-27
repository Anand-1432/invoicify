import React, { useState } from 'react'
import './scan.scss'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { QrReader } from 'react-qr-reader';
import img from "../../assets/scanner2.png"

const Scan = () => {

    const [data, setData] = useState("");

    const videoStyle = {
        width: '350px',
        borderRadius: '10px',
        // marginLeft: "-47px"
    }

    const handleError = (err) => {
        console.log(err);
    }

    const handleScan = async (result) => {

        try {

            if (result) {
                console.log(result.text);
                setData(result.text);
            }

        } catch (error) {
            console.log(error);
        }

    }



    return (
        <>
            <div className='main'>
                <div className='scan'>
                    <div className='header'>
                        <Link to="/" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                    </div>
                    <p className='heanding'>Scan QR on Product</p>

                    <div className='qrBox'>
                        <QrReader
                            key="environment"
                            constraints={{ facingMode: 'environment' }}
                            onError={handleError}
                            onResult={handleScan}
                            videoContainerStyle={videoStyle}
                        />
                        <img className='scanImg' src={img} alt="" />
                    </div>
                    <p className='instruction'>Align QR inside square</p>
                    <p className='result'>{data}</p>
                    <button className='btn manually'>Enter Details Manually</button>

                </div>
            </div>
        </>
    )
}

export default Scan