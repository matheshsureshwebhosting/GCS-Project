import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';
import {Validation} from "../validation";


class Register extends React.Component {
    user= async (event)=>{
        event.preventDefault()
        let data={
            firstname: event.target[0].value,
            lastname: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            confirmpassword: event.target[4].value
        }
        const isValid = await Validation.isValid(data)
        if (isValid) {
            alert("Submited..")
        }
        else{
            alert("Enter Valid Datas..")
        }
    }    

    render() {
        return (
            <div>
                <div class="register">
                    <div class="container-fluid">
                        <div class="body-background-img">
                            <div class="container">
                                <div class="register-background-color">
                                    <div class="register-padding">
                                        <div class="heading">
                                            <h3>enkey <span class="color">register</span></h3>
                                        </div>
                                        <div class="sub">
                                            <p>Access to our dashboard</p>
                                        </div>
                                        <form class="register-form" action="" onSubmit={this.user}>
                                            <div class="particular">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                        <label for="text">First Name</label>
                                                        <input type="text" class="form-control" id="email" name="email" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                        <label for="text">Last Name</label>
                                                        <input type="text" class="form-control" id="email" name="email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                        <label for="email">Email Address</label>
                                                        <input type="email" class="form-control" id="email" name="email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                        <label for="pwd">Password</label>
                                                        <input type="password" class="form-control" id="pwd" name="pwd" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                        <label for="pwd">Confirm Password</label>
                                                        <input type="password" class="form-control" id="email" name="email"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkboxs">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="checkbox">
                                                        <label><input type="checkbox" name="remember"/> <b>I agree to mentoring privacy policy & terms.</b></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <button type="submit" class="btn btn-block">Create Account</button>
                                        </form>
                                        <div class="footer">
                                            <p>Already have an account? <Link to="/login">Login</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;