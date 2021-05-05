import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class Quality extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        };
    }
    clickMe() {
        this.setState( () => {
            return {count: this.state.count + 1}           
        });
    }
    render() {
        return (
            <div>
                <div class="quality">
                    {/* <!-- NAVBAR --> */}

                    <nav class="navbar navbar-default navbar-fixed-top" id="navbar">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </button>
                            <a class="navbar-brand" href="home.html"><img src="assets/img/enkey.jpg" class="img navbar-img"/></a>
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
                            <li class="dropdown"><a  href="#">Products/Capabilities<i class="fa fa-caret-down" aria-hidden="true"></i></a>
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
                                <li><Link to="/product">Product Gallery</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/facilities">Facilities/Machinerys gallery</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact&Enquiry</Link></li>
                            </ul>
                        </div>
                        </div>
                    </nav>

                     {/* <!-- NAVBAR END --> 

                    <!------ BANNER START------> */}

                    <div class="banner">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active">01</li>
                            <li data-target="#myCarousel" data-slide-to="1">02</li>
                            <li data-target="#myCarousel" data-slide-to="2">03</li>
                            </ol>
                            <div class="carousel-inner">
                            <div class="item active">
                                <div class="background1 space">
                                    <div class="container-fluid">
                                        <div class="caption">
                                            <h2>ESTABLISHING AND IMPLEMENTING A QMS</h2>
                                            <h3>Before establishing a quality management system, your organization must identify and manage various connected, multi-functional processes to help ensure customer satisfaction.</h3>
                                            <p><i class="fa fa-play-circle" aria-hidden="true"></i>Watch the movie.</p>
                                        </div>
                                    </div>
                                    <div class="box"></div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="background2 space">
                                    <div class="container-fluid">
                                        <div class="caption">
                                            <h2>ESTABLISHING AND IMPLEMENTING A QMS</h2>
                                            <h3>Before establishing a quality management system, your organization must identify and manage various connected, multi-functional processes to help ensure customer satisfaction.</h3>
                                            <p><i class="fa fa-play-circle" aria-hidden="true"></i>Watch the movie.</p>
                                        </div>
                                    </div>
                                    <div class="box"></div>
                                </div>
                            </div>	    
                            <div class="item">
                                <div class="background3 space">
                                    <div class="container-fluid">
                                        <div class="caption">
                                            <h2>ESTABLISHING AND IMPLEMENTING A QMS</h2>
                                            <h3>Before establishing a quality management system, your organization must identify and manage various connected, multi-functional processes to help ensure customer satisfaction.</h3>
                                            <p><i class="fa fa-play-circle" aria-hidden="true"></i>Watch the movie.</p>
                                        </div>
                                    </div>
                                    <div class="box"></div>
                                </div>
                            </div>
                            </div>
                            
                        </div>
                    </div>

                    {/*  <!------ BANNER END ------> */}

                    {/* <!-- BANNER END -->

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

                    {/* <!------ SIDE MENU END ------> */}

                    <div class="sec">
                        <div class="section1">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="one">
                                        <img src="assets/img/qq.jpg" class="img img-responsive" />
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="two">
                                            <img src="assets/img/clogo.jpg" class="img img-responsive" />
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="three">
                                            <h2>Design and Build</h2>
                                            <p>The design and build portions serve to develop the structure of a QMS, its processes,
                                                 and plans for implementation. Senior management should oversee this portion to ensure
                                                  the needs of the organization and the needs of its customers are a driving force behind the systems development.
                                            </p>
                                            <i class="fa fa-long-arrow-down" aria-hidden="true"></i><br/>
                                            <Link onclick={this.clickMe.bind(this)}>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section2">
                        <div class="container">
                            <div class="head">
                                <h2><i class="fa fa-info-circle" aria-hidden="true"></i>Quality Glossary Definition: Quality management system (QMS)</h2>
                            </div>
                            <div class="body">
                                <p>A quality management system (QMS) is defined as a formalized system that documents processes, procedures, and responsibilities
                                     for achieving quality policies and objectives. A QMS helps coordinate and direct an organization’s activities to meet customer
                                      and regulatory requirements and improve its effectiveness and efficiency on a continuous basis.</p>
                                <p><span>ISO 9001:2015, </span>the international standard specifying requirements for quality management systems, is the most prominent approach 
                                    to quality management systems. While some use the term "QMS" to describe the ISO 9001 standard or the group of documents detailing 
                                    the QMS, it actually refers to the entirety of the system. The documents only serve to describe the system.</p>
                                <ul>
                                    <li>Benefits of QMS</li>
                                    <li>ISO 9001:2015 and other QMS standards</li>
                                    <li>Elements and requirements of a QMS</li>
                                    <li>Establishing and implementing a QMS</li>
                                    <li>Industrial influence on quality and standardization</li>
                                    <li>QMS resources</li>
                                </ul>
                                <div class="imgs">
                                    <img src="assets/img/quality.jpg" class="img img-responsive" />
                                </div>
                            </div>
                        </div>
                        <div class="boxes"></div>
                    </div>

                    <div class="section3">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class='one'>
                                        <h2>Deploy</h2>
                                        <p>
                                        Deployment is best served in a granular fashion by breaking each process down into subprocesses and educating staff on documentation,
                                         education, training tools, and metrics. Company intranets are increasingly being used to assist in the deployment of quality management systems.
                                        </p>
                                        <Link>See All</Link>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class='two'>
                                        <div class="imu1 v">
                                            <h2><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Assembly</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class='two'>
                                        <div class="imu2 v">
                                            <h2><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Design</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class='two'>
                                        <div class="imu3 v">
                                            <h2><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Management</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><div class="clearfix"></div>

                    {/* 
                    <!------ SECTION 4 END ------>

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

                    {/* <!------ FOOTER END ------> */}

                </div>
            </div>
        )
    }
}
export default Quality;