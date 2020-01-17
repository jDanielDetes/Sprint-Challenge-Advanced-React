import React, { Component } from 'react'

export default class PlayerCard extends Component {
    render() {
        return (
            <div>
                <h2>Name:{this.props.name}</h2>
                <h3>Country:{this.props.country}</h3>
                <p>Google searches:{props.searches}</p>
            </div>
        )
    }
}
