import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class Home extends React.Component {
    constructor() {
        super()
        this.state = { count: 0, txt: "",text: "",email: "",number: "",message: "" }
    }

handleIncrement = () => {
  this.setState({ 
      count: this.state.count + 1
    })
}
componentWillUpdate() {
    if(this.state.count==2){
        this.setState({ 
            txt: "You Are Ugraded"
          })
    }
}
text=(a)=>{
    this.setState({text: a.target.value})
}
email=(b)=>{
    this.setState({email: b.target.value})
}
number=(c)=>{
    this.setState({number: c.target.value})
}
message=(d)=>{
    this.setState({message: d.target.value})
}
enquire=()=>{
    if(this.text==""){
        alert("Incorrect Text");
    }
    else {

    }
    if(this.number.length>=6){
        alert("Number is longer")
    }
    else{
    }
    if(isNaN(this.message)){

    }
    else{
        alert("Incorrect Message");
    }
}
    render() {
        return (
            <div>
                <div class="home">
                    {/* <!-- NAVBAR --> */}

                    <nav class="navbar navbar-default navbar-fixed-top" id="navbar">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
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
                                <li><Link to="alumini">Aluminium die cast part</Link></li>
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

                    <!-- BANNER --> */}

                    <div class="banner">
                        <div class="container-fluid">
                            <div class="right">
                                <h3>Motors,<br/> Gear boxes,<br/> Transmission<br/>elements</h3>
                                <p>Our Aluminium die casting foundry is<br/> capable producing aluminium components<br/> ranging from 10 gms to 10 kg castings</p>
                            </div>
                        </div>
                        <div class="bottom">
                            <h3>WE'RE BIG ON SMALL TURNED PARTS</h3>
                        </div>
                        <div class="foot">
                            <p>PROUD TO BE MANUFACTURING VENTILATOR PARTS FOR THE NHS</p>
                            <ul class="list-inline">
                                <li><img src="assets/img/alloy.jpg"/></li>
                                <li><img src="assets/img/alloy1.jpg"/></li>
                                <li><img src="assets/img/alloy2.png"/></li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- BANNER END -->

                    <!------ SIDE MENU START ------> */}

                    <div class="icon-bar">
                    <a href="#" class="facebook"><i class="fa fa-facebook"></i></a> 
                    <a href="#" class="twitter"><i class="fa fa-twitter"></i></a> 
                    <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> 
                    </div>

                    <div class="icons" id="icons">
                        <a class="question" id="question" onclick="question()">Enquire Now<i class="fa fa-chevron-up" aria-hidden="true" id="up"></i></a>
                        <form>
                            <input type="text" placeholder="Your name*" name="" onChange={this.text}/><br/>
                            <input type="email" placeholder="Your e-mail*" name="" onChange={this.email}/><br/>
                            <input type="number" placeholder="Phone*" name="" onChange={this.number}/><br/>
                            <textarea rows="2" cols="20" placeholder="Message*" onChange={this.message}></textarea><br/>
                            <button class="btn" onClick={this.enquire}>Submit</button>
                        </form>
                    </div>

                    {/* <!------ SIDE MENU END ------> */}

                    {/* <!-- SECTION START--> */}

                    <div class="section">
                        <div class="container-fluid">
                            <div class="head">
                                <center>
                                    <h3>Automotive  & OEM manufacturers</h3>
                                </center>
                            </div>
                            <div class="images">
                                <div class="row">
                                    <center>
                                        <div class="col-md-3">
                                            <img src="assets/img/machine.jpg" class="img-responsive"/>
                                            <h5>Gearbox | Types of Gearbox ...</h5>
                                        </div>
                                        <div class="col-md-3">
                                            <img src="assets/img/machine1.jpg" class="img-responsive"/>
                                            <h5>Automatic transmission ...</h5>
                                        </div>
                                        <div class="col-md-3">
                                            <img src="assets/img/machine5.jpg" class="img-responsive"/>
                                            <h5>8-Speed Automatic Transmission - ZF</h5>
                                        </div>
                                        <div class="col-md-3">
                                            <img src="assets/img/machine3.jpg" class="img-responsive"/>
                                            <h5>Gears Look to the Future for Material ...</h5>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- SECTION END-->

                    <!-- SECTION 0 START--> */}

                    <div class="section0">
                        <div class="container reveal">
                            <div class="head">
                                <h3>We cater to a wide range of industries</h3>
                            </div>
                            <div class="body">
                                <div class="col-sm-6">
                                    <div class="first">
                                        <h5>Automotive  & OEM manufacturers</h5>
                                        <p>Automobile Industry – Original Equipment Manufacturers (OEMs) and Auto Component Manufacturers (ACM) The Original Equipment Manufacturers referred to as the OEMs are the vehicle producers that manufacture and assemble passenger cars, utility vehicles, commercial vehicles, two wheelers and three wheelers.</p>
                                        <p>An original equipment manufacturer (OEM) traditionally is defined as a company whose goods are used as components in the products of another company, which then sells the finished item to users</p>
                                        <p>Kettlebells are a ball of iron with a handle and the weights are not distributed evenly. This creates the need to<span> counterbalance & stabilize</span> your body while working out with kettlebells, which develops Core Strength, Balance and Coordination.</p>
                                        <p>Investments for long term wealth creation are similar in nature to Kettlebells. The process has to be continuous with steady progression and balanced with the right portfolio choices that are dynamic in nature given the ever-changing investment environment.</p>
                                    </div>
                                    <div class="bottom">
                                        <h3>We cater to a wide range is a portfolio</h3>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="second">
                                        <h5>Machinery manufacturers (Agricultural, Textile, Machine tool, Printing machinery)</h5>
                                        <ul>
                                            <li><p><span>Technical Knowledge:</span>Rotary Screen Drum can be designed with slot openings and wires running radial on the outside surface of the screen cylinder (above) or they can be positioned axially on the inside of the cylinder (below).</p></li>
                                            <li><p><span>Latest Knowhow:</span>Each intersection of wedge wire and support rod is welded for strength and durability.  Various wedge wire and support rod combinations can be used to produce the best screen design.</p></li>
                                            <li><p><span>State-of-the-art Setup:</span>The effluent waters pass through the element under gravity, trapping the solids on the screen face whilst the cleaned liquor passes through the screen element. The collected solids are discharged via the screen drum mouth.</p></li>
                                            <li><p><span>Passionate Hardcore Engineers:</span>Wedge wire rotary drum screen designed to combine separation of solids present in effluents with compacting and de-watering of the screenings.</p></li>
                                            <li><p><span>Critical Components Manufacturing:</span>Based at Ahmedabad Gujarat (India), We, Stalmec Eng Pvt Ltd , are a renowned organization manufacturing, exporting and supplying a wide range of Rotary Screen Printing Machine & Spare Parts.</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  <!-- SECTION 0 END-->


                    <!-- SECTION 1 --> */}

                        <div class="section1">
                            <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="box">
                                        <div class="background1 back">
                                            <h4>Indoor-Lens</h4>
                                        </div>
                                        <div class="bottom">
                                            <h2>Automotive  & OEM manufacturers</h2>
                                            <p>Our Section Rating</p>
                                            <div class="rating">
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star un"></span>
                                            </div>
                                            <ul class="list-inline location">
                                                <li><span class="glyphicon glyphicon-map-marker"></span></li>
                                                <li><p>South-Korea, Russia</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="box">
                                        <div class="background2 back">
                                            <h4>Mother-Board</h4>
                                        </div>
                                        <div class="bottom">
                                            <h2>Replacement parts - across varies</h2>
                                            <p>Our Section Rating</p>
                                            <div class="rating">
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star un"></span>
                                            </div>
                                            <ul class="list-inline location">
                                                <li><span class="glyphicon glyphicon-map-marker"></span></li>
                                                <li><p>Germany, Greece</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="box">
                                        <div class="background3 back">
                                            <h4>Inner-Lens</h4>
                                        </div>
                                        <div class="bottom">
                                            <h2>Motors, Gear boxes, Transmission</h2>
                                            <p>Our Section Rating</p>
                                            <div class="rating">
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star un"></span>
                                            </div>
                                            <ul class="list-inline location">
                                                <li><span class="glyphicon glyphicon-map-marker"></span></li>
                                                <li><p>Paris, France</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="box">
                                        <div class="background4 back">
                                            <h4>Machines</h4>
                                        </div>
                                        <div class="bottom">
                                            <h2>Machinery manufacturers</h2>
                                            <p>Our Section Rating</p>
                                            <div class="rating">
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star un"></span>
                                            </div>
                                            <ul class="list-inline location">
                                                <li><span class="glyphicon glyphicon-map-marker"></span></li>
                                                <li><p>China, Finland</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- SECTION 1 END --> */}
                    {/* <!------ SECTION 4 START ------> */} 

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
                                            <li><button onClick={this.handleIncrement}>Subscribe</button><h3>{this.state.count} {this.state.txt}</h3></li>
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
export default Home; 