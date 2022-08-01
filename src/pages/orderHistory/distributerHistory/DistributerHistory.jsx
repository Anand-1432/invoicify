import React from 'react'
import './distributerHistory.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import OrderBoxes from '../../../components/orderBoxes/OrderBoxes';

const DistributerHistory = () => {
    return (
        <>
            <div className='main'>
                <div className='distributerHistory'>

                    <div className='header'>
                        <Link to="/history" className='btn back'><ArrowBackIcon /></Link>
                        Order History
                    </div>

                    <div className='topBox'>Raj Traders <span>Approved</span> </div>

                     <div className='itemBox'>
                        <OrderBoxes/>
                        <OrderBoxes/>
                        <OrderBoxes/>
                        <OrderBoxes/>
                     </div>

                </div>
            </div>
        </>
    )
}

export default DistributerHistory