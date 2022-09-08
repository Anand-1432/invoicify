import React from 'react'
import './maxcard2.scss'

import cart21 from '../../../../assets/cart21.png'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';


const MaxCard = (props) => {
    return (
        <>
            <div className='cardCon2'>
                <div className='cardBox2'>
                    <img src={props.img} alt="" />

                    <div className='logo2' style={{ color: props.color1 }}><DirectionsBikeIcon style={{ fontSize: "50px" }} /></div>

                    <div className='shop2' style={{ color: props.color2 }}> {props.data.business} </div>

                    <div style={{ color: props.color3 }}>
                        <div className='name2'> {props.data.name} </div>

                        <div className='phone2'> {props.data.mobile1} | {props.data.mobile2}</div>

                        <div className='email2'> {props.data.email} </div>

                        <div className='web'> {props.data.web} </div>

                        <div className='address2'>
                            {props.data.address}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MaxCard