import React from 'react'
import './minicard3.scss'
import img from '../../../../assets/cart32.png'

const MiniCard = (props) => {
    return (
        <>
            <div id="newCard3" style={props.state ? { backgroundColor: "#CFE5FF" } : { backgroundColor: "white" }} onClick={props.fun}>
                <div className='innerCard'>
                    <img src={img} alt="" />
                </div>
                <section>Theme 3</section>
            </div>

        </>
    )
}

export default MiniCard