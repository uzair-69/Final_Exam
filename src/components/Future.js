import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from '../Assets/Img/i1.png';
import img2 from '../Assets/Img/i2.png';
import img3 from '../Assets/Img/i3.png';
import img4 from '../Assets/Img/i4.png';
import img5 from '../Assets/Img/i5.png';
import img6 from '../Assets/Img/i6.png';
export default function Future() {
    return (
        <>
         <div className="container-fluid d-flex align-items-center justify-content-center" style={{ background: 'radial-gradient(ellipse at center, rgb(35,27,38) 0%, rgb(244,180,114) 50%, rgb(35,27,38) 99%)' }}>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 my-4">
                <h1>The Future of Web3 NoCode</h1>
                <p>Web3Makr allows you to incorporate top ranked blockchain platforms into your work through the drag and drop feature.</p>
               </div>
            </div>
        </div>

        <div className="container-fluid" style={{ background: 'radial-gradient(ellipse at center, rgb(35,27,38) 0%, rgb(244,180,114) 50%, rgb(35,27,38) 99%)' }}>
            <div className="row  d-flex align-items-center justify-content-center">
                <div className="col-lg-3 col-md-12 col-sm-12 my-4" style={{color:"white", marginBottom: '20px' }}>
                       <h2>Multichain</h2>
                       <h2>Dashboard</h2>
                       <h2>Tool</h2>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 my-4">
                       <div className="container-fluid" style={{ background: 'radial-gradient(ellipse at center, rgb(35,27,38) 0%, rgb(244,180,114) 50%, rgb(35,27,38) 99%)' }}>
                       <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                            <img src={img1} style={{weigth:"300px", height:'300px'}}/>
                            <img src={img2} style={{weigth:"300px", height:'300px'}}/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                            <img src={img3} style={{weigth:"300px", height:'300px'}}/>
                            <img src={img4} style={{weigth:"300px", height:'300px'}}/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                            <img src={img5} style={{weigth:"300px", height:'300px'}}/>
                            <img src={img6} style={{weigth:"400px", height:'300px'}}/>
                            </div>
                        </div>
                        </div>
               </div>
               <div className="col-lg-5 col-md-12 col-sm-12 my-4">
              
               </div>
            </div>
        </div>
        </>
    );
    }