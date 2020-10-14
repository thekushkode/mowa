import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer, MDBNavLink, MDBCard, MDBCardBody, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselCaption
} from "mdbreact";
import { Link } from "react-router-dom";
import "./Slideshow.css";
import Nav from "./Nav";
import videoMp4 from '../assets/SlideshowVids/mowaslideshow.mp4';
import videoOgg from '../assets/SlideshowVids/mowaslideshow.ogg';
import videoWebm from '../assets/SlideshowVids/mowaslideshow.webm';
import Footer from "./Footer";
import streakpic from '../assets/blackman1.png';
import old2 from '../assets/old2.jpg';
import logo from '../assets/mowaaa.png';
import Celebs from "./Celebs";


class Slideshow extends React.Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        // const overlay = (
        //     <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
        // );
        return (
            <div>
                <header style={{ marginBottom: '56px' }}>
                    <Nav />
                </header>
                <div id="videobackground">
                    <MDBView>
                        {/* <video className="video-intro" playsInline autoPlay muted loop>
                            <source src={videoOgg} type='video/ogg;codecs="vp8, vorbis"' />
                            <source src={videoMp4} type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
                            <source src={videoWebm} type='video/webm;codecs="vp8, vorbis"' />
                        </video> */}
                        <MDBCarousel
                            activeItem={1}
                            length={3}
                            showControls={false}
                            showIndicators={false}
                            className="z-depth-1"
                            slide
                        >
                            <MDBCarouselInner>
                                <MDBCarouselItem itemId="1">
                                    <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                                            alt="First slide"
                                        />
                                        <MDBMask overlay="black-light" />
                                    </MDBView>
                                    <MDBMask className="d-flex justify-content-center align-items-center gradient mobile" style={{ zIndex: '999' }}>
                                        <MDBContainer className="px-sm-0">
                                            <MDBRow>
                                                <MDBCol md="12" className="mb-4 mt-3 white-text text-center">
                                                    <img src={logo} alt='text mowa logo' className='w-75 mx-auto' />
                                                    <hr className="hr-light my-4 w-75" />
                                                    <Link to='/donate'>
                                                        <MDBBtn size='lg' outline rounded color="white" >
                                                            <MDBIcon size='lg' className='mr-1 animated heartBeat infinite' icon="heart" /> Donate
                                            </MDBBtn>
                                                    </Link>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBContainer>
                                    </MDBMask>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="2">
                                    <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                                            alt="Second slide"
                                        />
                                        <MDBMask overlay="black-strong" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive">Strong mask</h3>
                                        <p>Second text</p>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="3">
                                    <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                                            alt="Third slide"
                                        />
                                        <MDBMask overlay="black-slight" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive">Slight Mast</h3>
                                        <p>Third text</p>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                            </MDBCarouselInner>
                        </MDBCarousel>
                        {/* <MDBMask className="d-flex justify-content-center align-items-center gradient mobile" style={{ zIndex: '999' }}>
                            <MDBContainer className="px-sm-0">
                                <MDBRow>
                                    <MDBCol md="12" className="mb-4 mt-3 white-text text-center">
                                        <img src={logo} alt='text mowa logo' className='w-75 mx-auto' />
                                        <hr className="hr-light my-4 w-75" />
                                        <h4 className="subtext-header mt-2 mb-4">
                                            Supporting senior independence through meals, shelter, education, and community.
                                    </h4>
                                        <Link to='/donate'>
                                            <MDBBtn size='lg' outline rounded color="white" >
                                                <MDBIcon size='lg' className='mr-1 animated heartBeat infinite' icon="heart" /> Donate
                                            </MDBBtn>
                                        </Link>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBMask> */}
                    </MDBView>
                    {/* <div>
                    <MDBCarousel
                        activeItem={1}
                        length={3}
                        showControls={false}
                        showIndicators={false}
                        className="z-depth-1"
                        slide
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
                                        alt="First slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"
                                        alt="Second slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
                                        alt="Third slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel> */}
                </div>
                <section>
                    {/* <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Our Story
                        </h2>
                    <MDBRow className='mt-4 mx-4'>
                        <MDBCol md='6' lg='6' >
                            <img style={{ width: '80%' }} src={oldguy} alt='old man eating soup' />
                        </MDBCol>
                        <MDBCol className='column' md='6' lg='6' >
                            <h4>
                                Meals On Wheels Atlanta (MOWA) was founded in 1965 to support seniors struggling with poverty, food insecurity, and social isolation. Over more than 50 years, we have grown from a small soup kitchen to an organization serving more than 514,000 meals each year throughout the Atlanta area. We have also expanded our program offerings to respond to other critical needs in our community. We now offer multiple services to support both older adults and veterans, including home-delivered and congregate meals, home repair services, and a food pantry.
                                </h4>

                        </MDBCol>
                    </MDBRow> */}

                    {/* OUR STORY */}
                    <MDBCard className="px-5 pb-5">
                        <MDBCardBody>
                            <h2 className="h1-responsive font-weight-bold mowabluetext text-center mb-5 mt-2">
                                Our Story
                            </h2>
                            <p className="text-center text-muted w-responsive mx-auto mb-5">
                                At Meals on Wheels Atlanta, our mission is to support senior independence through meals, shelter, education, and community. We hope our story inspires you to get involved and bring an end to senior hunger in Atlanta!
                            </p>
                            <MDBRow>
                                <MDBCol lg="5">
                                    <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                        <img
                                            className="img-fluid"
                                            src={old2}
                                            alt=""
                                        />
                                        {/* <a href="#!">
                                            <MDBMask overlay="white-slight" />
                                        </a> */}
                                    </MDBView>
                                </MDBCol>
                                <MDBCol lg="7">

                                    <p>
                                        Meals On Wheels Atlanta (MOWA) was founded in 1965 to support seniors struggling with poverty, food insecurity, and social isolation. Over more than 50 years, we have grown from a small soup kitchen to an organization serving more than 514,000 meals each year throughout the Atlanta area. We have also expanded our program offerings to respond to other critical needs in our community. We now offer multiple services to support both older adults and veterans, including home-delivered and congregate meals, home repair services, and a food pantry.
                                    </p>
                                    <div className='d-flex flex-column'>

                                        <MDBBtn size="md" className="waves-light btn-rounded blue-gradient">
                                            <MDBNavLink className='p-0' style={{ color: 'white', fontSize: '20px' }} to='/donate'>Donate Now</MDBNavLink>
                                        </MDBBtn>
                                        <MDBBtn size="md" className="waves-light btn-rounded aqua-gradient">
                                            <MDBNavLink className='p-0' style={{ color: 'white', fontSize: '20px' }} to='/donate'>Volunteer</MDBNavLink>
                                        </MDBBtn>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </section>

                {/* <hr style={{ borderTop: '1px solid #1455D9' }} className='mx-4' /> */}

                {/* STREAK */}
                <div>
                    <div className='streak streak-photo streak-long-2' style={{ backgroundImage: "url(" + streakpic + ")" }}>
                        <div className='mask flex-center rgba-black-strong'>
                            <MDBContainer>
                                <h1 className='text-center white-text my-3 text-uppercase font-weight-bold'>Our Impact</h1>
                                <MDBRow className='white-text text-center'>
                                    <MDBCol md='3' className='mb-2'>
                                        <MDBIcon icon="utensils" size="2x" className="white-text" />
                                        <h1 className='mx-2 font-weight-bold'>519,000</h1>
                                        <p className='font-weight-bold'>Meals Served</p>
                                    </MDBCol>
                                    <MDBCol md='3' className='mb-2'>
                                        <MDBIcon icon="clock" size="2x" className="white-text" />
                                        <h1 className='mx-2 font-weight-bold'>21,914</h1>
                                        <p className='font-weight-bold'>Volunteer Hours</p>
                                    </MDBCol>
                                    <MDBCol md='3' className='mb-2'>
                                        <MDBIcon icon="dollar-sign" size="2x" className="white-text" />
                                        <h1 className='mx-2 font-weight-bold'>557,273</h1>
                                        <p className='font-weight-bold'>Dollars Saved</p>
                                    </MDBCol>
                                    <MDBCol md='3' className='mb-2'>
                                        <MDBIcon icon="home" size="2x" className="white-text" />
                                        <h1 className='mx-2 font-weight-bold'>372</h1>
                                        <p className='font-weight-bold'>Homes Repaired</p>
                                    </MDBCol>
                                </MDBRow>
                                <figcaption className='figure-caption text-center white-text mb-2'>**2019 Results</figcaption>
                            </MDBContainer>
                        </div>
                    </div>
                    {/* </MDBStreak> */}
                </div>


                {/* CELEBRITY ENDORSEMENTS */}
                <div className='mb-5'>
                    <h2 className="h1-responsive font-weight-bold mowabluetext text-center my-5">
                        MOWA Ambassadors
                    </h2>
                    <p className="lead text-muted w-responsive text-center mx-auto mb-5">
                        Atlanta's most well-known residents know that Meals on Wheels Atlanta needs their support. We are proud to have such an amazing, diverse community of athletes, entertainers, and government leaders standing behind us in the fight to end Senior hunger!
                    </p>
                    <div>
                        <Celebs />
                    </div>
                </div>

                {/* </div> */}


                <footer style={{ marginTop: '-25px' }}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default Slideshow;