import React from 'react'
import './group.scss'
import { useNavigate } from 'react-router-dom'

const Group = (props) => {

    const navigate = useNavigate();

    const sendData = () => {
        navigate(`/cart/distributer/${props.data.distributerName}`, { state: { data: props.data } });
    }

    return (
        <>
            <div className='groupPage' onClick={sendData}>
                <div className='name'> {props.data.distributerName} </div>
                <p>
                    {props.data.adrress}
                    <br />
                    {props.data.city}
                    <br />
                    {props.data.mobile}
                </p>
                <section> {props.data.quantity} Items</section>
                <div className='value'>Total Value</div>
                <div className='amt'> {props.data.total}/-</div>
            </div>
        </>
    )
}

export default Group