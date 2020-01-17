import React, { Component } from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard'

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
        return (
            <div>

                {this.state.players.map((player)=>{
                    return(

                            <PlayerCard
                            name={player.name}
                            country={player.country}
                            searches={player.searches}/>
                    )
                })}
              
            </div>
        )
    }
}
