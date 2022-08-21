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

                    <div className='shop2' style={{ color: props.color2 }}>A One <br /> Electronics</div>

                    <div style={{ color: props.color3 }}>
                        <div className='name2'>Devraaj Kumar</div>

                        <div className='phone2'>1234567890 | 1234567890</div>

                        <div className='email2'>hellogallery@gmail.com</div>

                        <div className='web'>www.google.com</div>

                        <div className='address2'>
                            A one electronics, gol bazar <br />
                            jabalpur, Madhya Pradesh <br />
                            455001
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MaxCard