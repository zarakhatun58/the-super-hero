import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const { id, img, name, phone, country, money, department } = props.doctor || {};
    return (
        <div className="all-doctors">
            <div className="doctors-details">
                <img src={img} alt="" />
                <h2 className="name">{name} </h2>
                <h3 style={{ color: 'blue' }}> Id:{id}</h3>
                <h5 style={{ color: 'purple' }}> Country:{country}</h5>
                <h5> Phone:+{phone} </h5>
                <h3 style={{ color: 'darkred' }}> Money:${money}</h3>
                <h4> Department:{department}</h4>
                <button onClick={() => props.addCartHandler(props.doctor)} type="button" className="add-btn"> <i class="fas fa-shopping-cart"></i> Add Money </button>

                <div className="icons">
                    <i class="fab fa-facebook" style={{ marginRight: "10px" }}></i>
                    <i class="fab fa-instagram" style={{ marginRight: "10px" }}></i>
                    <i class="fab fa-linkedin" style={{ marginRight: "10px" }}></i>
                    <i class="fab fa-twitter"></i>

                </div>

            </div>
        </div >
    );
};

export default Doctor;