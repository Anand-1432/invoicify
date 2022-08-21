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

                    <div className='shop3' style={{ color: props.color2 }}>A One <br /> Electronics</div>

                    <div style={{ color: props.color3 }}>
                        <div className='name3'>Devraaj Kumar</div>

                        <div className='phone3'>1234567890 | 1234567890</div>

                        <div className='email3'>hellogallery@gmail.com</div>

                        <div className='web'>www.google.com</div>

                        <div className='address3'>
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