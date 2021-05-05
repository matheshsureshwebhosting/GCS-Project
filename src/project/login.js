import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class Login extends React.Component {
    render() {
        return (
            <div>
                <div class="login">
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
                                        <form class="register-form" action="">
                                            <div class="particular">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                        <label for="email">Email Address</label>
                                                        <input type="email" class="form-control" id="email" name="email"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                        <label for="pwd">Password</label>
                                                        <input type="password" class="form-control eye" id="pwd" name="pwd"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-right">
                                                <a>Forget Password ?</a>
                                            </div>
                                            
                                            <button type="submit" class="btn btn-block">Login</button>
                                        </form>
                                        <div class="footer">
                                            <p>Don't have an account? <Link to="/register">Register</Link></p>
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
export default Login;