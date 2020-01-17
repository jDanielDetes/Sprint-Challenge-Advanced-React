import React, { Component } from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard'
import { Grid, Card } from 'semantic-ui-react'

export default class PlayerData extends Component {

    state={
        players:[]
    }

    componentDidMount=()=>{
        axios.get('http://localhost:5000/api/players')
        .then(res => {
            this.setState({players:res.data})
            console.log(res)
        })
        .catch(err=>console.log(err))
    }



    render() {
        let playerCardRow=this.state.players.map((player)=>{
        return (
            <div>

                            <PlayerCard
                            name={player.name}
                            country={player.country}
                            searches={player.searches}/>
                    </div>
        )})
              
                return(
                    <Card.Group itemsPerRow={3}>
                        {playerCardRow}
                        </Card.Group>
                )
            
        
    }
}
