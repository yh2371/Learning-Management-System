import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import '../semantic/dist/semantic.min.css'
import '../node_modules/antd/dist/antd.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import fetch from 'isomorphic-unfetch'
import Account from '../components/account'
import { login } from '../utils/auth'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { username: '', password: '' , error: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit (event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const url = this.props.apiUrl+"/api/login.js";
    console.log(url);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password})
      })
      console.log(response);
      if (response.ok) {
        const { token } = await response.json()
        login({ token })
      } else {
        console.log('Login failed.')
        let error = new Error(response.statusText)
        error.response = response
        return Promise.reject(error)
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )
      throw new Error(error)
    }
  }

  render() {
    let source;
    if (this.props.value == 0){
      source = "../static/materials/book.png";
    }
    else{
      source = "../static/materials/hat.png";
    }
    return(
      <div className="login">
        <div className="header">
          <img src={source}/>
          <label>Welcome back! Please login to your account!</label>
        </div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" value = {this.state.username} onChange={this.handleChange}/>
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <div className="field">
              <button className="forgotpassword" onClick={this.props.onClick}>Forgot Password?</button>
            </div>
            <button className="ui button" type="submit">Login</button>
            <button className="ui button" onClick={this.props.goback} goback={this.props.goback}>Back</button>
        </form>
        <style jsx>{`
          .header img{
            display: block;
            width: 3vw;
            margin: 10px 13.5vw;
          }
          label{
            display: block;
            font-family: avenir;
          }
          .header{
            text-align: center;
            color: gray;
            font-size: 20px;
            margin: 5vh 0;
          }
          .header label{
            opacity: 0.6;
          }
          .login{
            width:50vw;
            padding: 15vh 10vw;
          }
          .forgotpassword{
            border: none;
            background-color: #FAF4EF;
            font-family: avenir;
            font-weight: bolder;
            font-size: 14px;
            cursor: pointer;
          }
          .forgotpassword:hover{
            text-decoration: underline;
          }
          .button{
            margin: 20px 10vw 10px 10vw;
            font-family: avenir;
            width: 10vw;
            background-color: #43425D;
            color: white;
          }
          .button:hover{
            background-color: #9796AD;
          }
        `}</style>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {mode: 0};
  }
  handleClick(i){
    this.setState({mode: i});
    console.log("hi")
  }
  render() {
    const mode = this.state.mode;
    let page;
    if (mode == 0){
      page =
        <div>
          <p className = "welcome">Welcome</p>
          <FormButton value="0" onClick={() => this.handleClick(1)}/>
          <FormButton value="1" onClick={() => this.handleClick(2)}/>
          <FormButton value="2" onClick={() => this.handleClick(3)}/>
          <style jsx>{`
            .welcome{
              font-family: avenir;
              font-size: 30px;
              text-shadow: 2px 2px #9796AD;
              text-align: center;
              width: 100%;
              position: relative;
              top: 20vh;
              color: #43425D;
              display: block;
            }
          `}</style>
          </div>;
        }
      else if (mode == 1){
        page = <LoginForm apiUrl = {this.props.apiUrl} value={0} onClick={()=> this.handleClick(4)} goback={()=> this.handleClick(0)}/>;
      }
      else if (mode == 2){
        page = <LoginForm apiUrl = {this.props.apiUrl} value={1} onClick={()=> this.handleClick(4)} goback={()=> this.handleClick(0)}/>;
      }
      else if (mode == 3){
        page = <Register apiUrl = {this.props.apiUrl} goback={()=> this.handleClick(0)}/>;
      }
      else{
        page = <ForgotPassword apiUrl = {this.props.apiUrl} />;
      }
      return(
        <div>
        {page}
        </div>
      );
  }
}

class FormButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {mode : this.props.value, names: ["Student Login", "Instructor Login", "New User Registration"]}
  }
  render() {
    return (
      <button onClick ={this.props.onClick} >{this.state.names[this.state.mode]}
      <style jsx>{`
        button{
          display: block;
          margin: 5vh 0;
          position: relative;
          left: 17.5vw;
          right: 17.5vw;
          top: 25vh;
          width: 15vw;
          height: 50px;
          background-color: #43425D;
          color: white;
          box-shadow: 5px 5px #9796AD;
          border: none;
          font-size: 15px;
          font-family: avenir;
          cursor: pointer;
        }
        button:hover{
          background-color: white;
          color: #43425D;
          border: 2px solid #43425D;
        }
      `}</style>
      </button>
    );
  }
}

class ForgotPassword extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div className="login">
        <div className="header">
          <h1>Retrieve Password</h1>
          <label>Please enter your email to receive a password reset link.</label>
        </div>
        <form className="ui form">
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" />
          </div>
            <button className="ui button" type="submit">Send Request</button>
            <button className="ui button" onClick={this.props.goback}>Cancel</button>
        </form>
        <style jsx>{`
          label{
            display: block;
            font-family: avenir;
          }
          .header{
            text-align: center;
            color: gray;
            font-size: 15px;
            margin: 5vh 0;
          }
          .header label{
            opacity: 0.6;
          }
          .login{
            width:50vw;
            padding: 15vh 10vw;
          }
          .button{
            margin: 20px 10vw 10px 10vw;
            font-family: avenir;
            width: 10vw;
            background-color: #43425D;
            color: white;
          }
          .button:hover{
            background-color: #9796AD;
          }
        `}</style>
      </div>
    );
  }
}

class Register extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {first_name:"", last_name:"", email :"", username :"", password :"", confirm_password :""};
  }
  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  async handleSubmit(event){
    event.preventDefault();
    const firstname = this.state.first_name;
    const lastname = this.state.last_name;
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;
    const url = this.props.apiUrl+"/api/register.js";
    const confirmpassword = this.confirm_password;
    const mode = 0;
    console.log(url);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({firstname, lastname, email, username, password, confirmpassword, mode})
      })
      console.log(response);
      if (response.ok) {
        const { token } = await response.json()
        register({ token })
      } else {
        console.log('Registration failed.')
        let error = new Error(response.statusText)
        error.response = response
        return Promise.reject(error)
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )
      throw new Error(error)
    }
    if (this.state.first_name=="" || this.state.last_name=="" || this.state.email=="" || this.state.username=="" || this.state.password=="" || this.state.confirm_password==""){
      alert('Please fill out all required fields!')
    }
    else if (this.state.email.slice(-8,) != "@nyu.edu"){
      alert('Email must be a valid NYU email')
      this.setState({email: "", password:"", confirm_password:""});
    }
    else if ((this.state.password).length<8){
      alert('Invalid Password: ' + 'Please enter a password that is at least 8 characters');
      this.setState({password:"", confirm_password:""});
    }
    else if (!(this.state.password.match(this.state.confirm_password))){
      alert('Password entries do not match: ' + "Please re-enter your password");
      this.setState({password:"", confirm_password:""});
    }

      // The server is awake! React Router is used to either show the
      // <Landing /> component where the emails are collected or the <Confirm />
      // component where the emails are confirmed.
  }
  render() {
    return(
      <div className="login">
        <div className="header">
          <h1>Register</h1>
          <label>Please fill out the following information to create your account.</label>
        </div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>First Name</label>
            <input type="text" name="first_name" placeholder="First Name" onChange={this.handleChange} value={this.state.first_name}/>
          </div>
          <div className="field">
            <label>Last Name</label>
            <input type="text" name="last_name" placeholder="Last Name" onChange={this.handleChange} value={this.state.last_name}/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email: Must be a valid NYU email" onChange={this.handleChange} value={this.state.email}/>
          </div>
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input type="password" name="confirm_password" placeholder="Confirm Password" onChange={this.handleChange} value={this.state.confirm_password}/>
          </div>
          <button className="ui button" type="submit">Sign Up</button>
          <button className="ui button" onClick={this.props.goback} goback={this.props.goback}>Back</button>
        </form>
        <style jsx>{`
          h1, label{
            display: block;
            font-family: avenir;
          }
          .header{
            text-align: center;
            color: gray;
            font-size: 15px;
            margin: 2.5vh 0;
          }
          .header label{
            opacity: 0.6;
          }
          .login{
            width:50vw;
            padding: 6vh 10vw;
          }
          .button{
            margin: 20px 10vw 10px 10vw;
            font-family: avenir;
            width: 10vw;
            background-color: #43425D;
            color: white;
          }
          .button:hover{
            background-color: #9796AD;
          }
        `}</style>
      </div>
    );
  }
}

class Login extends React.Component{
  static getInitialProps ({ req }) {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'

    const apiUrl = process.browser
      ? `${protocol}://${window.location.host}`
      : `${protocol}://${req.headers.host}`
    return { apiUrl }
  }
  constructor(props){
      super(props)
  }
  render(){
    return(
      <div>
      <Head>
          <title>Welcome</title>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Head>
      <div className = "logo">
          <Link href="/"><img src="/static/materials/babel.png">
          </img></Link>
      </div>
      <div className = "form">
          <Form apiUrl = {this.props.apiUrl}/>
      </div>
      <style jsx>{`
          .logo{
            width: 50vw;
            height: 0;
            padding: 35vh 5vw;
            margin: 0px;
            position: absolute;
            top: 0;
            left: 0;
          }
          .logo img {
            width: 100%;
            padding: 0px 0px;
            cursor: pointer;
          }
          .form{
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            width: 50vw;
            height: 100vh;
            background-color: #FAF4EF;
          }
        `}</style>
      </div>
    )
  }
}

export default Login
