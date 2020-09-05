import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer, MDBStreak
} from "mdbreact";
import "./Home.css";
import Nav from "./Nav";
import videoMp4 from '../assets/elder1.mp4';
import videoOgg from '../assets/elder1.ogg';
import videoWebm from '../assets/elder1.webm';
import Footer from "./Footer";
import streakpic from '../assets/oldladyandwoman.jpg';
import oldguy from '../assets/oldguy.jpg';

class VideoBackgroundPage extends React.Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        // const overlay = (
        //     <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
        // );
        return (
            <div>
                <header>
                    <Nav />
                </header>
                <div id="videobackground">
                    <MDBView>
                        <video className="video-intro" playsInline autoPlay muted loop>
                            <source src={videoOgg} type='video/ogg;codecs="vp8, vorbis"' />
                            <source src={videoMp4} type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
                            <source src={videoWebm} type='video/webm;codecs="vp8, vorbis"' />
                        </video>
                        <MDBMask className="d-flex justify-content-center align-items-center gradient">
                            <MDBContainer className="px-sm-0">
                                <MDBRow>
                                    <MDBCol md="12" className="mb-4 white-text text-center">
                                        <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                                            Meals on Wheels{" "}
                                        </h3>
                                        <hr className="hr-light my-4 w-75" />
                                        <h4 className="subtext-header mt-2 mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                            deleniti consequuntur nihil.
                                    </h4>
                                        <MDBBtn outline rounded color="white" href="/donate">
                                            <MDBIcon className='mr-1' icon="heart" /> Donate
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBMask>
                    </MDBView>
                    <div>
                        <MDBRow className='mt-4 mx-4'>
                            <MDBCol md='6' lg='6' >
                                <img style={{ width: '80%' }} src={oldguy} alt='old man eating soup' />
                            </MDBCol>
                            <MDBCol className='column' md='6' lg='6' >
                                <h4>
                                    Meals On Wheels Atlanta (MOWA) was founded in 1965 to support seniors struggling with poverty, food insecurity, and social isolation. Over more than 50 years, we have grown from a small soup kitchen to an organization serving more than 514,000 meals each year throughout the Atlanta area. We have also expanded our program offerings to respond to other critical needs in our community. We now offer multiple services to support both older adults and veterans, including home-delivered and congregate meals, home repair services, and a food pantry.
                                </h4>

                            </MDBCol>
                        </MDBRow>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <MDBStreak className='w-auto' size="sm" by="MOW ATL" overlayClass="white-text rgba-black-strong" photo={streakpic}>
                            Our mission is to support senior independence through meals, shelter, education, and community.
                        </MDBStreak>
                    </div>

                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default VideoBackgroundPage;