import React from 'react'
import './maxcard1.scss'

import cart11 from '../../../../assets/cart11.png'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

const MaxCard = (props) => {
    return (
        <>
            <div className='cardCon1'>
                <div className='cardBox1' style={{ color: props.color1 }}>
                    <img src={props.img} alt="" />

                    <div className='name1'>Devraaj Kumar</div>

                    <div className='phone1'>
                        +123-456-7890 <br />
                        +123-456-7890
                    </div>

                    <div className='email1'>
                        hellotrader@gmail.com <br />
                        www.sptarder.com
                    </div>

                    <div className='address1'>
                        207/8 Mahankal colony <br />
                        Dewas, (M.P.), 455001
                    </div>

                    <div style={{ color: props.color2 }}>

                        <div className='logo1'><DirectionsBikeIcon style={{ fontSize: "50px" }} /></div>

                        <div className='shop1'>
                            A One Electronics
                        </div>

                        <div className='des1'>
                            Best Electronics <br /> Shop
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MaxCard