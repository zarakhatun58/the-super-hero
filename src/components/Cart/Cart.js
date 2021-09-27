import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const doctor of cart) {
        total = total + doctor.money;
    }
    return (
        <div>
            <h2> Fund Summery:{ }</h2>
            <h3><i class="fas fa-user"></i>Total Members:{props.cart.length}</h3>

            <h4> Total Money:{total}</h4>

        </div>
    );
};

export default Cart;