import React from 'react'
import './group.scss'
import { useNavigate } from 'react-router-dom'

const Group = () => {

    const navigate = useNavigate();

    const sendData = () =>{
       navigate("/cart/distributer");
    }

    return (
        <>
            <div className='groupPage' onClick={sendData}>
                <div className='name'>Raj Traders</div>
                <p>Shop No 23, 4th Block, Barkhera <br />
                    Bhopal MP <br />
                    +91 - 754 924 2346
                </p>
                <section>4 Items</section>
                <div className='value'>Total Value</div>
                <div className='amt'>6,598.00/-</div>
            </div>
        </>
    )
}

export default Group