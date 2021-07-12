import React, { Component } from "react";
import { MDBCol, MDBRow, MDBIframe, MDBBtn, MDBIcon, MDBAvatar } from "mdbreact";
import './MOWAColors.css';
import Nav from "./Nav";
import Footer from "./Footer";
import kitchen from '../assets/ourkitchen.png';
import DonationModal from "./DonationModal";
import atlmag from '../assets/atlmag.jpg';
import asdsky from '../assets/asdsky.jpg';
import choate from '../assets/choate.jpg';
import designgalleria from '../assets/designgalleria.jpg';

class OurKitchen extends Component {

    state = {
        hidden: '',
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <header style={{ marginBottom: '56px' }}>
                    <Nav />
                </header>
                <div>
                    <div className="pb-5 px-4 text-center">
                        <img src={kitchen} className='d-block w-75 mx-auto img-fluid' alt='our kitchen logo' />
                        {/* <MDBRow>
                            <MDBCol md='6' className='mx-auto'>
                                <MDBIframe title='Janelle Monae MOWA video' src="https://www.youtube.com/embed/-rDw1KTImzg"></MDBIframe>
                            </MDBCol>
                        </MDBRow> */}
                        <p className="mowabluetext w-responsive mt-4 mx-auto text-justify font-weight-bold">
                            Last year, Meals On Wheels Atlanta (MOWA) prepared and delivered over 600,000 nutritious meals to our homebound senior neighbors and expect to provide an additional 100,000 more this year. But with hunger continuing to rise, and the escalated health risks from Covid-19, there are still so many more vulnerable seniors on our (can’t) waitlist desperate for food. Could you imagine your mother, grandmother or grandfather just waiting for food?
                        </p>
                        <p className="mowabluetext w-responsive mt-4 mx-auto text-justify font-weight-bold">
                            Introducing Our Kitchen.
                        </p>
                        <p className="mt-2 mowabluetext w-responsive mx-auto text-justify font-weight-bold">
                            Thanks to the generous support from our community, a collaboration of designers, architects, builders, chefs, and gardeners, will convert more than 10,000 square feet into a new state-of-the-art commercial kitchen, organic garden and community areas. This new space will triple meal production, allowing us to lift the burden of hunger for our senior neighbors.
                        </p>
                        <div className='d-flex justify-content-center'>
                            <DonationModal />
                            <MDBBtn href='https://ourkitchenwishlist.com/' className='mowalightblue btn-rounded font-weight-bold'>
                                Wish List
                                <MDBIcon fas icon="list" className="ml-1" />
                            </MDBBtn>
                        </div>
                        <div className='d-flex justify-content-around mt-5'>
                            <MDBAvatar
                                tag="img"
                                src={atlmag}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <MDBAvatar
                                tag="img"
                                src={asdsky}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <MDBAvatar
                                tag="img"
                                src={choate}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <MDBAvatar
                                tag="img"
                                src={designgalleria}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                        </div>
                    </div>
                </div>
                <footer style={{ marginTop: '-25px' }}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default OurKitchen;