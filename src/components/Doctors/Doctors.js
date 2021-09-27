import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setDoctors(data))

    }, []);

    const addCartHandler = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        console.log(cart);
        console.log("Product Added", product)
    }

    return (
        <div div className="doctors-container">
            <div className="big-container">

                {
                    doctors.map(doctor => <Doctor doctor={doctor}
                        key={doctor.name}
                        addCartHandler={addCartHandler}
                    > </Doctor>)
                }
            </div>
            <div className="small-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Doctors;







