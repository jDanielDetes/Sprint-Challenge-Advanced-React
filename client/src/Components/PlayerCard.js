import React, { Component } from 'react'
import { Card } from  'semantic-ui-react'

export default class PlayerCard extends Component {

    render() {
        return (
           
            <Card>
              <Card.Content>
                <Card.Header>{this.props.name}</Card.Header>
                <Card.Meta>{this.props.country}</Card.Meta>
                <Card.Description>
                  Google Searches:{this.props.searches}
                </Card.Description>
              </Card.Content>
            </Card>
        
        
        )
    }
}
