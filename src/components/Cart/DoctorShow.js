import React from 'react';

const DoctorShow = (props) => {
    const { name, img } = props.carts;
    return (
        <div>
            <div>
                <img src={img} alt="..." />
            </div>
            <div>
                <p> {name}</p>
                <button
                    onClick={() => props.removeActor(props.index)}
                    className=""
                > <i class="fas fa-window-close"></i>

                </button>
            </div>
        </div>
    );
};

export default DoctorShow;

