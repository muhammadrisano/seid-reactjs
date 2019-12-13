import React from 'react';
import './content.css';
const ContentCostumer =()=>{
  return(
    <div className="content-costumer">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h3><span>SEID</span> menghubungkan kamu dengan anak muda pekerja paruh waktu, hingga relawan yang akan membantu projek sosialmu.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="box-content-customer">
              <img src={require('../../../../assets/img/customer1.svg')} alt="customer1"/>
              <p>Kita semua setuju anak muda adalah masa depan kita. Dengan percaya pada mereka, kita mencoba membangun masyarakat yang lebih baik.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="box-content-customer">
              <img src={require('../../../../assets/img/customer2.svg')} alt="customer2"/>
              <p>Tidak hanya anak muda yang penuh energi, telent Seid juga memiliki Hard Skill & Soft Skill yang baik untuk menyelesaikan tugas yang kamu berikan</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="box-content-customer">
              <img src={require('../../../../assets/img/custumer3.svg')} alt="customer3" />
              <p>Setiap talent telah diverifikasi dengan baik oleh Seid secara personal, dan kami mengenal setiap individu yang  kami rekomendasikan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentCostumer;