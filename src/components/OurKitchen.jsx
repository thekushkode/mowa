import React, { Component } from "react";
import { MDBCol, MDBRow, MDBIframe } from "mdbreact";
import './MOWAColors.css';
import Nav from "./Nav";
import Footer from "./Footer";
import kitchen from '../assets/ourkitchen.png';
import DonationModal from "./DonationModal";

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
                        <MDBRow>
                            <MDBCol md='6' className='mx-auto'>
                                <MDBIframe title='Janelle Monae MOWA video' src="https://www.youtube.com/embed/l-OHizEwn5Y"></MDBIframe>
                            </MDBCol>
                        </MDBRow>

                        <p className="mowabluetext w-responsive mt-4 mx-auto text-justify font-weight-bold">
                            Last year, with the help of OUR community, OUR team at Meals On Wheels Atlanta prepared and delivered over 519,000 nutritious meals.  With hunger on the rise and the fact that seniors are at the greatest health risk for COVID-19, we expect to exceed OUR plans this year by almost an additional 100,000 meals.  Even with this huge increase, there will still be hundreds of seniors on OUR (can’t) waitlist.  Could you imagine your mother, grandmother or grandfather just waiting for food?
                        </p>
                        <p className="mt-2 mowabluetext w-responsive mx-auto text-justify font-weight-bold">
                            We are thrilled to announce OUR new project called “Our Kitchen.” It’s a community collaboration of designers, architects, builders, chefs, gardeners, and more.  We’re getting ready to build OUR answer to ending senior hunger in OUR community. We will convert more than 10,000 square feet of existing space into a new state-of-the-art commercial kitchen that will enable us to triple OUR meal production. We’ll add a gourmet demo kitchen for cooking classes, an organic garden and a beautiful community event space.
                        </p>
                        <DonationModal />
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