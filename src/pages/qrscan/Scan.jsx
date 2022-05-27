import React, { useState } from 'react'
import './scan.scss'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import img from "../../assets/scanner2.png"
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const Scan = () => {

    const [data, setData] = useState("");


    return (
        <>
            <div className='main'>
                <div className='scan'>
                    <div className='header'>
                        <Link to="/" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
                    </div>
                    <p className='heanding'>Scan QR on Product</p>

                    {/* <div className='qrBox'>
                        
                        <img className='scanImg' src={img} alt="" />
                    </div> */}

                    <BarcodeScannerComponent
                        width={300}
                        height={300}
                        onUpdate={(err, result) => {
                            if (result) setData(result.text);
                            else setData("Not Found");
                        }}
                    />


                    <p className='instruction'>Align QR inside square</p>
                    <p className='result'>{data}</p>
                    <button className='btn manually'>Enter Details Manually</button>

                </div>
            </div>
        </>
    )
}

export default Scan