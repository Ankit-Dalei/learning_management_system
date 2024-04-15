import React from "react";
// import "./card.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import footer from "./footer";
const State = () => {
  return (
    <div className="container-fluid p-0 m-0 overflow-auto bg-primary" style={{height:'100vh',width:'100%'}}>
      <div className="sticky-top">
        {/* <Navbar/> */}
      </div>
      <div className="bg-warning p-0 m-0 d-flex justify-content-center align-items-center" style={{height:'100%',width:'100%'}}>
      
      <div className="row">
        <div className="col-md-3">
          <div className="card">
  <img src="" className="card-img-top" alt="..." style={{width:'18rem'}}/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
        <div className="col-md-3">
          <div className="card" >
  <img src="" className="card-img-top" alt="..." style={{width:'18rem'}}/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
        <div className="col-md-3">
          <div className="card" >
  <img src="" className="card-img-top" alt="..." style={{width:'18rem'}}/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
      </div>

      </div>
      <div className=" bg-danger fixed-bottom">
hii
      </div>
    </div>
  );
};

export default State;
