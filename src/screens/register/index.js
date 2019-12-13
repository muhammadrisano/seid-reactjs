import React, {Component} from 'react'
import './register.css';
import {registerUser} from '../../redux/actions/users'
import { connect } from 'react-redux';
import swal from 'sweetalert'

class Register extends Component{
  constructor(){
    super();
    this.state={
      email:"",
      password:"",
      password2:"",
      fullname:"",
      phone:"",
      gender:"",
      birth_date:null
    }
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleRegister = async()=>{
    if(this.state.password !== this.state.password2){
      return null
    }
    await this.props.dispatch(registerUser({
      email: this.state.email,
      password: this.state.password,
      fullname: this.state.fullname,
      phone: this.state.phone,
      birth_date: this.state.birth_date,
      gender : this.state.gender,
    }))
      .then(() => {
        swal({
          title: "Register !",
          text: "Registe Success !!",
          icon: "success",
          button: "oke"
        });
      })
      .catch((err) => {
        console.log("error")
      })
  }
  render(){
    return(
      <div className="register">
        <div className="container">
        <div className="row">
          <div className="col-md-6">
          </div>
          <div className="col-md-6">
              <div className="box-register">
                <form action="">
                  <h1 className="text-center mb-5">Talent Registration</h1>
                  <div className="form-group">
                    <label for="inputAddress">Email</label>
                    <input type="email" class="form-control" id="inputAddress" name="email" onChange={this.handleChange} placeholder="Email" />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="password">Password</label>
                      <input type="password" className="form-control" id="password" name="password" onChange={this.handleChange} placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="password2">Repeat Password</label>
                      <input type="password" className="form-control" id="password2" name="password2" onChange={this.handleChange} placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="fullname">Full Name</label>
                    <input type="text" className="form-control" id="fullname" name="fullname" onChange={this.handleChange} placeholder="Full Name" />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="phone">No. Telephone</label>
                      <input type="text" className="form-control" id="phone" name="phone" onChange={this.handleChange} placeholder="No. Telephone"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="gender">Jenis Kelamin</label>
                      <select id="gender" class="form-control" name="gender" onChange={this.handleChange}>
                        <option selected>Pilih...</option>
                        <option value="laki-laki">Laki-laki</option>
                        <option value="perempuan">Prempuan</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="birth_date">Tanggal Lahir</label>
                      <input type="date" className="form-control" id="birth_date" name="birth_date" onChange={this.handleChange}/>
                    </div>
                  </div>
                  <a href="/login" className="mt-2">Kamu sudah punya akun ? Masuk Disini</a>
                  <button type="button" className="btn btn-daftar" onClick={this.handleRegister}>Daftar</button>
                </form>
              </div>
          </div>
        </div>
          
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {

  }
}
export default connect(mapStateToProps)(Register);