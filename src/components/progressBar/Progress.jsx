import React, { useEffect, useState } from 'react'
import './progress.scss'

const Progress = (props) => {

    const [style, setStyle] = useState();

    useEffect(()=>{

        setTimeout(()=>{

            setStyle({
              width:`${props.data}%`,
              opacity:1
            })

        },500);

    },[props.data])

  return (
    <div id='progressBar' style={style}></div>
  )
}

export default Progress