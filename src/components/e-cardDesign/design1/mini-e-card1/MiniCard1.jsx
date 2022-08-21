import React from 'react'
import './minicard1.scss'
import img from '../../../../assets/p1.png'
const MiniCard = (props) => {
    return (
        <>
            <div id="newCard1" style={props.state ? {backgroundColor:"#CFE5FF"} :  {backgroundColor:"white"} } onClick={props.fun}>
                <div className='innerCard'>
                    <img src={img} alt="" />
                </div>
                <section>Theme 1</section>
            </div>

        </>
    )
}

export default MiniCard