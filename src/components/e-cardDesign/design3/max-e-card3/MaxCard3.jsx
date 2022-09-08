import React from 'react'
import './maxcard3.scss'

import cart31 from '../../../../assets/cart31.png'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';


const MaxCard = (props) => {
    return (
        <>
            <div className='cardCon3'>
                <div className='cardBox3'>
                    <img src={props.img} alt="" />


                    <div className='logo3' style={{ color: props.color1 }}><DirectionsBikeIcon style={{ fontSize: "50px" }} /></div>

                    <div className='shop3' style={{ color: props.color2 }}> {props.data.business} </div>

                    <div style={{ color: props.color3 }}>
                        <div className='name3'> {props.data.name} </div>

                        <div className='phone3'> {props.data.mobile2} | {props.data.mobile1}</div>

                        <div className='email3'> {props.data.email} </div>

                        <div className='web'> {props.data.web} </div>

                        <div className='address3'>
                            {props.data.address}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MaxCard