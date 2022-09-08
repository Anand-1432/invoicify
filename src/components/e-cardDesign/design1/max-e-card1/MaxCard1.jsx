import React from 'react'
import './maxcard1.scss'

import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

const MaxCard = (props) => {
    return (
        <>
            <div className='cardCon1'>
                <div className='cardBox1' style={{ color: props.color1 }}>
                    <img src={props.img} alt="" />

                    <div className='name1'> {props.data.name} </div>

                    <div className='phone1'>
                        {props.data.mobile1} <br />
                        {props.data.mobile2}
                    </div>

                    <div className='email1'>
                        {props.data.email} <br />
                        {props.data.web}
                    </div>

                    <div className='address1'>
                       {props.data.address}
                    </div>

                    <div style={{ color: props.color2 }}>

                        <div className='logo1'><DirectionsBikeIcon style={{ fontSize: "50px" }} /></div>

                        <div className='shop1'>
                            {props.data.business} <br />
                           <span> Best Electronics Shop </span>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default MaxCard