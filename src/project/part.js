import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class Part extends React.Component {
    render() {
        return (
            <div>
                <div class="part">
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
                            <li class="two"><a href="product-gallery.html">Part-Assembly</a></li>
                        </ul>
                    </div>

                   {/*  <!-- BANNER END -->

                    <!-- SECTION 1 START --> */}
                    <div class="section1">
                        <div class="head">
                            <h2>Begin an EMI Technical Assistance Pre-Application</h2>
                        </div>
                        <div class="box">
                            <div class="one">
                                <div class="row">
                                    <div class="col-md-8">
                                        <p>EMI sends teams of design professionals around 
                                            the world to assist Christian charities on-location in the areas of architecture,
                                             engineering, surveying, construction management and more—all on a not-for-profit basis.</p>
                                             <p>Development projects are usually the largest capital investment a Christian ministry will make—it is so critical to plan
                                                  them well and get professional advice. EMI is a network of architects, engineers, surveyors, and other design professionals
                                                   who donate their services. Since 1982, EMI has sent teams of design professionals to assist ministries in over 90 different
                                                    countries.</p>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="embed-responsive embed-responsive-16by9">
                                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/devo3kdSPQY"></iframe>
                                        </div>
                                        <h2>Enkey's Part Assembly</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="two">
                                <ul>
                                    <li><span>Helping the poor. </span>Demonstrate to EMI how the project will minister to the needs of the poor, the vulnerable, or the under-privileged of the community.</li>
                                    <li><span>Advancing the gospel of Christ. </span>Demonstrate to EMI that there is an ongoing advancement of the gospel of Jesus Christ in word or deed, and how the project will advance this.</li>
                                    <li><span>Property ownership. </span>Demonstrate to EMI that the property where the project will be built is owned by the ministry, or owned by the ministry’s partner, or controlled through a long-term lease, with the relevant documentation.</li>
                                    <li><span>Project funding. </span>Demonstrate to EMI that there is a planned method of funding the project construction and operation.</li>
                                    <li><span>Pay a portion of the project design cost. </span>The host ministry must agree to pay a portion of the project design cost to EMI. This design cost assessed by EMI is based on your project type, scope, size, and duration.</li>
                                </ul>
                            </div>
                            <div class="three">
                                <p>The scope of professional technical services for any project will be determined by the EMI location operating the project in conjunction with the ministry’s need and situation. The project scope and deliverable items will be defined in a Letter
                                     of Agreement between the EMI location operating the project and the ministry.</p>
                                     <p>In general, there are several common levels of scope for professional technical services coordinated by EMI. Some projects move from 
                                         one level to another from the initial planning stage to construction. These are described below with samples taken from various EMI 
                                         locations:Christian ministries can qualify to receive professional technical services through EMI at a fraction of the cost, but these
                                          technical services are not unlimited in scope. The following is generally applicable for EMI – specific details will vary significantly
                                           by EMI location.</p>
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
export default Part;