import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class Career extends React.Component {
    render() {
        return (
            <div>
                <div class="career">
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

            {/*   <!------ SIDE MENU END ------>

                <!------ BANNER START------> */}

                <div class="banner">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                        <div class="item active">
                            <div class="background1 space">
                                <div class="container">
                                    <div class="caption">
                                        <h2>WELCOME TO ENKEY'S CAREER</h2>
                                        <h3>We deliver quality engineering components and assemblies to industrial product manufacturers and OEMs by manufacture.</h3>
                                        <p>We specialize in Aluminium machined components, completely machined metal components.</p>
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="background2 space">
                                <div class="container">
                                    <div class="caption">
                                        <h2>WELCOME TO ENKEY'S CAREER</h2>
                                        <h3>We offer unique combination of benefits that include precision-oriented quality, competitive price, quick response.</h3>
                                        <p>Enkey has manufacturing and procurement capabilities to serve industrial customers who need down the costs.</p>
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>	    
                        <div class="item">
                            <div class="background3 space">
                                <div class="container">
                                    <div class="caption">
                                        <h2>WELCOME TO ENKEY'S CAREER</h2>
                                        <h3>Enkey - Established in 1984 with aluminium gravity die casting foundry we expanded to ISO 9001:2000 CNC Manufacturing facility in 1999.</h3>
                                        <p>“We are favourably located in the industrial city of Coimbatore with access to 3 major sea ports in a radius.</p>
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>

            {/*  <!------ BANNER END ------>

                <!-- SECTION 0 START--> */}

                <div class="section0">
                    <div class="container reveal">
                        <h2>CAREER'S FACILITIES</h2>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="box">
                                    <h3>Engineering</h3>
                                    <p>Production/Manufacturing Engineers with experience in Machining and foundry operations</p>
                                    <h5>32 Position</h5>
                                </div>
                                <div class="box">
                                    <h3>CNC Programming</h3>
                                    <p>Application/Process development Engineers with knowledge in CNC Programming, Jigs & Fixture knowledge</p>
                                    <h5>30 Position</h5>
                                </div>
                                <div class="box">
                                    <h3>CMM Working</h3>
                                    <p>Quality Personnel who has experience in ISO 9000 procedures, CMM working knowledge &Quality tools</p>
                                    <h5>55 Position</h5>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="box">
                                    <h3>Resume</h3>
                                    <p>Please send your resume to us at HR@Enkeyindia.Com and we will get back to you at our earliest.</p>
                                    <h5>12 Position</h5>
                                </div>
                                <div class="box">
                                    <h3>Manufacturing</h3>
                                    <p>Industrial Product Manufacturers - Pneumatics, Hydraulics, Pumps, Valves & Compressors Industry</p>
                                    <h5>42 Position</h5>
                                </div>
                                <div class="box">
                                    <h3>Machinery</h3>
                                    <p>Machinery manufacturers (Agricultural, Textile, Machine tool, Printing machinery)</p>
                                    <h5>34 Position</h5>
                                </div>
                            </div>
                        </div>

                        <div id="toggles">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="box">
                                        <h3>Engineering</h3>
                                        <p>Production/Manufacturing Engineers with experience in Machining and foundry operations</p>
                                        <h5>32 Position</h5>
                                    </div>
                                    <div class="box">
                                        <h3>CNC Programming</h3>
                                        <p>Application/Process development Engineers with knowledge in CNC Programming, Jigs & Fixture knowledge</p>
                                        <h5>30 Position</h5>
                                    </div>
                                    <div class="box">
                                        <h3>CMM Working</h3>
                                        <p>Quality Personnel who has experience in ISO 9000 procedures, CMM working knowledge &Quality tools</p>
                                        <h5>55 Position</h5>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="box">
                                        <h3>Resume</h3>
                                        <p>Please send your resume to us at HR@Enkeyindia.Com and we will get back to you at our earliest.</p>
                                        <h5>12 Position</h5>
                                    </div>
                                    <div class="box">
                                        <h3>Manufacturing</h3>
                                        <p>Industrial Product Manufacturers - Pneumatics, Hydraulics, Pumps, Valves & Compressors Industry</p>
                                        <h5>42 Position</h5>
                                    </div>
                                    <div class="box">
                                        <h3>Machinery</h3>
                                        <p>Machinery manufacturers (Agricultural, Textile, Machine tool, Printing machinery)</p>
                                        <h5>34 Position</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="read">
                            <button id="downup">Read More</button>
                        </div>

                    </div>
                </div>
            {/* 
                <!-- SECTION 0 END-->

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
            {/* 
                <!------ FOOTER END ------> */}
                </div>
            </div>
        )
    }
}

export default Career;