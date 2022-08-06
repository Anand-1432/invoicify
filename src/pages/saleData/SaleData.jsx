import React from 'react'
import './saleData.scss'

import { Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';

const SaleData = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const data = location.state.data;


    const goBack = () =>{
        navigate(-1);
    }
    
    return (
        <>
            <div className='main'>
                <div className='saleData'>

             <button className='btn' onClick={goBack}><ArrowBackIcon fontSize='large'/></button>

                    <div className='imgCon4'><img src={data.img} alt="" /></div>

                    <h4> {data.name} </h4>
                    <div className='brand'> {data.brand} </div>

                    <div className='gridBox'>
                        <div className='left'>
                            <section>Purchased On</section>
                            <div> {data.purchase} </div>
                        </div>
                        <div className='right'>
                            <section>Warranty Upto</section>
                            <div> {data.warranty} </div>
                        </div>
                    </div>

                    <div className='shop'> {data.shop} </div>
                    <hr />
                    <div className='more'>More Details</div>
                    <hr />

                    <table>
                        <tr>
                            <td className='top'>Buyer’s Name</td>
                            <td className='bottom'> {data.customer} </td>
                        </tr>
                        <tr>
                            <td className='top'>Prduct Name</td>
                            <td className='bottom'> {data.productName} </td>
                        </tr>
                        <tr>
                            <td className='top'>Product IMEI</td>
                            <td className='bottom'>{data.imei}</td>
                        </tr>
                        <tr>
                            <td className='top'>Base Price</td>
                            <td className='bottom'> {data.bestPrice}/-</td>
                        </tr>
                        <tr>
                            <td className='top'>GST {data.gst}%</td>
                            <td className='bottom'>963/-</td>
                        </tr>
                    </table>
                    <hr />
                    <div className='total'>Total Price <span> {data.amt}/-</span></div>
                    <hr />

                    <div className='btnBox'>
                        <Button variant='contained' className='bt'>Share Reciept</Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SaleData