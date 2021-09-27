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

/*


<ul style={{ display: "inline", listStyleType: "none" }}>
    <li> <img src={img} alt=" " style={{ width: "50px", borderRadius: "50%" }} /></li>
    <li> {name}</li>
    <li><button
        onClick={() => props.removeDoctor(props.index)}
        className="btn-2"
    > <i class="fas fa-window-close"></i>

    </button> </li>

</ul>
*/


/*
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ActorShow = (props) => {
  const { name, img } = props.carts;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={img}
            className="img-fluid cart_img rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex justify-content-between">
            <p className="card-title m-0"> {name}</p>
            <button
              onClick={() => props.removeActor(props.index)}
              className="btn btn-sm btn-danger"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorShow;

*/

