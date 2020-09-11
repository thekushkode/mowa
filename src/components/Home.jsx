import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer, MDBStreak, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCard, MDBCardBody
} from "mdbreact";
import "./Home.css";
import Nav from "./Nav";
import videoMp4 from '../assets/elder1.mp4';
import videoOgg from '../assets/elder1.ogg';
import videoWebm from '../assets/elder1.webm';
import Footer from "./Footer";
import streakpic from '../assets/oldladyandwoman.jpg';
import oldguy from '../assets/oldguy.jpg';
import oldpeople from '../assets/oldpeople.png';
import feeding from '../assets/feed.png';

class VideoBackgroundPage extends React.Component {
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
                        <video className="video-intro" playsInline autoPlay muted loop>
                            <source src={videoOgg} type='video/ogg;codecs="vp8, vorbis"' />
                            <source src={videoMp4} type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
                            <source src={videoWebm} type='video/webm;codecs="vp8, vorbis"' />
                        </video>
                        <MDBMask className="d-flex justify-content-center align-items-center gradient">
                            <MDBContainer className="px-sm-0">
                                <MDBRow>
                                    <MDBCol md="12" className="mb-4 mt-3 white-text text-center">
                                        <h3 className="display-3 font-weight-bold mb-0 pt-md-3">
                                            Meals on Wheels ATL{" "}
                                        </h3>
                                        <hr className="hr-light my-4 w-75" />
                                        <h4 className="subtext-header mt-2 mb-4">
                                            Supporting senior independence through meals, shelter, education, and community.
                                    </h4>
                                        <MDBBtn outline rounded color="white" href="/donate" className='pb-2'>
                                            <MDBIcon className='mr-1' icon="heart" /> Donate
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBMask>
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
                <section className='mb-5'>
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
                    <MDBCard className="px-5 pb-5">
                        <MDBCardBody>
                            <h2 className="h1-responsive font-weight-bold mdb-color-text text-center my-5">
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
                                            src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                                            alt=""
                                        />
                                        <a href="#!">
                                            <MDBMask overlay="white-slight" />
                                        </a>
                                    </MDBView>
                                </MDBCol>
                                <MDBCol lg="7">

                                    <p>
                                        Meals On Wheels Atlanta (MOWA) was founded in 1965 to support seniors struggling with poverty, food insecurity, and social isolation. Over more than 50 years, we have grown from a small soup kitchen to an organization serving more than 514,000 meals each year throughout the Atlanta area. We have also expanded our program offerings to respond to other critical needs in our community. We now offer multiple services to support both older adults and veterans, including home-delivered and congregate meals, home repair services, and a food pantry.
                                    </p>

                                    <MDBBtn size="md" className="waves-light blue-gradient">
                                        Donate Now
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </section>

                {/* <hr style={{ borderTop: '1px solid #1455D9' }} className='mx-4' /> */}

                <section className='mx-5 my-5'>
                    <h2 className="h1-responsive font-weight-bold mdb-color-text text-center my-5">
                        What We Do!
                        </h2>
                    <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam.
                        </p>

                    <MDBRow>
                        <MDBCol md="4">
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon
                                        icon="truck"
                                        size="2x"
                                        className="blue-text"
                                    />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3 blue-text">Home Deliveries</h5>
                                    <p className="text-muted">
                                        Our team, along with our helpful and much needed volunteers, hit the streets every week to deliver nutritious meals to qualifying Atlanta seniors. Check out our volunteers page to get involved!
                                            </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="users" size="2x" className="blue-text" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3 blue-text">Congregate Meals</h5>
                                    <p className="text-muted">
                                        MOWA also provides meals for congregate settings. As with all of the meals that we serve, our congregate meals are nutritious and well-balanced, but crafted to be enjoyable too!
                                            </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="carrot" size="2x" className="blue-text" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3 blue-text">MOWA Fresh Food Partnership</h5>
                                    <p className="text-muted">
                                        MOWA partners with farmers markets, local growers, and businesses to provide fresh fruits and vegetables as part of a balanced meal plan to improve the nutrition and health of qualifying seniors.
                                            </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="4" className="text-center">
                            <img
                                className="img-fluid"
                                src={feeding}
                                alt=""
                            />
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="hammer" size="2x" className="blue-text" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3 blue-text">Home Repair</h5>
                                    <p className="text-muted">
                                        Home repair is essential to homeowners as it prevents seniors from being displaced from their homes
                                        and being forced into transitional housing or shelters because of code violations.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="shopping-cart" size="2x" className="blue-text" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3 blue-text">Food Pantry</h5>
                                    <p className="text-muted">
                                        MOWA's Pantry Program serves as a critical stop-gap for seniors waiting to receive home-delivered meals. Seniors receive a bag filled with a month-long supply of shelf-stable items
                                            </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="dog" size="2x" className="blue-text" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3 blue-text">Pet Food Program</h5>
                                    <p className="text-muted">
                                        For many of our homebound clients, their pets are the only family they have. However, income restrictions create a struggle to provide for their furry friends.
                                            </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </section>

                {/* <div style={{ marginTop: '20px' }}>
                        <MDBStreak className='w-auto' size="sm" by="MOW ATL" overlayClass="white-text rgba-black-strong" photo={streakpic}>
                            Our mission is to support senior independence through meals, shelter, education, and community.
                        </MDBStreak>
                    </div> */}

                {/* <hr className='my-4' /> */}

                <div>
                    <div className='streak streak-photo streak-long-2' style={{ backgroundImage: "url(" + streakpic + ")", height: '220px' }}>
                        <div className='mask flex-center rgba-black-strong'>
                            <MDBContainer>
                                <h1 className='text-center amber-text my-3 text-uppercase font-weight-bold'>Our Impact</h1>
                                <MDBRow className='amber-text text-center'>
                                    <MDBCol md='3' className='mb-2'>
                                        <MDBIcon icon="utensils" size="2x" className="amber-text" />
                                        <h1 className='mx-2 font-weight-bold'>514,765</h1>
                                        <p className='font-weight-bold'>Meals Served</p>
                                    </MDBCol>
                                    <MDBCol md='3' className='mb-2'>
                                        <MDBIcon icon="clock" size="2x" className="amber-text" />
                                        <h1 className='mx-2 font-weight-bold'>21,914</h1>
                                        <p className='font-weight-bold'>Volunteer Hours</p>
                                    </MDBCol>
                                    <MDBCol md='3' className='mb-2'>
                                        <MDBIcon icon="dollar-sign" size="2x" className="amber-text" />
                                        <h1 className='mx-2 font-weight-bold'>557,273</h1>
                                        <p className='font-weight-bold'>Dollars Saved</p>
                                    </MDBCol>
                                    <MDBCol md='3' className='mb-2'>
                                        <MDBIcon icon="home" size="2x" className="amber-text" />
                                        <h1 className='mx-2 font-weight-bold'>372</h1>
                                        <p className='font-weight-bold'>Homes Repaired</p>
                                    </MDBCol>
                                </MDBRow>
                                <figcaption className='figure-caption text-center amber-text mb-2'>**2019 Results</figcaption>
                            </MDBContainer>
                        </div>
                    </div>
                    {/* </MDBStreak> */}
                </div>

                {/* </div> */}
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default VideoBackgroundPage;