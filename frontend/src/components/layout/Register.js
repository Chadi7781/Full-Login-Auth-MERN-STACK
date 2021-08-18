import React, { Component } from 'react'

import { BrowserRouter, Route, Link } from 'react-router-dom';



class Register extends Component {

    constructor(){
        super();
        this.state =  {
            name:"",
            email:"",
            password:"",
            password2:"",
            errors:{}
        };
    }

    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });

    }

    onSubmit = e => {

        e.preventDefault();// e.preventDefault() to stop the page from reloading when the submit button is clicked

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,

        }



    }

    render() {

        return(

            <div className="container">
                <div className="row">
                <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
                </div>
            </div>
        </div>



        );



    };





}


export default Register
