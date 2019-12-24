import React, {Component} from 'react';
import './regcostum.css';
import { inputAngketCostumer } from '../../redux/actions/forms';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Link} from 'react-router-dom';

class Regcostum extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      institusi: '',
      what_seid: '',
      where_seid: '',
      butuhRelawan: '',
      with_relawan: '',
      butuhBidang1: '',
      butuhBidang2: '',
      butuhBidang3: '',
      jumlah_bidang: 1,
      lainnyabidang1: '',
      lainnyabidang2: '',
      lainnyabidang3: '',
      lainnyarelawan: '',
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }
  handleBtnAddBidang =()=>{
    this.setState({
      jumlah_bidang: this.state.jumlah_bidang + 1
    })
  }
  handleSubmit() {
    let data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      institusi: this.state.institusi,
      butuh_relawan: this.state.butuhRelawan === 'Lainnya' ? this.state.lainnyarelawan : this.state.butuhRelawan,
      with_relawan: this.state.with_relawan,
      bidang_butuh1: this.state.butuhBidang1 === 'Lainnya' ? this.state.lainnyabidang1 : this.state.butuhBidang1,
      bidang_butuh2: this.state.butuhBidang2 === 'Lainnya' ? this.state.lainnyabidang2 : this.state.butuhBidang2,
      bidang_butuh3: this.state.butuhBidang3 === 'Lainnya' ? this.state.lainnyabidang3 : this.state.butuhBidang3,
    }
    console.log(data);
    this.props.dispatch(inputAngketCostumer(data))
    .then((res)=>{
      confirmAlert({
        title: 'Terima Kasih',
        message: 'Informasi ini akan kami proses untuk perkembangan Seid yang lebih baik. Kamu akan mendapatkan notifikasi dengan segera begitu Seid siap untuk digunakan.',
        buttons: [
          {
            label: 'Oke',
            onClick: () => {
              this.props.history.push('/');
            }
          }
        ]
      });
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  render() {
    return (
      <div className="regcostums">
        <div className="layout-img">
          <div className="box-img">
            <img src={require('../../assets/img/customer1.svg')} alt="" srcset=""/>
          </div>
          <p className="content-register"><span>SEID</span> menghubungkan kamu dengan anak muda pekerja paruh waktu, hingga relawan yang akan membantu projek sosialmu.</p>
        </div>
        <div className="form">
          <Link to="/">
            <img src={require('../../assets/img/new logo-02.svg')} alt="logo-seid" className="logo-form-seid" />
          </Link>
          <h3 className="text-center p-4">Form Constumer Seid</h3>
          <form action="#">
            <div className="form-group">
              <label htmlFor="name">Nama Kamu</label>
              <input type="text" className="form-control" name="name" id="name" onChange={(e)=>this.handleChange(e)} value={this.state.name} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Alamat Email</label>
              <input type="text" className="form-control" name="email" id="email" onChange={(e)=>this.handleChange(e)} value={this.state.email}/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">No. Handphone</label>
              <input type="text" className="form-control" name="phone" id="phone" onChange={(e)=>this.handleChange(e)} value={this.state.phone} />
            </div>
            <div className="form-group">
              <label htmlFor="institusi">Nama Institusi / Organisasi</label>
              <input type="text" className="form-control" name="institusi" id="institusi" onChange={(e)=>this.handleChange(e)} value={this.state.institusi} />
            </div>
            <div className="form-group">
              <label htmlFor="butuh_bidang">Seid Talent di bidang apa yang kamu butuhkan ? (Max 3)</label>
              <div className="butuh-bidang">
                <label htmlFor="butuhBidang1">Butuh dibidang 1</label>
                <select name="butuhBidang1" id="butuhBidang1" className="form-control" onChange={(e)=>this.handleChange(e)}>
                  <option value="" selected disabled>- pilih -</option>
                  <option value="Guru Private Akademis (ex: Matematika, Sains, dll)">Guru Private Akademis (ex: Matematika, Sains, dll)</option>
                  <option value="Guru Private Minat Bakat (ex: Musik, Komputer, dll)">Guru Private Minat Bakat (ex: Musik, Komputer, dll)</option>
                  <option value="Guru Private Agama (ex: Iqra, Alqur'an, Sekolah Minggu, dll)">Guru Private Agama (ex: Iqra, Alqur'an, Sekolah Minggu, dll)</option>
                  <option value="Barista">Barista</option>
                  <option value="Waiter / Waitress">Waiter / Waitress</option>
                  <option value="Singer / Band (ex: Cafe, Wedding)">Singer / Band (ex: Cafe, Wedding)</option>
                  <option value="House Cleaning">House Cleaning</option>
                  <option value="Cuci Setrika">Cuci Setrika</option>
                  <option value="Supir (Travel / Pribadi)">Supir (Travel / Pribadi)</option>
                  <option value="Technician (Home Appliance & IT)">Technician (Home Appliance & IT)</option>
                  <option value="Otomotive">Otomotive</option>
                  <option value="Gardener">Gardener</option>
                  <option value="Home Cooker">Home Cooker</option>
                  <option value="Beauty Care (ex: Make up Artist)">Beauty Care (ex: Make up Artist)</option>
                  <option value="Hair stylish">Hair stylish</option>
                  <option value="Shoping Partner">Shoping Partner</option>
                  <option value="Koki Masak">Koki Masak</option>
                  <option value="Guide">Guide</option>
                  <option value="MC">MC</option>
                  <option value="Sales Promotion GIrl / Boy">Sales Promotion GIrl / Boy</option>
                  <option value="Social Media Promotion">Social Media Promotion</option>
                  <option value="Social Media Handling">Social Media Handling</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Video Editor">Video Editor</option>
                  <option value="Fotografer">Fotografer</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
                {this.state.butuhBidang1 ==='Lainnya'?
                <input type="text" className="form-control input-bidang" name="lainnyabidang1" placeholder="Silahkan isi lainnya disini" onChange={(e) => this.handleChange(e)} value={this.state.lainnyabidang1}/>
                :<div></div>
                }
                </div>
              {this.state.jumlah_bidang >=2 ?
              <div className="butuh-bidang">
                <label htmlFor="butuhBidang2">Butuh dibidang 2</label>
                <select name="butuhBidang2" id="butuhBidang2" className="form-control" onChange={(e) => this.handleChange(e)}>
                  <option value="" selected disabled>- pilih -</option>
                  <option value="Guru Private Akademis (ex: Matematika, Sains, dll)">Guru Private Akademis (ex: Matematika, Sains, dll)</option>
                  <option value="Guru Private Minat Bakat (ex: Musik, Komputer, dll)">Guru Private Minat Bakat (ex: Musik, Komputer, dll)</option>
                  <option value="Guru Private Agama (ex: Iqra, Alqur'an, Sekolah Minggu, dll)">Guru Private Agama (ex: Iqra, Alqur'an, Sekolah Minggu, dll)</option>
                  <option value="Barista">Barista</option>
                  <option value="Waiter / Waitress">Waiter / Waitress</option>
                  <option value="Singer / Band (ex: Cafe, Wedding)">Singer / Band (ex: Cafe, Wedding)</option>
                  <option value="House Cleaning">House Cleaning</option>
                  <option value="Cuci Setrika">Cuci Setrika</option>
                  <option value="Supir (Travel / Pribadi)">Supir (Travel / Pribadi)</option>
                  <option value="Technician (Home Appliance & IT)">Technician (Home Appliance & IT)</option>
                  <option value="Otomotive">Otomotive</option>
                  <option value="Gardener">Gardener</option>
                  <option value="Home Cooker">Home Cooker</option>
                  <option value="Beauty Care (ex: Make up Artist)">Beauty Care (ex: Make up Artist)</option>
                  <option value="Hair stylish">Hair stylish</option>
                  <option value="Shoping Partner">Shoping Partner</option>
                  <option value="Koki Masak">Koki Masak</option>
                  <option value="Guide">Guide</option>
                  <option value="MC">MC</option>
                  <option value="Sales Promotion GIrl / Boy">Sales Promotion GIrl / Boy</option>
                  <option value="Social Media Promotion">Social Media Promotion</option>
                  <option value="Social Media Handling">Social Media Handling</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Video Editor">Video Editor</option>
                  <option value="Fotografer">Fotografer</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
                  {this.state.butuhBidang2 === 'Lainnya'?
                    <input type="text" className="form-control input-bidang" placeholder="Silahkan isi lainnya disini" name="lainnyabidang2" onChange={(e) => this.handleChange(e)} value={this.state.lainnyabidang2} />
                  :<div></div>}
                </div>
              : <div></div>}
              {this.state.jumlah_bidang >=3 ?
              <div className="butuh-bidang">
                <label htmlFor="butuhBidang3">Butuh dibidang 3</label>
                <select name="butuhBidang3" id="butuhBidang3" className="form-control" onChange={(e) => this.handleChange(e)}>
                  <option value="" disabled selected>- pilih -</option>
                  <option value="Guru Private Akademis (ex: Matematika, Sains, dll)">Guru Private Akademis (ex: Matematika, Sains, dll)</option>
                  <option value="Guru Private Minat Bakat (ex: Musik, Komputer, dll)">Guru Private Minat Bakat (ex: Musik, Komputer, dll)</option>
                  <option value="Guru Private Agama (ex: Iqra, Alqur'an, Sekolah Minggu, dll)">Guru Private Agama (ex: Iqra, Alqur'an, Sekolah Minggu, dll)</option>
                  <option value="Barista">Barista</option>
                  <option value="Waiter / Waitress">Waiter / Waitress</option>
                  <option value="Singer / Band (ex: Cafe, Wedding)">Singer / Band (ex: Cafe, Wedding)</option>
                  <option value="House Cleaning">House Cleaning</option>
                  <option value="Cuci Setrika">Cuci Setrika</option>
                  <option value="Supir (Travel / Pribadi)">Supir (Travel / Pribadi)</option>
                  <option value="Technician (Home Appliance & IT)">Technician (Home Appliance & IT)</option>
                  <option value="Otomotive">Otomotive</option>
                  <option value="Gardener">Gardener</option>
                  <option value="Home Cooker">Home Cooker</option>
                  <option value="Beauty Care (ex: Make up Artist)">Beauty Care (ex: Make up Artist)</option>
                  <option value="Hair stylish">Hair stylish</option>
                  <option value="Shoping Partner">Shoping Partner</option>
                  <option value="Koki Masak">Koki Masak</option>
                  <option value="Guide">Guide</option>
                  <option value="MC">MC</option>
                  <option value="Sales Promotion GIrl / Boy">Sales Promotion GIrl / Boy</option>
                  <option value="Social Media Promotion">Social Media Promotion</option>
                  <option value="Social Media Handling">Social Media Handling</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Video Editor">Video Editor</option>
                  <option value="Fotografer">Fotografer</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
                  {this.state.butuhBidang3 === 'Lainnya'?
                    <input type="text" className="form-control input-bidang" name="lainnyabidang3" placeholder="Silahkan isi lainnya disini" onChange={(e) => this.handleChange(e)} value={this.state.lainnyabidang3} />
                  :<div></div>}
                  </div>
              : <div></div>}
            </div>
            {this.state.jumlah_bidang<3 ?
            <div className="box-btn-addbidang">
              <button type="button" onClick={(e) => this.handleBtnAddBidang(e)}>Tambah Bidang baru</button>
            </div>
            : <div></div>}
            <div className="form-group">
              <label htmlFor="with_relawan">Apakah kamu juga mencari Seid Talent untuk menjadi Relawan</label>
              <select name="with_relawan" id="with_relawan" className="form-control" onChange={(e)=>this.handleChange(e)}>
                <option value="" disabled selected>- pilih -</option>
                <option value="ya">ya</option>
                <option value="tidak">tidak</option>
              </select>
            </div>
            {this.state.with_relawan ==='ya'?
            <div className="form-group">
              <label htmlFor="butuhRelawan">Relawan di bidang apa yang kamu butuhkan ?</label>
              <select name="butuhRelawan" id="butuhRelawan" className="form-control" onChange={(e)=>this.handleChange(e)}>
                <option value="" selected disabled>- pilih -</option>
                <option value="Edukasi">Edukasi</option>
                <option value="Perlindungan Stawa & Konservasi">Perlindungan Stawa & Konservasi</option>
                <option value="Kesenian & Kebudayaan">Kesenian & Kebudayaan</option>
                <option value="Bencana Alam & Kemanusiaan">Bencana Alam & Kemanusiaan</option>
                <option value="Lingkungan">Lingkungan</option>
                <option value="Pemberdayaan Ekonomi">Pemberdayaan Ekonomi</option>
                <option value="Kesehatan">Kesehatan</option>
                <option value="Layanan Masyarakat">Layanan Masyarakat</option>
                <option value="Lainnya">Lainnya</option>
              </select>
                {this.state.butuhRelawan === 'Lainnya'?
                <input type="text" className="form-control input-bidang" name="lainnyarelawan" placeholder="Silahkan isi lainnya disini" onChange={(e) => this.handleChange(e)} value={this.state.lainnyarelawan}/>
                :<div></div>
                }
              </div>:<div></div>
            }
            <div className="form-group">
              <button type="button" onClick={()=>this.handleSubmit()} className="btn btn-warning">Simpan</button>
            </div>
          </form>
        </div>        
      </div>
    )
  }
}
const mapStateToProp = state => {
  return {
    formCostumer : state.forms.formCostumer,
  }
}
export default connect(mapStateToProp)(Regcostum);