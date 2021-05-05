import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class Pre extends React.Component {
    render() {
        return (
            <div>
                <div class="pre">
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
                            <li class="one"><a href="home.html">Home</a></li>
                            <li class="two"><a href="product-gallery.html">Pre-Launch and Prototype</a></li>
                        </ul>
                    </div>

                   {/*  <!-- BANNER END -->

                    <!-- SECTION 1 START --> */}
                    <div class="section1">
                        <div class="head">
                            <h2>Pre-Launch And Prototype Support</h2>
                        </div>
                        <div class="box">
                            <div class="one">
                                <div class="row">
                                    <div class="col-md-8">
                                        <p>The manufacturing industry in North America expects to enjoy a global dominance through 2020 according to a study by Deloitte. A driving force behind this is the
                                             continuous development of new products and their introduction into the marketplace.</p>
                                        <p>Prototyping involves more than just the creation of a tactile mockup. It’s both a <span>proof of concept using off the shelf hardware </span> mixed with DIY materials
                                             and a fully-functional product constructed of precision-crafted components.</p>
                                             <p>For that reason, new product designs generally go through several prototype iterations before they are deemed ready for the production line. Whereas it’s common to think 
                                                 in terms of a single prototype, the process, in fact, typically results in the creation of multiple iterations.</p>
                                    </div>
                                    <div class="col-md-4">
                                        <img src="assets/img/prr.jpg" class="img img-responsive"/>
                                        <h2>Enkey's Pre-Launch Prototype</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="two">
                                <ul>
                                    <li>Enkey's lathe work.</li>
                                    <li>Complex milling operations in hard metals.</li>
                                    <li>Exotic cylindrical and surface grinding.</li>
                                    <li>Electrical discharge machining.</li>
                                    <li>Surface treatments and finishing.</li>
                                    <li>Single parts to large quantities.</li>
                                    <li>From aluminum, tools steels to plastic.</li>
                                    <li>Quality and process control.</li>
                                </ul>
                            </div>
                            <div class="three">
                                <p>For the sake of clarity we’ve listed prototypes in succession; however, in some cases, prototypes may be 
                                    developed anywhere along the product development timeline. It’s important to realize that developers design
                                     prototypes to match the manufacturing method, so depending on changes and differences it may be necessary to push
                                      forward prototypes concurrently.</p>
                                      <p>To that end, we have partitioned the prototyping process into three classifications: what we’ll call the Alpha, Beta, and Pilot.
                                           While different product developers may use alternative terminology such as minimum viable product (MVP) and proof of concept 
                                           (POC), these phases are fairly universal. Each phase represents a step forward along a product roadmap and corresponds to an 
                                           increasing score along the Technology Readiness Level scale.</p>
                                      <p>It should be noted, however, that the process itself is usually nonlinear in nature, as developers will occasionally use lessons learned
                                           in various test phases to go back and revisit earlier iterations. Depending on what stage along the process you are, the tools, methods,
                                            decisions and challenges will be different.</p>
                            </div>
                            <div class="four">
                                <ul class="breadcrumb">
                                    <li>High Precision Machining</li>
                                    <li>High Precision Parts Manufacturers</li>
                                    <li>High Precision Parts Suppliers</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                  {/*   <!-- SECTION 1 END -->

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

                   {/*  <!------ FOOTER END ------> */}
                </div>
            </div>
        )
    }
}
export default Pre;