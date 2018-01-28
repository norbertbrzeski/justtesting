import React, { Component } from "react";

import Mail from 'react-icons/lib/md/mail'
import Face from 'react-icons/lib/md/face'
import Box from 'react-icons/lib/md/account-box'
import Scanner from 'react-icons/lib/md/scanner'
import Facebook from 'react-icons/lib/fa/facebook'
import Twitter from 'react-icons/lib/fa/twitter'
import GooglePlus from 'react-icons/lib/fa/google-plus'

import { Parallax } from 'react-parallax';
import './App.css'
import {Image} from 'react-bootstrap'
import firstPhoto from './photos/tran7.png'
import secondPhoto from './photos/tran2.png'
import thirdPhoto from './photos/tran6.png'
import {Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import $ from 'jquery'
import {Nav,NavItem,Navbar,MenuItem,NavDropdown} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>


          <Navbar inverse collapseOnSelect>
          <Navbar.Header>
              <Navbar.Brand>
                  <a href="#brand">React-Bootstrap</a>
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
              <Nav>
                  <NavItem eventKey={1} href="#">
                      Link
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                      Link
                  </NavItem>
                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1}>Action</MenuItem>
                      <MenuItem eventKey={3.2}>Another action</MenuItem>
                      <MenuItem eventKey={3.3}>Something else here</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.3}>Separated link</MenuItem>
                  </NavDropdown>
              </Nav>
              <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                      Link Right
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                      Link Right
                  </NavItem>
              </Nav>
          </Navbar.Collapse>
      </Navbar>;



          <Parallax
              blur={{ min: -23, max: 15 }}
              bgImage={require('./images/bg3.jpg')}
              bgImageAlt="second"
              strength={200}
          >
              <div className="mainHeader">
                  <div className="container">
                      <div className="intro-text">
                          <div className="intro-lead-in">Welcome To Our Studio!</div>
                          <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
                      </div>
                  </div>
              </div>
              <div style={{ height: '50vh' }} />
          </Parallax>


          <section id="services">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <h2 className="section-heading text-uppercase">Services</h2>
                          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                      </div>
                  </div>
                  <div className="row text-center">
                      <div className="col-md-3">
            <span className="fa-stack fa-4x">

             <Scanner size={50}/>
            </span>
                          <h4 className="service-heading">E-Commerce</h4>
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                      </div>
                      <div className="col-md-3">
            <span className="fa-stack fa-4x">
          <Box size={50} />
            </span>
                          <h4 className="service-heading">Responsive Design</h4>
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                      </div>
                      <div className="col-md-3">
            <span className="fa-stack fa-4x">
            <Mail size={50}/>
            </span>
                          <h4 className="service-heading">Web Security</h4>
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                      </div>
                      <div className="col-md-3">
            <span className="fa-stack fa-4x">
            <Mail size={50}/>
            </span>
                          <h4 className="service-heading">Web Security</h4>
                          <p className="text-muted">Lorem ipsum dolor sit amet,maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                      </div>
                  </div>
              </div>
          </section>

          <Parallax
              blur={{ min: -23, max: 15 }}
              bgImage={require('./images/bg1.jpg')}
              bgImageAlt="second"
              strength={200}
          >
              Blur transition from min to max
              <div style={{ height: '400px' }} />
          </Parallax>


          <section className="bg-light" id="team">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-sm-4">
                          <div className="team-member">

                              <Image className='img-fix' src={firstPhoto} rounded responsive/>  <h4>Norbert Brzeski</h4>

                              <p className="text-muted">Lead Designer</p>
                              <ul className="list-inline social-buttons">
                                  <li className="list-inline-item">
                                      <a className='twcolor' href="https://twitter.com/" target="_blank">
                                          <Twitter size={30}/>
                                      </a>
                                  </li>
                                  <li className="list-inline-item">
                                      <a className='fbcolor' href="https://www.facebook.com" target="_blank">
                                          <Facebook size={30}/>
                                      </a>
                                  </li>
                                  <li className="list-inline-item">
                                      <a className='gcolor' href="https://plus.google.com/" target="_blank">
                                          <GooglePlus size={30}/>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-sm-4">
                          <div className="team-member">
                              <Image src={secondPhoto} rounded responsive/>

                              <h4>Piotr Barcik</h4>

                              <p className="text-muted">Lead Marketer</p>
                              <ul className="list-inline social-buttons">
                                  <li className="list-inline-item">
                                      <a className='twcolor' href="https://twitter.com/" target="_blank">
                                          <Twitter size={30}/>
                                      </a>
                                  </li>
                                  <li className="list-inline-item">
                                      <a className='fbcolor' href="https://www.facebook.com" target="_blank">
                                          <Facebook  size={30}/>   </a>
                                  </li>
                                  <li className="list-inline-item">
                                      <a className='gcolor' href="https://plus.google.com/" target="_blank">
                                          <GooglePlus size={30}/>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-sm-4">
                          <div className="team-member">

                              <Image src={thirdPhoto} rounded responsive/>
                              <h4>Marcin Fortuna</h4>

                              <p className="text-muted">Lead Developer</p>
                              <ul className="list-inline social-buttons">
                                  <li className="list-inline-item">
                                      <a className='twcolor' href="https://twitter.com/" target="_blank">
                                          <Twitter size={30}/>
                                      </a>
                                  </li>
                                  <li className="list-inline-item">
                                      <a className='fbcolor' href="https://www.facebook.com" target="_blank">
                                          <Facebook size={30}/>                                                </a>
                                  </li>
                                  <li className="list-inline-item">
                                      <a className='gcolor' href="https://plus.google.com/" target="_blank" >
                                          <GooglePlus  size={30}/>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-8 mx-auto text-center">
                      </div>
                  </div>
              </div>
          </section>


          <Parallax
              blur={{ min: -23, max: 15 }}
              bgImage={require('./images/bg2.jpg')}
              bgImageAlt="second"
              strength={200}
          ><div className='mainfooter'>Copyright The Others © 2017</div>
              <div style={{ height: '300px' }} />
          </Parallax>




          <button  id="myBtn">Top</button>
      </div>
    );
  }
    componentDidMount() {
        $("#myBtn").hide().click(function(){
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });


        $(document).scroll(function() {
            let y = $(this).scrollTop();
            if (y > 100) {
                $('#myBtn').fadeIn();
            } else {
                $('#myBtn').fadeOut();
            }
        });
    }
}

export default App;
