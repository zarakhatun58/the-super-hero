import React from 'react';
import './DoctorShow.css'

const DoctorShow = (props) => {
    const { name, img } = props.carts;
    return (
        <div style={{ display: "flex", }} className="">

            <div>
                <img src={img} alt=" " style={{ width: "50px", borderRadius: "50%", marginRight: "30px", marginLeft: "30px", marginTop: "10px" }} />
            </div>
            <div>
                <h4> {name}</h4>

            </div>





        </div>
    );
};

export default DoctorShow;

