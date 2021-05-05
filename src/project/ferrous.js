import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class Ferrous extends React.Component {
    render() {
        return (
            <div>
                <div class="ferrous">
                  <div class="banner">
                        <div class="container">
                            <img src="assets/img/alu.png"/>
                            <ul class="list-inline">
                                <li><Link to="/home">HOME</Link></li>
                                <li><Link to="/alumini">ALUMINIUM</Link></li>
                                <li><Link to="/employees">EMPLOYEES</Link></li>
                                <li><Link to="/contact">CONTUCT</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div class="section1">
                        <div class="container">
                            <div class="head">
                                <h2><i class="fa fa-info-circle" aria-hidden="true"></i>Ferrous precision machined parts</h2>
                            </div>
                            <div class="body">
                                <ul class="nav nav-tabs nav-justified">
                                    <li><a data-toggle="tab" href="#home">stainless steel precision</a></li>
                                    <li class="active"><a data-toggle="tab" href="#menu1">ball screw precision</a></li>
                                    <li><a data-toggle="tab" href="#menu2">Super Springs Stainless</a></li>
                                </ul>

                                <div class="tab-content">
                                    <div id="home" class="tab-pane fade">
                                        <div class="box">
                                            <div class="row">
                                                <div class="col-md-4 person">
                                                    <img src="assets/img/st.jpg" class="img img-responsive" />
                                                    <h2>presision machined component</h2>
                                                </div>
                                                <div class="col-md-4 person">
                                                    <img src="assets/img/st1.jpg" class="img img-responsive" />
                                                    <h2>steel presision component</h2>
                                                </div>
                                                <div class="col-md-4 person">
                                                    <img src="assets/img/st2.jpg" class="img img-responsive" />
                                                    <h2>presision turned component</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="menu1" class="tab-pane fade in active">
                                    <div class="box">
                                            <div class="row">
                                                <div class="col-md-4 person">
                                                    <img src="assets/img/bal.jpg" class="img img-responsive" />
                                                    <h2>brash sheet metal</h2>
                                                </div>
                                                <div class="col-md-4 person">
                                                    <img src="assets/img/bal1.png" class="img img-responsive" />
                                                    <h2>polished stain less</h2>
                                                </div>
                                                <div class="col-md-4 person">
                                                    <img src="assets/img/bal2.jpg" class="img img-responsive" />
                                                    <h2>presision sheet component</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="menu2" class="tab-pane fade">
                                    <div class="box">
                                            <div class="row">
                                                <div class="col-md-4 person">
                                                    <img src="assets/img/su.jpg" class="img img-responsive" />
                                                    <h2>sheet melt component</h2>
                                                </div>
                                                <div class="col-md-4 person">
                                                    <img src="assets/img/su1.jpg" class="img img-responsive" />
                                                    <h2>flat strip spring</h2>
                                                </div>
                                                <div class="col-md-4 person">
                                                    <img src="assets/img/su3.jpg" class="img img-responsive" />
                                                    <h2>steel melt component</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                

                    {/* <!------ FOOTER START ------> */}

                    <div class="footer">
                            <div class="row">
                                <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                    <h3 class="first-heading">QUICK VIEW</h3>
                                    <ul class="list-unstyled">
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>About Us</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Capabilities</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Certification</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Solution to Customers</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Contuct Us</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                    <h3 class="second-heading">PRODUCTS</h3>
                                    <ul class="list-unstyled">
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Aluminium Pressure Die Casting</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Components</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Aluminium Gravity Die Casting</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Components</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Cast Iron and Nodular Iron</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                    <h3 class="third-heading">MACHINERY</h3>
                                    <ul class="list-unstyled">
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Pressure Die Casting Facilities</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Gravity Die Casting Facilities</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Testing and Measuring Facilities</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Machining Facilities</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Finishing Facilities</a></li>
                                        <li><a href=""><i class="fa fa-caret-right" aria-hidden="true"></i>Leak Test Facilities</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div class="four">
                                        <h3 class="fourth-heading">GET IN TOUCH</h3>
                                        <ul class="list-unstyled">
                                            <li><p>Any questions?We wil be glad to serve<br/>you by meeting your requirements and<br/>challenges at any geographical location<br/>in the world.</p></li>
                                            <li><textarea rows="4" cols="37"></textarea></li>
                                            <li>
                                                <ul class="list-inline">
                                                    <li><button><i class="fa fa-facebook-official" aria-hidden="true"></i></button></li>
                                                    <li><button><i class="fa fa-youtube-play" aria-hidden="true"></i></button></li>
                                                    <li><button><i class="fa fa-linkedin-square" aria-hidden="true"></i></button></li>
                                                    <li><button><i class="fa fa-twitter-square" aria-hidden="true"></i></button></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>		
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div class="five">
                                        <h3 class="fifth-heading">NEWS LETTER</h3>
                                        <ul class="list-unstyled">
                                            <li class="border"><textarea rows="2" cols="28"></textarea></li>
                                            <li><button>Subscribe</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="copyrights">
                                <div class="container-fluid">
                                    
                                    <summary><b>ENKEY</b> &copy 2020  Deccan Engineering Works. All Rights Reserved. - Site By: <img src="assets/img/footer-enkey.png"/></summary>
                                </div>
                            </div>
                    </div>
               </div>
            </div>
        )
    }
}
export default Ferrous;