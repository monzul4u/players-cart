import logo from './logo.svg';
import './App.css';
import playerData from './Data/Data.json';
import { useEffect, useState } from 'react';
import Player from './components/Player';
import Cart from './components/PCart/Cart';

function App() {
  const [player, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setPlayer(playerData);
  },[])

  const handleAddPlayer = (player) => {
    const newPCart = [...cart, player];
    setCart(newPCart);
  }
  

  return (
    <div className="container">
      <div className="player-class">
      <h3>World Most Famous Ten Player</h3>
      <h5>Total Number of Player:{player.length}</h5>
       <Cart cart={cart}></Cart>
      { 
      player.map(player => <Player player={player} key={player.id} handleAddPlayer={handleAddPlayer}></Player>)
    }
      </div>
      
      
    </div>
  );
}

export default App;
