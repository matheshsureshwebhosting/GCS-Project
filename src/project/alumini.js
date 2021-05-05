import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class Alumini extends React.Component {
    render() {
        return (
            <div>
               <div class="aluminium">
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
                                <h2><i class="fa fa-info-circle" aria-hidden="true"></i>ABOUT US</h2>
                            </div>
                            <div class="body">
                                <div class="row">

                                    <div class="col-md-4">
                                        <div class="box reveal">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <div class="one"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></div>
                                                </div>
                                                <div class="col-md-10">
                                                    <h2>Specialisation</h2>
                                                    <p>Aluminium Components firm specialises in the productionof aluminium components , with the use of aluminium profiles, casts and aluminium plates.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box reveal">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <div class="one"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></div>
                                                </div>
                                                <div class="col-md-10">
                                                    <h2>Cooperation</h2>
                                                    <p>Through collaboration with the best aluminum extruders we would like to offer you the possibility of extrusion of aluminum profiles and their purchase in our company. We work with the foundry using pressure casting technology and casting parts made of aluminum alloys.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="box reveal">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <div class="one"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></div>
                                                </div>
                                                <div class="col-md-10">
                                                    <h2>Application</h2>
                                                    <p>Aluminium has a very wide rangeof applications because of its capability to be shaped, as well as its good thermal and electrical conductivity. Aluminium through its physical and mechanical properties is used in industries such as aerospace, automotive, construction, electronics.</p>
                                                </div>								
                                            </div>
                                        </div>
                                        <div class="box reveal">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <div class="one"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></div>
                                                </div>
                                                <div class="col-md-10">
                                                    <h2>Complexity</h2>
                                                    <p>Our offer is addressed to customers who are interested in their comprehensive service. Starting with the help in its design through the consulting service in its processing up to the production already finished components.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="box reveal">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <div class="one"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></div>
                                                </div>
                                                <div class="col-md-10">
                                                    <h2>Experience</h2>
                                                    <p>Our more than ten years of experience in the industry is the guarantee of professional service and complete professionalism with which we hope to convince you in the exercise of our offer.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box reveal">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <div class="one"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></div>
                                                </div>
                                                <div class="col-md-10">
                                                    <h2>Processing</h2>
                                                    <p>By surface (powder coating and anodising) and mechanical treatment, it represents almost an unlimited source of design components.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section2">
                        <div class="container">
                            <div class="head reveal">
                                <h2><i class="fa fa-file" aria-hidden="true"></i>OFFER</h2>
                            </div>

                            <div class="body reveal">
                                <div class="row">
                                    <div class="boxs">
                                        <div class="col-md-1">
                                            <button>01</button>
                                        </div>
                                        <div class="col-md-11">
                                            <div class="heads">
                                                <h3>CNC Machining</h3>
                                                <p>Production of components made of aluminum with drilling, milling, threading and turning on CNC machines.</p>
                                                <img src="assets/img/onei.jpg" class="img img-responsive"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="body reveal">
                                <div class="row">
                                    <div class="boxs">
                                        <div class="col-md-1">
                                            <button>02</button>
                                        </div>
                                        <div class="col-md-11">
                                            <div class="heads">
                                                <h3>Cutting on CNC machine</h3>
                                                <p>Precision cutting profiles on CNC machine, cutting format sheet, cutting on the 2 head saw.</p>
                                                <img src="assets/img/onei2.jpg" class="img img-responsive"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="body reveal">
                                <div class="row">
                                    <div class="boxs">
                                        <div class="col-md-1">
                                            <button>03</button>
                                        </div>
                                        <div class="col-md-11">
                                            <div class="heads">
                                                <h3>Bending, pressing, stamping</h3>
                                                <p>Bending sheet on rolling mill, bending aluminum three-step bending maschine, ironing with the use of a hydraulic press, punching .</p>
                                                <img src="assets/img/onei5.jpg" class="img img-responsive"/>
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

export default Alumini;