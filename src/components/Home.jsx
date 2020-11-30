import React from "react";
import {
    MDBMask,
    MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody
} from "mdbreact";
import { Link } from "react-router-dom";
import "./Home.css";
import './MOWAColors.css';
import Nav from "./Nav";
import videoMp4 from '../assets/backgroundvids/atlsmall.mp4';
import videoOgg from '../assets/backgroundvids/atl.ogg';
import videoWebm from '../assets/backgroundvids/atl.webm';
import Footer from "./Footer";
import streakpic from '../assets/blackman1.jpg';
import old2 from '../assets/blacklady1.jpeg';
import logo from '../assets/mowaaa.png';
import poster from '../assets/backgroundvids/mowaposter.jpg';
import Celebs from "./Celebs";
import AlertPage from "./Alert";
import kitchen from '../assets/mowakitchen.png';
import wishlist from '../assets/wishlistbkgrnd.png';


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
                <div id="videobackground" style={{ marginTop: '-200px' }}>
                    <MDBView>
                        <video className="video-intro" playsInline autoPlay muted loop poster={poster}>
                            <source src={videoOgg} type='video/ogg;codecs="vp8, vorbis"' />
                            <source src={videoMp4} type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
                            <source src={videoWebm} type='video/webm;codecs="vp8, vorbis"' />
                        </video>
                        <MDBMask className="d-flex justify-content-center align-items-center gradient">
                            <MDBContainer className="px-sm-0">
                                <MDBRow>
                                    <MDBCol md="12" className="mb-4 mt-3 white-text text-center">
                                        {/* <h3 className="display-3 font-weight-bold mb-0 pt-md-3">
                                            Meals on Wheels ATL
                                        </h3> */}
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
                                        <div className='mt-5'>
                                            <AlertPage />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBMask>
                    </MDBView>
                </div>
                <section>
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
                                    </MDBView>
                                </MDBCol>
                                <MDBCol lg="7">

                                    <p>
                                        Meals On Wheels Atlanta (MOWA) was founded in 1965 to support seniors struggling with poverty, food insecurity, and social isolation. Over more than 50 years, we have grown from a small soup kitchen to an organization serving more than 514,000 meals each year throughout the Atlanta area. We have also expanded our program offerings to respond to other critical needs in our community. We now offer multiple services to support both older adults and veterans, including home-delivered and congregate meals, home repair services, and a food pantry for both seniors and their pets.
                                    </p>
                                    <div>

                                        <Link to='/donate'>
                                            <MDBBtn size="lg" className="waves-light btn-rounded mowablue">
                                                Donate Now
                                            </MDBBtn>
                                        </Link>
                                        <Link to='/volunteer'>
                                            <MDBBtn size="lg" className="waves-light btn-rounded mowaorange">
                                                Volunteer
                                            </MDBBtn>
                                        </Link>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </section>

                {/* WISH LIST */}
                <div>
                    <MDBCard className='card-image' style={{ backgroundImage: "url(" + kitchen + ")" }}>
                        <div className="rgba-black-strong pb-5 px-2 text-center">
                            <div className="my-5 px-1 text-center">
                                <h2 className='white-text font-weight-bold'>You're Invited to the "Our Kitchen" Wish List Shower!</h2>
                            </div>
                            <MDBRow>
                                <MDBCol>
                                    <p className='white-text font-weight-bold'>It takes a lot to prepare over 600,000 meals per year. That's why we are reimagining over 18,000 sq ft in our current building to include a new, state of the art commercial kitchen. This will enable us to TRIPLE our meal production!</p>
                                    <p className='white-text font-weight-bold' >It's easy to make an impact. Just visit our Wish List and select an item an that you want to "buy". Your donation goes directly to helping us stock our commercial kitchen!</p>
                                    <MDBBtn className='btn-rounded mowalightblue font-weight-bold' href='https://ourkitchenwishlist.com/' target='_blank'>View Our Wish List</MDBBtn>
                                </MDBCol>
                                <MDBCol>
                                    <img src={wishlist} alt='our kitchen wish list' className='d-block img-fluid w-75 mx-auto' />
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCard>
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

                {/* STREAK */}
                <div>
                    <div className='streak streak-photo streak-long-2' style={{ backgroundImage: "url(" + streakpic + ")" }}>
                        <div className='mask flex-center rgba-black-strong'>
                            <MDBContainer>
                                <h1 className='text-center mowaorangetext my-3 text-uppercase font-weight-bold'>Our Impact</h1>
                                <MDBRow className='mowaorangetext text-center'>
                                    <MDBCol md='3' className='mb-2'>
                                        <MDBIcon icon="utensils" size="2x" className="mowaorangetext" />
                                        <h1 className='mx-2 font-weight-bold'>519,000</h1>
                                        <p className='font-weight-bold'>Meals Served</p>
                                    </MDBCol>
                                    <MDBCol md='3' className='mb-2'>
                                        <MDBIcon icon="clock" size="2x" className="mowaorangetext" />
                                        <h1 className='mx-2 font-weight-bold'>21,914</h1>
                                        <p className='font-weight-bold'>Volunteer Hours</p>
                                    </MDBCol>
                                    <MDBCol md='3' className='mb-2'>
                                        <MDBIcon icon="dollar-sign" size="2x" className="mowaorangetext" />
                                        <h1 className='mx-2 font-weight-bold'>557,273</h1>
                                        <p className='font-weight-bold'>Dollars Saved</p>
                                    </MDBCol>
                                    <MDBCol md='3' className='mb-2'>
                                        <MDBIcon icon="home" size="2x" className="mowaorangetext" />
                                        <h1 className='mx-2 font-weight-bold'>372</h1>
                                        <p className='font-weight-bold'>Homes Repaired</p>
                                    </MDBCol>
                                </MDBRow>
                                <figcaption className='figure-caption text-center mowaorangetext mb-2'>**2019 Results</figcaption>
                            </MDBContainer>
                        </div>
                    </div>
                    {/* </MDBStreak> */}
                </div>

                <footer style={{ marginTop: '-25px' }}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default VideoBackgroundPage;