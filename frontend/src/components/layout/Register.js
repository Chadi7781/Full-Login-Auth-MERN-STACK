import React, { Component,useState } from 'react'

import { BrowserRouter, Route, Link } from 'react-router-dom';



class Register extends Component {

    constructor(){
        super();
        this.state =  {
            name:"",
            email:"",
            password:"",
            password2:"",
            errors:{},
            colorBorder: "",
            removeOutline:""
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

    removeOutline() {
        this.setState({
            outline:"none"
        })

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

                <div class="max-w-md mx-auto bg-white shadow-xl rounded my-8">
        <div class="text-center text-gray-600 py-4">Sign in with</div>
        <div class="flex justify-center mb-10">
            <button class="flex items-center bg-gray-100 shadow-md border border-gray-200 rounded px-4 py-2 mr-2">
            <svg  class="fill-current text-gray-600 w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
                <div class="text-indigo-700">Facebook</div>
            </button>
            <button class="flex items-center bg-gray-100 shadow-md border border-gray-200 rounded px-4 py-2 mr-2">
            <svg class ="fill-current text-gray-500 w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>                <div class="text-indigo-700" >GitHub</div>
            </button>
            <button class="flex items-center bg-gray-100 shadow-md border border-gray-200 rounded px-4 py-2 mr-2">
            <svg class="fill-current text-gray-500 w-8 h-8 mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.001 16.917c.552 0 .999-.448.999-.999v-7.919c0-.551-.448-.999-.999-.999h-12.002c-.551 0-.999.448-.999.999v7.919c0 .551.448.999.999.999h12.002zm-6.001-3.55l-5.45-3.782-.011 6.748h10.899v-6.748l-5.438 3.782zm5.174-5.784c-1.527 1.064-5.174 3.634-5.174 3.634l-5.203-3.634h10.377z"/></svg>                
            <div class="text-indigo-700">Google</div>
            </button>
        </div>
        <div class="bg-white-200 pt-8 pb-16">
            <div class="text-center text-gray-600 mb-6">Or sign in with Email & Password</div>
            <div class="w-4/5 mx-auto">
                <div class="flex items-center bg-white rounded shadow-md mb-4"
                  style={{   border: `1px solid ${this.state.colorBorder}`
                }}>
                
                    <span class="px-3">
                        <svg class="fill-current text-black-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
                    </span>
                    <input class="w-full h-12 focus:outline-none" type="text" name="username" placeholder="Enter your username"
                    style={{
                        borderBottom:"none"
                    }}
                    onChange={this.removeOutline}
                    />

                </div>
                <div class="flex items-center bg-white rounded shadow-md mb-4"  
                  style={{   border: `1px solid ${this.state.colorBorder}`
                }}>
            
                    <span class="px-3">
                        <svg class="fill-current text-black-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/></svg>
                    </span>
                    <input
                         style={{
                            borderBottom:"none",
                               }}
                    class="w-full h-12 focus:outline-none" type="email" name="email" placeholder="Enter your email"/>
                </div>

                <div class="flex items-center bg-white rounded shadow-md mb-4"  
                  style={{   border: `1px solid ${this.state.colorBorder}`
                }}>
            
                    <span class="px-3">
                        <svg class="fill-current text-black-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/></svg>
                    </span>
                    <input
                         style={{
                            borderBottom:"none",
                               }}
                    class="w-full h-12 focus:outline-none" type="password" name="password" placeholder="Enter your password"/>
                </div>

                <div class="flex items-center bg-white rounded shadow-md mb-4"  
                  style={{   border: `1px solid ${this.state.colorBorder}`
                }}>
            
                    <span class="px-3">
                        <svg class="fill-current text-black-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/></svg>
                    </span>
                    <input
                         style={{
                            borderBottom:"none",
                               }}
                    class="w-full h-12 focus:outline-none" type="password" name="password" placeholder="Confirm your password"/>
                </div>

               <div class="mb-4">
                    <input type="checkbox" name="remember" class="mr-1" style={{color:"red"}}/>
                    <label for="remember" class="text-sm text-gray-600">Remember me</label>
                </div>
                <button class="flex items-center btn btn-large waves-effect waves-light hoverable blue accent-3" href="/register" style={{width: "140px",
                  margin: "0 auto",
                  display: "block",
                borderRadius: "3px", letterSpacing: "1.5px"}}>Register</button>     
                       </div>
        </div>
    </div>
        </div>



        );



    };





}


export default Register
