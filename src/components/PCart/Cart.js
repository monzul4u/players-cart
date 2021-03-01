import React from 'react';

const cart = (props) => {
    const cart = props.cart;
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalSalary = totalSalary + player.salary;
    }
    return (
        <div>
           <h2>Total Player in cart: {cart.length}</h2> 
           <h3>Total Player Salary : {totalSalary}</h3>
        </div>
    );
};

export default cart;