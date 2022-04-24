import React from "react";
import { useNavigate } from "react-router-dom";
import "./back.scss";

function Back() {
     const navigate = useNavigate();
     const gotoBack = () => {
          navigate(-1);
     };
     return (
          <div>
               <button className="button back-btn" onClick={gotoBack}>
                    <i className="fa fa-arrow-left"></i> Back
               </button>
          </div>
     );
}

export default Back;
