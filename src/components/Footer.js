import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from '../Assets/Img/logo.png';
import img1 from '../Assets/Img/ins.png';
import img2 from '../Assets/Img/tw.png';
import img3 from '../Assets/Img/fb.png';

export default function Footer(){
    return (
        <div style={{ background: 'radial-gradient(ellipse at center, rgb(35,27,38) 0%, rgb(244,180,114) 50%, rgb(35,27,38) 99%)' }}> 
             <footer className="bg-dark text-white py-3" >
      <div className="container d-flex justify-content-center align-items-center" style={{ background: 'radial-gradient(ellipse at center, rgb(35,27,38) 0%, rgb(244,180,114) 50%, rgb(35,27,38) 99%)' }}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 col-lg-12">
          <img src={img}/>
          </div>
          <div className="col-md-6 col-lg-12 ">
            <p className="d-inline mr-3">Web3Makr    </p>
            <p className="d-inline mr-3">White Paper    </p>
            <p className="d-inline mr-3">Service    </p>
            <p className="d-inline mr-3">Tool    </p>
            <p className="d-inline mr-3">Contact us</p>
          </div>
        </div>
      </div>
    </footer>
            <footer className="bg-dark text-white py-3" style={{ background: 'radial-gradient(ellipse at center, rgb(35,27,38) 0%, rgb(244,180,114) 50%, rgb(35,27,38) 99%)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p> Copyright 2023 &copy; web3makr.com</p>
          </div>
          <div className="col-md-6 text-md-end">
          <img src={img1}/>
          <img src={img2}/>
          <img src={img3}/>
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}
