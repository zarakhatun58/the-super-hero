import React from 'react';
import DoctorShow from '../Cart/DoctorShow';

const Cart = (props) => {
    const { cart, removeDoctor } = props;

    // let total = 0;
    // for (const doctor of cart) {
    //     total = total + doctor.money;
    // }
    let totalMoney = 0;
    if (cart.length) {
        totalMoney += cart.reduce(
            (previus, current) => previus + current.money,
            0
        );
    }
    return (
        <div className=" ">
            <h2> Fund Summery{ }</h2>
            <h3><i class="fas fa-user"></i>Total Members:{props.cart.length}</h3>

            <h4> Total Money:{totalMoney} $</h4>
            <div className="single-section">
                {

                    cart.map((cart, index) => <DoctorShow carts={cart}
                        index={index}
                        key={Math.random()}
                        removeDoctor={removeDoctor}> </DoctorShow>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;


// import React from "react";
// import DoctorShow from "./DoctorShow";
// import "./Cart.css";
// const Cart = (props) => {
//     const { carts, removeDoctor } = props;
//     let totalMoney = 0;
//     if (carts.length) {
//         totalMoney += carts.reduce(
//             (previus, current) => previus + current.money,
//             0
//         );
//     }
//     return (
//         <div className="card">
//             <div className="card-body">
//                 <h4 className="card-title">
//                     Doctors:{props.carts.length}
//                 </h4>
//                 <h5 className="card-title">Total Cost : {totalMoney} $ </h5>
//                 {carts.map((cart, index) => (
//                     <DoctorShow
//                         carts={cart}
//                         index={index}
//                         key={Math.random()}
//                         removeDoctor={removeDoctor}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Cart;

