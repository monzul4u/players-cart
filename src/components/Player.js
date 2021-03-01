import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faIdBadge } from '@fortawesome/free-solid-svg-icons'
import player from './Player.css'

const Player = (props) => {
    const {name,image,salary} = props.player;
    const stylePlayer = {
        border:'3px solid gray',
        margin: '20px',
        padding: '10px',
        backgroundColor: 'lightgray',
        borderRadius: '20px',
        color: 'goldenrod',
        boxShadow: '5px 5px 10px 10px'
        
        
    }

    const handleAddPlayer = props.handleAddPlayer;
    
    return (
        <div style={stylePlayer}>
           <h3>Player Name:{name} </h3>
           <img className="image" src={image} alt=""/>
           <p>Salary:${salary}</p>
           <br/>
           <button className="btn-success" onClick={() => handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faIdBadge} />Add Player</button>
        </div>
    );
};

export default Player;