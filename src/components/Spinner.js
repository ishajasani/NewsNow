import React from "react";

export const Spinner = () =>{
    return (
      <div>
        <div className="d-flex justify-content-center my-3">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  export default Spinner;