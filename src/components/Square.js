import React, { Component } from 'react'

class Square extends Component {
    render(props) {
        return (
            <div>
                <button className="block" onClick={() => {this.props.onClickboard()}}>{this.props.value}</button>
            </div>
        )
    }
}

export default Square
