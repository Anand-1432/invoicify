import React from 'react'
import './brandProgress.scss'

import Progress from '../progressBar/Progress'

const BrandProgress = (props) => {
    return (
        <>
            <div className='BrandData'>
                <div className='name'>{props.name}</div>
                <div className='value'>
                    <div className='progressCon'>
                        <Progress data={props.percent} />
                    </div>
                    <div className='percentage'>{props.percent}%</div>
                </div>
            </div>
        </>
    )
}

export default BrandProgress