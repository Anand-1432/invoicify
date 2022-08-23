import React from 'react'
import './scan.scss'
import { Link, useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { QrReader } from 'react-qr-reader';
import img from "../../assets/scanner2.png"


const Scan = () => {

    const navigate = useNavigate();

    const videoStyle = {
        width: '350px',
        borderRadius: '10px',
        marginLeft: "-47px"
    }

    const handleError = (err) => {
        console.log(err);
    }

    const handleScan = async (result) => {

        try {

            if (result) {
                console.log(result.text);
                alert("Product added successfully!");
                navigate("/dashboard");
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
                        <Link to="/dashboard" className='btn back'><ArrowBackIcon fontSize='large' /></Link>
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
                    {/* <Link to='/add_details_manually' className='btn manually'>Enter Details Manually</Link> */}

                </div>
            </div>
        </>
    )
}

export default Scan