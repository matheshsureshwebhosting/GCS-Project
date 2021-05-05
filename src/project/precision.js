import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class Precision extends React.Component {
    render() {
        return (
            <div>
                <div class="precision">
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
                                <h2>OUR CAPABILITIES - PRECISION MACHINED PARTS</h2>
                                <p>Deccan Engineering Works specialize in the development, creation, and manufacturing of <span>Precision Machined Parts</span>
                                     for the multiple industries like Precision Frames, Mirror Finish Stainless Steel Panels, Plastics Fabrication and
                                      Complex Mechanical Assembly.</p>
                                      <p>We offer a range of Functional Prototypes Manufacturing that using high quality raw material. We offer our assortments of Precision
                                           Turned Components in customized range as specified by our clients to meet their different requirements. Moreover, we make our
                                            Precision Machined Parts available at the pocket friendly price.</p>
                            </div>
                            <div class="body">
                                <div class="heads">
                                    <h2>PRECISION MACHINE PARTS MANUFACTURERS & SUPPLIERS</h2>
                                </div>
                                <div class="box">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="sec">
                                                <div id="container">
                                                    <img src="assets/img/pre.jpg" class="img img-responsive" />
                                                </div>
                                                <h2>Derlin Cam</h2>
                                                <h3><span>Material: </span> Derlin</h3>
                                                <h3><span>Client: </span>Kabra Extrusiontechnik ltd.(Daman)</h3>
                                            </div>
                                            <div class="sec">
                                                <div id="container">
                                                    <img src="assets/img/pre3.jpg" class="img img-responsive" />
                                                </div>
                                                <h2>Entry Bush</h2>
                                                <h3><span>Material: </span> SS-304</h3>
                                                <h3><span>Client: </span>Kabra Extrusiontechnik ltd.(Daman)</h3>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="sec">
                                                <div id="container">
                                                    <img src="assets/img/pre1.jpg" class="img img-responsive" />
                                                </div>
                                                <h2>Cylindrical Cam</h2>
                                                <h3><span>Material: </span> EN-41 B</h3>
                                                <h3><span>Client: </span>Kabra Extrusiontechnik ltd.(Daman)</h3>
                                            </div>
                                            <div class="sec">
                                                <div id="container">
                                                    <img src="assets/img/pre4.jpg" class="img img-responsive" />
                                                </div>
                                                <h2>Double Groove Scroll Cam</h2>
                                                <h3><span>Material: </span> En-41 B</h3>
                                                <h3><span>Client: </span>Kabra Extrusiontechnik ltd.(Daman)</h3>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="sec">
                                                <div id="container">
                                                    <img src="assets/img/pre2.jpg" class="img img-responsive" />
                                                </div>
                                                <h2>Bottom Cavity Extension</h2>
                                                <h3><span>Material: </span> EN-31</h3>
                                                <h3><span>Client: </span>Kabra Extrusiontechnik ltd.(Daman)</h3>
                                            </div>
                                            <div class="sec">
                                                <div id="container">
                                                    <img src="assets/img/pre5.jpg" class="img img-responsive" />
                                                </div>
                                                <h2>Stainer Basket</h2>
                                                <h3><span>Material: </span> En-410</h3>
                                                <h3><span>Client: </span>Kabra Extrusiontechnik ltd.(Daman)</h3>
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
export default Precision;