import React from 'react';

const cart = (props) => {
    const cart = props.cart;
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalSalary = totalSalary + player.salary;
    }

    let addedPlayer = [];
    for (let i = 0; i < cart.length; i++) {
        const ListedPlayer = cart[i];
        addedPlayer = ListedPlayer.name;
    }
    return (
        <div>
           <h5>Added Player: {addedPlayer}</h5>
           <h5>Total Player in Cart: {cart.length}</h5> 
           <h5>Total Player Salary : ${totalSalary}</h5>
        </div>
    );
};

export default cart;