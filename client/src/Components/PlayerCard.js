import React, { Component } from 'react'

export default class PlayerCard extends Component {

    render() {
        return (
            <div>
                <h2>Name:{this.props.name}</h2>
                <h4>Country:{this.props.country}</h4>
                <p>Google searches:{this.props.searches}</p>
            </div>
        )
    }
}
