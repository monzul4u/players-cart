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
    <div className="App-item">
      <div className="player-class">
      <h2>Total Number of Player:{player.length}</h2>
      <h2>Player Added: {cart.length}</h2>
       <Cart cart={cart}></Cart>
      { 
      player.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
    }
      </div>
      
      
    </div>
  );
}

export default App;
