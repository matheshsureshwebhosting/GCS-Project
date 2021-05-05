import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class Facilities extends React.Component {
    render() {
        return (
            <div>
                <div class="facilities">
                    <nav class="navbar navbar-default navbar-fixed-top" id="navbar">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </button>
                                <Link to="/home"><img src="assets/img/enkey.jpg" class="img navbar-img"/></Link>
                            </div>
                            <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav navbar-right" >
                            <li><Link to="/home">Home</Link></li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">About Us<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu">
                                <li><Link to="/employees">Employees</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/history">History and facts</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/certificate">Certificates</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/management">Management team</Link></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Products/Capabilities<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu">
                                <li><Link to="/alumini">Aluminium die cast part</Link></li>
                                <li class="divider"></li>
                                <li><Link to="zinc">Zinc die cast parts</Link></li>
                                <li class="divider"></li>
                                <li><Link to="ferrous">Ferrous precision machined parts</Link></li>
                                <li class="divider"></li>
                                <li><Link to="precision">Precision machined parts</Link></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Facilities/Machinery/Equipment<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu">
                                <li><Link to="/die">Die casting</Link></li>
                                <li class="divider"></li>
                                <li><Link to="machine">Machining</Link></li>
                                <li class="divider"></li>
                                <li><Link to="quality">Quality Management–System quality,<br/>Product quality,Process Quality</Link></li>
                                <li class="divider"></li>
                                <li><Link to="surface">Surface preparation & protection</Link></li>
                                <li class="divider"></li>
                                <li><Link to="supply">Supply chain management</Link></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Engineering capabilities<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu">
                                <li><Link to="/tool">Tool room</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/fixture">Fixture manufacturing</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/part">Part Assembly</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/flow">Flow simulation</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/production">Production oriented design</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/value">Value Engineering</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/pre">Pre-launch and prototype support</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/migration">Product migration</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/career">Careers</Link></li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Gallery<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu">
                                <li><Link to="/product">Product gallery</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/facilities">Facilities/Machinery gallery</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact&Enquiry</Link></li>
                            </ul>
                        </div>
                        </div>
                    </nav>

                    {/* <!-- NAVBAR END -->

                    <!------ BANNER START------>
 */}
                    <div class="banner" data-parallax="scroll" data-image-src="assets/img/metal.jpg">
                    <div class="container-fluid">
                        <h2>PRODUCT GALLERY</h2>
                        <h6>We specialise in the manufacture of precision components in any material from stainless steel to plastic</h6>
                    </div>
                    </div>

                   {/*  <!-- BANNER END -->

                    <!-- SECTION 1 START --> */}

                    <div class="back">
                    <div class="mainss">
                        <div class="top">CHOOSE THE</div>
                        <div class="heads">Facilities/Machinery gallery</div>
                        <div class="bottom">An original equipment manufacturer (OEM) traditionally is defined as a company goods</div>
                    </div>
                    <div class="container">
                        <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="imu1 v">
                            <h2> Cylinders</h2>
                        </div>
                        <div class="imu2 v">
                            <h2>Impellers</h2>
                        </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="imu3 v">
                            <h2>Fans</h2>
                        </div>
                        <div class="imu4 v">
                            <h2>Flanges</h2>
                        </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="imu5 v">
                            <h2>Horns</h2>
                        </div>
                        <div class="imu6 v">
                            <h2>Elbows</h2>
                        </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="imu7 v">
                            <h2>Support brackets</h2>
                        </div>
                        <div class="imu8 v">
                            <h2>Engine components</h2>
                        </div>
                        </div>
                    </div>
                    <center>
                    <button class="btn">View All</button>
                    </center>
                </div>

                   {/*  <!-- SECTION 1 END -->

                    <!------ SECTION 4 START ------>
 */}
                    <div class="section4" data-parallax="scroll" data-image-src="assets/img/parall.jpg">
                        <div class="container-fluid reveal">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div class="top">
                                        <h3><img src="assets/img/united-states.png" class="img-responsive"/> BELGIUM</h3>
                                        <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>Info@elcee.be</a>
                                        <p><i class="fa fa-phone" aria-hidden="true"></i>+32 51 33 77 33</p>
                                    </div>
                                    <div class="bottom">
                                        <h3><img src="assets/img/china.png" class="img-responsive"/> CHINA</h3>
                                        <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>Info@elcee.ch</a>
                                        <p><i class="fa fa-phone" aria-hidden="true"></i>+48 12 361 21 06</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div class="top">
                                        <h3><img src="assets/img/finland.png" class="img-responsive"/> FINLAND</h3>
                                        <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>Info@elcee.fl</a>
                                        <p><i class="fa fa-phone" aria-hidden="true"></i>+45 98 920 65 6</p>
                                    </div>
                                    <div class="bottom">
                                        <h3><img src="assets/img/germany.png" class="img-responsive"/> GERMANY</h3>
                                        <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>Info@elcee.ge</a>
                                        <p><i class="fa fa-phone" aria-hidden="true"></i>+41 62 788 50 90</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div class="top">
                                        <h3><img src="assets/img/greece.png" class="img-responsive"/> GREECE</h3>
                                        <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>Info@elcee.gr</a>
                                        <p><i class="fa fa-phone" aria-hidden="true"></i>+358 40 028 86</p>
                                    </div>
                                    <div class="bottom">
                                        <h3><img src="assets/img/russia.png" class="img-responsive"/> RUSSIA</h3>
                                        <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>Info@elcee.ru</a>
                                        <p><i class="fa fa-phone" aria-hidden="true"></i>+46 85 197 06 55</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div class="top">
                                        <h3><img src="assets/img/south-korea.png" class="img-responsive"/> SOUTH KOREA</h3>
                                        <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>Info@elcee.sk</a>
                                        <p><i class="fa fa-phone" aria-hidden="true"></i>+49 93 21 26 29 10</p>
                                    </div>
                                    <div class="bottom">
                                        <h3><img src="assets/img/thailand.png" class="img-responsive"/> THAILAND</h3>
                                        <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>Info@elcee.tl</a>
                                        <p><i class="fa fa-phone" aria-hidden="true"></i>+31 78 654 47 77</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                   {/*  <!------ SECTION 4 END ------>

                        <!------ FOOTER START ------> */}

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

                    {/* <!------ FOOTER END ------>  */}
                </div>
            </div>
        )
    }
}
export default Facilities;