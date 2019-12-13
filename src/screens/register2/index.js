import React, {Component} from 'react';
import '../register2/register.css';

class Register extends Component{
  constructor() {
    super();
    this.state = {
      name: 'ddf',
      phone: '',
      medsos: '',
      usermedsos: '',
      tgl_lahir: '',
      school: '',
      how_seid: '',
      where_seid: '',
      bidang1:'',
      bidang2:'',
      volunteer: '',
      bidang_parttime: 1,
      minat_volunteer: '',
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit() {
    let data = {
      name: this.state.name,
      phone: this.state.phone,
      medsos: this.state.medsos,
      usermedsos: this.state.usermedsos,
      tgl_lahir: this.state.tgl_lahir,
      school : this.state.school,
      how_seid : this.state.how_seid,
      where_seid: this.state.where_seid,
      bidang1: this.state.bidang1,
      bidang2: this.state.bidang2,
      minat_volunteer: this.state.minat_volunteer,
      volunteer: this.state.volunteer,
    }
    console.log(data);
  }
  handleBtnAddBidang(e) {
    e.preventDefault()
    this.setState({
      bidang_parttime: 2,
    })
  }
  render() {
    return (
      <div className="register">
        <div className="layout-img">
          <div className="box-img">
          <img src={require('../../../src/assets/img/costumer.svg')} alt=""/>
          </div>
          <p className="text-center mt-3">Menjadi Perubahan yang lebih baik</p>
        </div>
        <div className="form">
          <a href="/">
          <img src={require('../../assets/img/new logo-02.svg')} alt="logo-seid" className="logo-form-seid" />
          </a>
          <form action="">
          <h3 className="text-center p-4">
            Form Talent Seid
            </h3>
            <div className="form-group">
              <label htmlFor="name">Nama Kamu <span>*</span></label>
              <input type="text" className="form-control" name="name" id="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">No. Handphone <span>*</span></label>
              <input type="text" className="form-control" name="phone" id="phone" value={this.state.phone} onChange={(e)=>this.handleChange(e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="medsos">Media Sosial Kamu <span>*</span></label>
              <select name="medsos" id="medsos" className="form-control" onChange={(e)=>this.handleChange(e)}>
                <option value="">- Pilih -</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Twitter">Twitter</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="usermedsos">Username / Email Sosial <span>*</span></label>
              <input type="text" className="form-control" name="usermedsos" id="usermedsos" onChange={(e)=>this.handleChange(e)} value={this.state.usermedsos}/>
            </div>
            <div className="form-group">
              <label htmlFor="tgl_lahir">Tanggal Lahir <span>*</span></label>
              <input type="date" id="tgl_lahir" name="tgl_lahir" className="form-control" onChange={(e)=>this.handleChange(e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="school">Nama Sekolah / Universitas <span>*</span></label>
              <input type="text" id="school" name="school" className="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.school}/>
            </div>
            <div className="form-group">
              <label htmlFor="how_seid">Apa yang kamu ketahui tentang Seid<span>*</span></label>
              <input type="text" id="how_seid" name="how_seid" className="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.how_seid}/>
            </div>
            <div className="form-group">
              <label htmlFor="where_seid">Kenal Seid darimana ?<span>*</span></label>
              <select name="where_seid" id="where_seid" className="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.where_seid}>
                <option value="">- Pilih -</option>
                <option value="website">Website</option>
                <option value="workshop">Workshop</option>
                <option value="teman">teman</option>
                <option value="sekolah">Sekolah / Kampus</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bidang">Bidang Part time yang kamu minati (Max 2) <span>*</span></label>
              <div className="container-bidang">
                <label htmlFor="bidang1">Bidang 1</label>
                <select name="bidang1" id="bidang1" className="form-control" onChange={(e)=>this.handleChange(e)}>
                  <option value="">- Pilih -</option>
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
                  <option value="Accounting">Accounting</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Video Editor">Video Editor</option>
                  <option value="Fotografer">Fotografer</option>
                  <option value="Lainnya">lainnya</option>
                </select>
                {this.state.bidang_parttime === 1 ?
                <div className="box-btn-addbidang">
                  <button type="button" onClick={(e)=> this.handleBtnAddBidang(e)}>Tambah Bidang Part Time baru</button>
                </div>
                :
                <div></div>
                }
              </div>   
              {this.state.bidang_parttime === 2 ? 
              <div className="container-bidang">
                <label htmlFor="bidang2">Bidang 2</label>
                <select name="bidang2" id="bidang2" className="form-control" onChange={(e) => this.handleChange(e)}>
                  <option value="">- Pilih -</option>
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
                  <option value="Accounting">Accounting</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Video Editor">Video Editor</option>
                  <option value="Fotografer">Fotografer</option>
                  <option value="Lainnya">lainnya</option>
                </select>
              </div>
              : <div></div>}
            </div>
            <div className="form-group">
              <label htmlFor="minat_volunteer">Apakah kamu berminat untuk menjadi Volunteer ? <span>*</span></label>
              <select name="minat_volunteer" id="minat_volunteer" className="form-control" onChange={(e)=>this.handleChange(e)}>
                <option value="">- Pilih -</option>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bidang_volunter">Jika ya bidang volunteer apa yang kamu minati ?<span>*</span></label>
              <select name="volunteer" id="volunteer" className="form-control" onChange={(e)=>this.handleChange(e)}>
                  <option value="">- Pilih -</option>
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
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-warning" onClick={()=>this.handleSubmit()}>Simpan</button>
            </div>
          </form>
        </div>        
      </div>
    )
  }
}

export default Register;