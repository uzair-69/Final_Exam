import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from '../Assets/Img/Play 02.png';
import img1 from '../Assets/Img/Web.png';

export default function HeroSection() {
    return (
        <>
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{ background: 'radial-gradient(ellipse at center, rgb(31,129,170) 0%, rgb(177,116,54) 50%, rgb(40,27,43) 100%)' }}>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h1 className=" display-1 " style={{color:'white'}}><bold>Web3Makr Redefining</bold></h1>
                    <h2 className="display-1" style={{color:'white'}}><bold>How You Create</bold></h2>
                    <h3 className="my-4" style={{color:'white'}}>Unlock the blockchain potential to create Web3 Applications</h3>
                    
                    <button className="btn rounded-circle my-4" style={{ marginLeft: '300px' }}><img src={img}/> </button>

                </div>
                
            </div>

            
        </div>

        <div className="container-fluid d-flex align-items-center justify-content-center" style={{ background: 'radial-gradient(ellipse at center, rgb(31,129,170) 0%, rgb(177,116,54) 50%, rgb(40,27,43) 100%)' }}>
           

            <div className="row">
                
                <div className="col-lg-12 col-md-12 col-sm-12">
                <img src={img1} style={{height:"200"}}/> 
                </div>
            </div>
        </div>
        </>
    )
}