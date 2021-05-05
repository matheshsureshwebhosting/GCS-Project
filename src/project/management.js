import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class Management extends React.Component {
    render() {
        return (
            <div>
                <div class="management">
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
                                <h3>MULTIAXIS MACHINING MANUFACTURERS & SUPPLIERS</h3>
                            </div>
                            <div class="body">
                                <div class="container">
                                    <div class="copy">
                                        <div class="col-md-6">
                                            <img src="assets/img/manage.png" class="img img-responsive" />
                                        </div>
                                        <div class="col-md-6">
                                            <div class="borders">
                                                <p>Multiaxis machining is a manufacturing process where computer numerically controlled tools that move in Different
                                                     ways are used to manufacture parts out of metal or other materials by milling away excess material, by water jet 
                                                     cutting or by laser cutting. Typical CNC tools support translation in 3 axis; multiaxis machines also support rotation
                                                      around one or multiple axis.</p>
                                                <p><span>Multi Axis machining</span> offers some serious capability advantages to SME Manufacturers. Multi-axis machines are capable of
                                                     producing highly complicated components by moving the table (and work piece) as well as the machine tool. This combination
                                                      provides the ability move in multiple axes, over and above the 3 typical of conventional milling machines.</p>
                                            </div>                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="foot">

                                <div class="row">
                                    <div class="col-md-3">
                                        <h1>01</h1>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="base">
                                            <h2>3 AXIS MACHINING</h2>
                                            <p>3-axis milling is capable of creating the same products as 4 axis and 5 axis machines, but the 3 axis machines cannot deliver
                                                 the same level of detail or efficiency as its predecessors. 3 axis can cut individual features during operations, but it cannot
                                                  match the work of a 5 axis in quality or profitability.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h1>02</h1>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="base">
                                            <h2>4 AXIS MACHINING</h2>
                                            <p>Similar to the 3 Axis CNC vertical milling machine, 4 axis micro-milling machines are vertically operated and built to function
                                                 in a timely fashion. They are user friendly with manual and computer lead operations. Built for detail work and accuracy, 4 axis
                                                  is a step away from the high quality, precise engravings, drillings, and millings of a 5 axis machine. Despite its short comings,
                                                   the 4 axis CNC machine can be used for different purposes, including:</p>
                                                   <ul class="list-unstyled">
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i> Industry</li>
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i>Technology Research</li>
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i>Teaching</li>
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i>Hobby Prototype Building</li>
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i>Advertising Design</li>
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i>Creating Art</li>
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i>Medical Equipment Creation</li>
                                                   </ul>
                                                   <p>With the ability to operate on wood, foam, composite board, aluminum alloy, and even PCB, 4 axis is a multi-use CNC tool functioning
                                                        at a slightly higher competency than the 3 axis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h1>03</h1>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="base">
                                            <h2>5 Axis Machining</h2>
                                            <p>With 5 axis machining, complex parts that may otherwise have to be cast can be milled from a solid piece of material. For prototypes
                                                 and short runs this is quicker and cheaper. Micro drilling applications that require many holes with different angles are performed
                                                  more efficiently on a 5 axis machine. This extremely fast milling machine, unlike the 3 axis and 4 axis, has the capabilities
                                                   to efficiently and impressively produce:</p>
                                                   <ul class="list-unstyled">
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i> Artificial Bones</li>
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i>Aerospace Products</li>
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i>Titanium Creations – For Both Practical and Artistic Purposes</li>
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i>Oil and Gas Machine Parts</li>
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i>Car Moulds</li>
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i>Medical Technology</li>
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i>Architectural Door Frames</li>
                                                       <li><i class="fa fa-cog" aria-hidden="true"></i>   Military Grade Products</li>
                                                   </ul>
                                                   <p>Our clients can obtain from us a quality range of 5 Axis High Speed Machine, which is highly cherished by clients.
                                                        These accessible products are designed by making in use of finest quality raw material and latest technology. In addition,
                                                         due to high in demand, we are skilful of offering this range at industry foremost prices.</p>
                                        </div>
                                    </div>
                                </div>
                                    
                                    <div class="feet">
                                        <ul class="breadcrumb">
                                            <li>Aerospace Components</li>
                                            <li>Medical implants</li>
                                            <li>Medical device</li>
                                            <li>Turbine blade machining </li>
                                            <li>Impeller machining</li>
                                        </ul>
                                    </div>
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
export default Management;