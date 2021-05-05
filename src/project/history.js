import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class History extends React.Component {
    render() {
        return (
            <div>
                <div class="history">
                    {/*  <!-- NAVBAR -->
 */}
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

                   {/*  <!-- NAVBAR END -->

                    <!------ SIDE MENU START ------> */}

                    <div class="icons" id="icons">
                        <a class="question" id="question" onclick="question()">Enquire Now<i class="fa fa-chevron-up" aria-hidden="true" id="up"></i></a>
                        <form>
                            <input type="text" placeholder="Your name*" name=""/><br/>
                            <input type="email" placeholder="Your e-mail*" name=""/><br/>
                            <input type="number" placeholder="Phone*" name=""/><br/>
                            <textarea rows="2" cols="20" placeholder="Message*"></textarea><br/>
                            <button class="btn">Submit</button>
                        </form>
                    </div>

                   {/*  <!------ SIDE MENU END ------>

                    <!-- BANNER --> */}

                    <div class="banner" data-parallax="scroll" data-image-src="assets/img/skult.png">
                        <ul class="breadcrumb">
                            <li class="one"><Link to="/home">Home</Link></li>
                            <li class="two"><Link to="/history">History & Facts</Link></li>
                        </ul>
                    </div>

                   {/*  <!-- BANNER END -->

                    <!-- SECTION 1 START --> */}
                    <div class="section1">
                        <div class="container">
                            <div class="head">
                                <h3>OUR SERVICES - CNC JOBWORKS INDIA</h3>
                            </div>
                            <div class="body">
                                <div class="container">
                                    <div class="copy">
                                        <div class="col-md-6">
                                            <img src="assets/img/history.png" class="img img-responsive" />
                                        </div>
                                        <div class="col-md-6">
                                            <h2>Enkey's Engineering Works</h2>
                                            <div class="borders">
                                                <p>Enkei Wheels (India) Limited was incorporated on<span> 30th  March, 2009.</span> It
                                                obtained a Certificate of 
                                                Commencement of Business on 29th  May 2009 Pursuant to the scheme of
                                                arrangement between </p>
                                                <p>Enkei Castalloy Limited and the Company, the wheel division of Enkei
                                                Castalloy Ltd was demerged  to Enkei Wheels (India) Limited. The
                                                scheme of arrangement between Enkei Castalloy Limited and Enkei
                                                Wheels (India) Limited has been approved  by the Honorable High Court
                                                on February 26, 2010</p>
                                            </div>                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="foot">
                                    <div class="row">
                                            <div class="col-md-2">
                                                <h1>01</h1>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="left">
                                                    <h2>CNC MILLING</h2>
                                                    <p><i class="fa fa-cog" aria-hidden="true"></i>We have 3 units of CNC Vertical Machining Centers (VMC)</p>
                                                    <p><i class="fa fa-cog" aria-hidden="true"></i>2 of these VMCs are equipped with a Fourth (Rotary) Axis.</p>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <h1>02</h1>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="left">
                                                    <h2>CNC TURNING</h2>
                                                    <p><i class="fa fa-cog" aria-hidden="true"></i>We have 1 CNC Turning Center of LMW (India) make</p>
                                                    <p><i class="fa fa-cog" aria-hidden="true"></i>This turning center can accommodate jobs from Dia.5 mm to 250 mm and Max. length of 500mm.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                             <div class="col-md-2">
                                                 <h1>03</h1>
                                             </div>
                                             <div class="col-md-4">
                                                <div class="left">
                                                    <h2>Manual Machining</h2>
                                                    <p>Following Conventional Machines in our Setup support our CNC Operations,</p>
                                                    <ul class="list-unstyled">
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Radial Drilling Machine</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Vertical Milling Machine</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Surface Grinder</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Cylindrical Grinder</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Heavy Duty Lathe</li>
                                                    </ul>
                                                </div>
                                             </div>
                                             <div class="col-md-2">
                                                <h1>04</h1>
                                             </div>
                                             <div class="col-md-4">
                                                <div class="left">
                                                    <h2>Mechanical Assembling</h2>
                                                    <p>Assemblies Manufactured by us till date,</p>
                                                    <ul class="list-unstyled">
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Turbocharger Housing for Diesel Locomotive</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Machine Tool Sub-assemblies</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Pumps for Testing Air Quality</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Couplings for Power Transmission</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Machine Tool Sub-assemblies</li>
                                                    </ul>
                                                </div>
                                             </div>
                                        </div>
                                        <div class="row">
                                             <div class="col-md-2">
                                                 <h1>05</h1>
                                             </div>
                                             <div class="col-md-4">
                                                <div class="left">
                                                    <h2>Quality Systems</h2>
                                                    <p>We put in our best effort to make sure that the parts we make are in conformance to customer specifications and standards. Our quality system is in compliance with ISO 9001:2008.</p>
                                                    <p>Dimensional checks are carried out using standard instruments such as Vernier calipers, micrometers, dials and air gauges, in addition to:</p>
                                                    <ul class="list-unstyled">
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>an optical profile projector (optical comparator)</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i> a digital height gauge (TRIMOS, Swiss make)</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>a bench center</li>
                                                    </ul>
                                                </div>
                                             </div>
                                             <div class="col-md-2">
                                                <h1>06</h1>
                                             </div>
                                             <div class="col-md-4">
                                                <div class="left">
                                                    <h2>CAD / CAM Data Exchange</h2>
                                                    <p>CAD-CAM system from Delcam Plc. provides critical support to our CNC programming function and also enables us to exchange data between other CAD-CAM formats.</p>
                                                    <ul class="list-unstyled">
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Turbocharger Housing for Diesel Locomotive</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Machine Tool Sub-assemblies</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Pumps for Testing Air Quality</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Couplings for Power Transmission</li>
                                                        <li><i class="fa fa-cog" aria-hidden="true"></i>Machine Tool Sub-assemblies</li>
                                                    </ul>
                                                </div>
                                             </div>
                                        </div>
                                    </div>
                                    <div class="feet">
                                        <ul class="breadcrumb">
                                            <li>CNC Jobwork India</li>
                                            <li>Manual Machining</li>
                                            <li> Mechanical Assembling</li>
                                            <li>CNC Milling </li>
                                            <li>CNC Turning</li>
                                        </ul>
                                    </div>
                        </div>
                    </div>

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

                   {/*  <!------ FOOTER END ------> */}
                    
                </div>
            </div>
        )
    }
}
export default History;