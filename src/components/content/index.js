import React from 'react'
import './content.css';

const Content =()=>{
  return(
   <div className="content">
     <div className="container">
     <h1 className="text-center mb-5">Part time job</h1>
     <div className="row">
       <div className="col-md-4">
         <div className="box-image">
          <img src={require('../../assets/img/cooking.svg')} alt="" srcset="" className="icon-img" />
         </div>
          <hr className="garis" />
          <div className="number">
          </div>
          <p>
          Sesuai minat, ketertarian dan kapasitas kamu
           </p>
         </div>
         <div className="col-md-4">
            <div className="box-image">
          <img src={require('../../assets/img/woment.svg')} alt="" srcset="" className="icon-img" />
          </div>
          <hr className="garis" />
          <div className="number">
          </div>
          <p>
           flexsibel karena kamu bisa pilih pekerjaan dimana saja, dan kapan saja
           </p>
         </div>
         <div className="col-md-4">
            <div className="box-image">
          <img src={require('../../assets/img/money.svg')} alt="" srcset="" className="icon-img" />
            </div>
          <hr className="garis" />
          <div className="number">
          </div>
          <p>
           Sistem yang aman & Pembayaran yang tepat waktu
           </p>
         </div>
     </div>
      </div>
   </div>
  )
}
export default Content