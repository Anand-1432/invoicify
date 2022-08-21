import React from 'react'
import './minicard2.scss'
import img from '../../../../assets/p2.png'

const MiniCard = (props) => {
    return (
        <>
            <div id="newCard2" style={props.state ? {backgroundColor:"#CFE5FF"} :  {backgroundColor:"white"} } onClick={props.fun}>
                <div className='innerCard'>
                    <img src={img} alt="" />
                </div>
                <section>Theme 2</section>
            </div>

        </>
    )
}

export default MiniCard