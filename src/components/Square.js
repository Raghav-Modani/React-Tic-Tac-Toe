import React from 'react'

const Square = (props) => {
    
    return (
        <div>
            <button className="block" onClick={() => { props.onClickboard() }}>{props.value}</button>
        </div>
    )
}

export default Square

