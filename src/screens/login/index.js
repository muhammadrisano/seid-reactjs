import React, {Component} from 'react';
import './login.css';
import { connect } from 'react-redux';
import {loginUser} from '../../redux/actions/users'
import swal from 'sweetalert'

class Login extends Component{
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
      is_loading:false,
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handlerLogin = async()=>{
    console.log(this.state)
    await this.props.dispatch(loginUser({
      email: this.state.email,
      password: this.state.password
    }))
    .then((res)=>{
      localStorage.setItem('id_user', JSON.stringify(res.action.payload.data.result.id_user));
      localStorage.setItem('token', JSON.stringify(res.action.payload.data.result.token));
      swal({
        title: "Login !",
        text: "Login Success !!",
        icon: "success",
        button: "oke"
      });
    })
    .catch((err)=>{
      console.log("eorro")
    })
  }

render(){
  return(
    <div className="login">
      <div className="container">
        <div className="boxlogin">
          <h3>Selamat Bergabung</h3>
          <img src={require('../../assets/img/logo.svg')} alt="" srcset=""/>
          <p>Platform yang memberikan ruang untuk tumbuh, dan berkembang, serta membantu kamu untuk mandiri secara finansial</p>
          <div className="box-input">
            <form>
              <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={this.handleChange} placeholder="Email"/>
              </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={this.handleChange} placeholder="Password"/>
                </div>
                <a href="/register">Belum Punya Akun </a>
                    <button type="button" className="btn btn-seid btn-block mt-4" onClick={this.handlerLogin}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
}
const mapStateToProps = state=>{
  return{

  }
}
export default connect(mapStateToProps)(Login);