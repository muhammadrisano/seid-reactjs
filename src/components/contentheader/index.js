import React from 'react';
import './contentheader.css';

const ContentHeader =()=>{
  return(
    <div className="contentheader">
      <div className="container">
        <div className="content-header">
          <h1 className="text-orange text-center">Menghubungkan kamu</h1>
          <h1 className="text-center">dengan berbagai</h1>
          <h1 className="text-orange text-center">pengalaman baru</h1>
          <img src={require('../../assets/img/content-header-icon.svg')} alt=""/>
          <div className="box-text">
          <p>Part time job, sampai dengan sekedar berbuat baik menjadi relawan di program sosial</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentHeader;