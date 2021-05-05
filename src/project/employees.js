import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class Employees extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Weston Melonson',
			para: 'Product Team Analyst',
			value1: 'Lead Group specialist',
			para1: 'Jarvis Czapla',
			value2: 'Helaine Seibold',
			para2: 'Product Branding Analyst',
			value3: 'Dwain Staple',
			para3: 'Senior Brand Strtegist',
			value4: 'Merissa Rugh',
			para4: 'Regional Brand Cordinator',
			value5: 'Isreal Freshour',
			para5: 'Senior Infrastructure Developer',
			value6: 'Gloria Broadfoot',
			para6: 'Senior Group Producer',
			value7: 'Darrick Stours',
			para7: 'International Marketing Manager',
		};
	  }
	  handleChange(event) {
		this.setState({value: event.target.value});
	  }
	  handleChanges(events) {
		this.setState({para: events.target.value});
	  }
	  handleChange1(event1) {
		this.setState({value1: event1.target.value});
	  }
	  handleChanges1(events1) {
		this.setState({para1: events1.target.value});
	  }
	  handleChange2(event2) {
		this.setState({value2: event2.target.value});
	  }
	  handleChanges2(events2) {
		this.setState({para2: events2.target.value});
	  }
	  handleChange3(event3) {
		this.setState({value3: event3.target.value});
	  }
	  handleChanges3(events3) {
		this.setState({para3: events3.target.value});
	  }
	  handleChange4(event4) {
		this.setState({value4: event4.target.value});
	  }
	  handleChanges4(events4) {
		this.setState({para4: events4.target.value});
	  }
	  handleChange5(event5) {
		this.setState({value5: event5.target.value});
	  }
	  handleChanges5(events5) {
		this.setState({para5: events5.target.value});
	  }
	  handleChange6(event6) {
		this.setState({value6: event6.target.value});
	  }
	  handleChanges6(events6) {
		this.setState({para6: events6.target.value});
	  }
	  handleChange7(event7) {
		this.setState({value7: event7.target.value});
	  }
	  handleChanges7(events7) {
		this.setState({para7: events7.target.value});
	  }
	  handle(){
		  document.getElementById("tag7").style.display="none";
	  }
	  handle1(){
		document.getElementById("tag7").style.display="block";
	}
	handlef(){
		document.getElementById("tag1").style.display="none";
	}
	handle1f(){
	  document.getElementById("tag1").style.display="block";
	}
	handleg(){
		document.getElementById("tag").style.display="none";
	}
	handle1g(){
	  document.getElementById("tag").style.display="block";
    }
	handlea(){
	document.getElementById("tag6").style.display="none";
	}
	handle1a(){
	document.getElementById("tag6").style.display="block";
	}
	handleb(){
		document.getElementById("tag5").style.display="none";
	}
	handle1b(){
	document.getElementById("tag5").style.display="block";
	}
	handlec(){
		document.getElementById("tag4").style.display="none";
	}
	handle1c(){
	document.getElementById("tag4").style.display="block";
	}
	handled(){
		document.getElementById("tag3").style.display="none";
	}
	handle1d(){
	document.getElementById("tag3").style.display="block";
	}
	handlee(){
		document.getElementById("tag2").style.display="none";
	}
	handle1e(){
	document.getElementById("tag2").style.display="block";
	}
    render() {
        return (
            <div>
                <div class="employees">
					<div class="employee">
						<div class="row">

							<div class="col-md-3">
								<div class="one">
									<div class="top">
										<a href="#"><img src="assets/img/enkey.jpg"/></a>
									</div>
									<div class="bottom">
										<ul class="list-unstyled">
											<li><Link to="/home"><i class="fa fa-home" aria-hidden="true"></i>HOME</Link></li>
											<li><Link to="/login"><i class="fa fa-user" aria-hidden="true"></i>EMPLOYEES</Link></li>
											<li><Link to="/career"><i class="fa fa-newspaper-o" aria-hidden="true"></i>NEWS & EVENTS</Link></li>
											<li><Link to="/contact"><i class="fa fa-medkit" aria-hidden="true"></i>HELPCENTER</Link></li>
											<li><Link to="/home"><i class="fa fa-cog" aria-hidden="true"></i>SETTINGS</Link></li>
										</ul>
									</div>
								</div>
							</div>

							<div class="col-md-9">
								<div class="two">

									<div class="top">
										<nav class="navbar navbar-default" id="navbar">
											<div class="container-fluid">
												<div class="navbar-header">
												<a class="navbar-brand"><input type="text" name="" placeholder="Search employees,job tittle or help.." id="myInput"/></a>
												</div>
												<ul class="nav navbar-nav navbar-right" >
												<li><a href=""><i class="fa fa-question-circle" aria-hidden="true"></i></a></li>
												<li><a href=""><i class="fa fa-comments" aria-hidden="true"></i></a></li>
												<li><a href=""><i class="fa fa-bell" aria-hidden="true"></i></a></li>
												<li><a href="">Hello,John Doe<i class="fa fa-chevron-down" aria-hidden="true"></i></a></li>
												</ul>
											</div>
										</nav>
									</div>

									<div class="bottom">
										<h3>Employee Directory</h3>
										<div class="user"  id="myDIV">
											<div class="row">
												<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

													<div class="tag" id="tag">
														<div class="row">
															<div class="col-md-6">
																<ul class="list-inline">
																	<li><img src="assets/img/avatar-17.jpg"/><a href="">{this.state.value}</a><p >{this.state.para}<br/>618.3798.5323</p></li>
																</ul>
															</div>
															<div class="col-md-6">
																<ul class="list-inline right">
																	<li><i class="fa fa-pencil" aria-hidden="true" data-toggle="modal" data-target="#myModal" title="Edit"></i></li>
																	<li><i class="fa fa-times" aria-hidden="true" data-toggle="modal" data-target="#myModal5" title="Close"></i></li>
																</ul>
															</div>
														</div>
														<hr/>
														<ul class="list-inline last">
															<li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
														</ul>
													</div>
													<div class="tag" id="tag1">
														<div class="row">
															<div class="col-md-6">
																<ul class="list-inline">
																	<li><img src="assets/img/avatar-09.jpg"/><a href="">{this.state.value1}</a><p>{this.state.para1}<br/>678.378.5330</p></li>
																</ul>
															</div>
															<div class="col-md-6">
																<ul class="list-inline right">
																	<li><i class="fa fa-pencil" aria-hidden="true" data-toggle="modal" data-target="#myModal1" title="Edit"></i></li>
																	<li><i class="fa fa-times" aria-hidden="true" data-toggle="modal" data-target="#myModal6" title="Close"></i></li>
																</ul>
															</div>
														</div>
														<hr/>
														<ul class="list-inline last">
															<li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
														</ul>
													</div>
													<div class="tag" id="tag2">
														<div class="row">
															<div class="col-md-6">
																<ul class="list-inline">
																	<li><img src="assets/img/avatar-07.jpg"/><a href="">{this.state.value2}</a><p>{this.state.para2}<br/>718.3798.5356</p></li>
																</ul>
															</div>
															<div class="col-md-6">
																<ul class="list-inline right">
																	<li><i class="fa fa-pencil" aria-hidden="true" data-toggle="modal" data-target="#myModal2" title="Edit"></i></li>
																	<li><i class="fa fa-times" aria-hidden="true" data-toggle="modal" data-target="#myModal7" title="Close"></i></li>
																</ul>
															</div>
														</div>
														<hr/>
														<ul class="list-inline last">
															<li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
														</ul>
													</div>
													<div class="tag" id="tag3">
														<div class="row">
															<div class="col-md-6">
																<ul class="list-inline">
																	<li><img src="assets/img/avatar-06.jpg"/><a href="">{this.state.value3}</a><p>{this.state.para3}<br/>801.3798.5853</p></li>
																</ul>
															</div>
															<div class="col-md-6">
																<ul class="list-inline right">
																	<li><i class="fa fa-pencil" aria-hidden="true" data-toggle="modal" data-target="#myModal3" title="Edit"></i></li>
																	<li><i class="fa fa-times" aria-hidden="true" data-toggle="modal" data-target="#myModal8" title="Close"></i></li>
																</ul>
															</div>
														</div>
														<hr/>
														<ul class="list-inline last">
															<li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
														</ul>
													</div>

												</div>

												<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

													<div class="tag" id="tag4">
														<div class="row">
															<div class="col-md-6">
																<ul class="list-inline">
																	<li><img src="assets/img/avatar-01.jpg"/><a href="">{this.state.value4}</a><p>{this.state.para4}<br/>845.685.5462</p></li>
																</ul>
															</div>
															<div class="col-md-6">
																<ul class="list-inline right">
																	<li><i class="fa fa-pencil" aria-hidden="true" data-toggle="modal" data-target="#myModal4" title="Edit"></i></li>
																	<li><i class="fa fa-times" aria-hidden="true" data-toggle="modal" data-target="#myModal9" title="Close"></i></li>
																</ul>
															</div>
														</div>
														<hr/>
														<ul class="list-inline last">
															<li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
														</ul>
													</div>
													<div class="tag" id="tag5">
														<div class="row">
															<div class="col-md-6">
																<ul class="list-inline">
																	<li><img src="assets/img/avatar-02.jpg"/><a href="">{this.state.value5}</a><p>{this.state.para5}<br/>957.379.5333</p></li>
																</ul>
															</div>
															<div class="col-md-6">
																<ul class="list-inline right">
																	<li><i class="fa fa-pencil" aria-hidden="true" data-toggle="modal" data-target="#myModal5" title="Edit"></i></li>
																	<li><i class="fa fa-times" aria-hidden="true" data-toggle="modal" data-target="#myModal10" title="Close"></i></li>
																</ul>
															</div>
														</div>
														<hr/>
														<ul class="list-inline last">
															<li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
														</ul>
													</div>
													<div class="tag" id="tag6">
														<div class="row">
															<div class="col-md-6">
																<ul class="list-inline">
																	<li><img src="assets/img/avatar-03.jpg"/><a href="">{this.state.value6}</a><p>{this.state.para6}<br/>618.3798.5323</p></li>
																</ul>
															</div>
															<div class="col-md-6">
																<ul class="list-inline right">
																	<li><i class="fa fa-pencil" aria-hidden="true" data-toggle="modal" data-target="#myModal6" title="Edit"></i></li>
																	<li><i class="fa fa-times" aria-hidden="true" data-toggle="modal" data-target="#myModal11" title="Close"></i></li>
																</ul>
															</div>
														</div>
														<hr/>
														<ul class="list-inline last">
															<li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
														</ul>
													</div>
													<div class="tag" id="tag7">
														<div class="row">
															<div class="col-md-6">
																<ul class="list-inline">
																	<li><img src="assets/img/avatar-04.jpg"/><a href="">{this.state.value7}</a><p>{this.state.para7}<br/>321.654.6544</p></li>
																</ul>
															</div>
															<div class="col-md-6">
																<ul class="list-inline right">
																	<li><i class="fa fa-pencil" aria-hidden="true" data-toggle="modal" data-target="#myModal7" title="Edit"></i></li>
																	<li><i class="fa fa-times" aria-hidden="true" data-toggle="modal" data-target="#myModal12" title="Close"></i></li>
																</ul>
															</div>
														</div>
														<hr/>
														<ul class="list-inline last">
															<li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
															<li><a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
														</ul>
													</div>

												</div>
											</div>
										</div>
									</div>

								</div>
							</div>

						</div>
					</div>

				{/* 	<!-- Modal --> */}
				<div class="modal fade i" id="myModal5" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Do you want to remove employee details!</h4>
						</div>
						<div class="modal-footer g">
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Ok" onClick={this.handleg.bind(this)} >Ok</button>
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" onClick={this.handle1g.bind(this)} >Cancel</button>
						</div>
					</div>
					
					</div>
				</div>
				<div class="modal fade i" id="myModal6" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Do you want to remove employee details!</h4>
						</div>
						<div class="modal-footer g">
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Ok" onClick={this.handlef.bind(this)} >Ok</button>
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" onClick={this.handle1f.bind(this)} >Cancel</button>
						</div>
					</div>
					
					</div>
				</div>
				<div class="modal fade i" id="myModal7" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Do you want to remove employee details!</h4>
						</div>
						<div class="modal-footer g">
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Ok" onClick={this.handlee.bind(this)} >Ok</button>
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" onClick={this.handle1e.bind(this)} >Cancel</button>
						</div>
					</div>
					
					</div>
				</div>
				<div class="modal fade i" id="myModal8" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Do you want to remove employee details!</h4>
						</div>
						<div class="modal-footer g">
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Ok" onClick={this.handled.bind(this)} >Ok</button>
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" onClick={this.handle1d.bind(this)} >Cancel</button>
						</div>
					</div>
					
					</div>
				</div>
				<div class="modal fade i" id="myModal9" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Do you want to remove employee details!</h4>
						</div>
						<div class="modal-footer g">
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Ok" onClick={this.handlec.bind(this)} >Ok</button>
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" onClick={this.handle1c.bind(this)} >Cancel</button>
						</div>
					</div>
					
					</div>
				</div>
				<div class="modal fade i" id="myModal10" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Do you want to remove employee details!</h4>
						</div>
						<div class="modal-footer g">
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Ok" onClick={this.handleb.bind(this)} >Ok</button>
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" onClick={this.handle1b.bind(this)} >Cancel</button>
						</div>
					</div>
					
					</div>
				</div>
				<div class="modal fade i" id="myModal11" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Do you want to remove employee details!</h4>
						</div>
						<div class="modal-footer g">
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Ok" onClick={this.handlea.bind(this)} >Ok</button>
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" onClick={this.handle1a.bind(this)} >Cancel</button>
						</div>
					</div>
					
					</div>
				</div>

				<div class="modal fade i" id="myModal12" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Do you want to remove employee details!</h4>
						</div>
						<div class="modal-footer g">
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Ok" onClick={this.handle.bind(this)} >Ok</button>
						<button type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" onClick={this.handle1.bind(this)} >Cancel</button>
						</div>
					</div>
					
					</div>
				</div>

				<div class="modal fade" id="myModal" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Change Employee Name & Section</h4>
						</div>
						<div class="modal-body">
						Name: <input type="text" name="text" placeholder="Enter name.." value={this.state.value} onChange={this.handleChange.bind(this)} /><br/><br/>
						Section: <input type="text" name="text1" placeholder="Enter section.." value={this.state.para} onChange={this.handleChanges.bind(this)} />
						</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal" >Change</button>
						</div>
					</div>
					
					</div>
				</div>

				<div class="modal fade" id="myModal1" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Change Employee Name & Section</h4>
						</div>
						<div class="modal-body">
						Name: <input type="text" name="text" placeholder="Enter name.." value={this.state.value1} onChange={this.handleChange1.bind(this)} /><br/><br/>
						Section: <input type="text" name="text1" placeholder="Enter section.." value={this.state.para1} onChange={this.handleChanges1.bind(this)} />
						</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal" >Change</button>
						</div>
					</div>
					
					</div>
				</div>

				<div class="modal fade" id="myModal2" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Change Employee Name & Section</h4>
						</div>
						<div class="modal-body">
						Name: <input type="text" name="text" placeholder="Enter name.." value={this.state.value2} onChange={this.handleChange2.bind(this)} /><br/><br/>
						Section: <input type="text" name="text1" placeholder="Enter section.." value={this.state.para2} onChange={this.handleChanges2.bind(this)} />
						</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal" >Change</button>
						</div>
					</div>
					
					</div>
				</div>

				<div class="modal fade" id="myModal3" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Change Employee Name & Section</h4>
						</div>
						<div class="modal-body">
						Name: <input type="text" name="text" placeholder="Enter name.." value={this.state.value3} onChange={this.handleChange3.bind(this)} /><br/><br/>
						Section: <input type="text" name="text1" placeholder="Enter section.." value={this.state.para3} onChange={this.handleChanges3.bind(this)} />
						</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal" >Change</button>
						</div>
					</div>
					
					</div>
				</div>

				<div class="modal fade" id="myModal4" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Change Employee Name & Section</h4>
						</div>
						<div class="modal-body">
						Name: <input type="text" name="text" placeholder="Enter name.." value={this.state.value4} onChange={this.handleChange4.bind(this)} /><br/><br/>
						Section: <input type="text" name="text1" placeholder="Enter section.." value={this.state.para4} onChange={this.handleChanges4.bind(this)} />
						</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal" >Change</button>
						</div>
					</div>
					
					</div>
				</div>

				<div class="modal fade" id="myModal5" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Change Employee Name & Section</h4>
						</div>
						<div class="modal-body">
						Name: <input type="text" name="text" placeholder="Enter name.." value={this.state.value5} onChange={this.handleChange5.bind(this)} /><br/><br/>
						Section: <input type="text" name="text1" placeholder="Enter section.." value={this.state.para5} onChange={this.handleChanges5.bind(this)} />
						</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal" >Change</button>
						</div>
					</div>
					
					</div>
				</div>

				<div class="modal fade" id="myModal6" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Change Employee Name & Section</h4>
						</div>
						<div class="modal-body">
						Name: <input type="text" name="text" placeholder="Enter name.." value={this.state.value6} onChange={this.handleChange6.bind(this)} /><br/><br/>
						Section: <input type="text" name="text1" placeholder="Enter section.." value={this.state.para6} onChange={this.handleChanges6.bind(this)} />
						</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal" >Change</button>
						</div>
					</div>
					
					</div>
				</div>

				<div class="modal fade" id="myModal7" role="dialog">
					<div class="modal-dialog">
					
					{/* <!-- Modal content--> */}
					<div class="modal-content">
						<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Change Employee Name & Section</h4>
						</div>
						<div class="modal-body">
						Name: <input type="text" name="text" placeholder="Enter name.." value={this.state.value7} onChange={this.handleChange7.bind(this)} /><br/><br/>
						Section: <input type="text" name="text1" placeholder="Enter section.." value={this.state.para7} onChange={this.handleChanges7.bind(this)} />
						</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal" >Change</button>
						</div>
					</div>
					
					</div>
			</div>

			{/* <!-- Modal END--> */}
				</div>
            </div>
        )
    }
}
export default Employees;