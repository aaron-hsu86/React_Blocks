import React from 'react'
import './styles.css'

const Main = (props) => {
    console.log(props)

    return (
        <div className='main'>
            {props.children}
        </div>
    )
}

export default Main