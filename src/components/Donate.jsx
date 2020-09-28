import React, { Component } from "react";
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBTabPane,
    MDBNavLink,
    MDBIcon,
    MDBNav,
    MDBNavItem,
    MDBTabContent,
    MDBBtn,
    MDBInput,
    MDBCard,
    MDBAvatar,
    MDBIframe
} from "mdbreact";
import Nav from "./Nav";
import DonationModal from './DonationModal';
import MonthlyDonationModal from './MonthlyDonationModal';
import Footer from "./Footer";
import peeps from '../assets/oldladyandwoman.jpg';
import kitchen from '../assets/kitchen.png';
import nuts from '../assets/purposenuts.png';
import ga from '../assets/ga.png';
import meal from '../assets/meal.png';
import chefrob from '../assets/chefrob.png';


class Donate extends Component {

    state = {
        activeItemJustified: "1"
    }

    toggleJustified = tab => e => {
        if (this.state.activeItemJustified !== tab) {
            this.setState({
                activeItemJustified: tab
            });
        }
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <header style={{ marginBottom: '56px' }}>
                    <Nav />
                </header>
                {/* <div>
                    <MDBRow>
                        <MDBCol md="12" className="mb-3">
                            <img src={ladies} className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                    </MDBRow>
                </div> */}
                <div>
                    <MDBCard
                        className="card-image"
                        style={{
                            backgroundImage: "url(" + peeps + ")"
                        }}
                    >
                        <div className="rgba-black-strong pb-5 px-2 text-center">

                            <div className="my-5 px-1 text-center">
                                <h2 className="h1-responsive white-text font-weight-bold my-5">
                                    ATL Seniors Need Your Support!
                                </h2>
                                <p className="white-text w-responsive mx-auto mb-5">
                                    Meals On Wheels Atlanta needs your support to fight senior hunger in our community! While financial support creates the largest impact, we also have a great need for volunteers and commercial kitchen supplies. Thank you in advance for your generosity!
                                    
                                </p>
                            </div>
                            <MDBContainer>
                                <MDBNav tabs className="nav-justified" color='primary'>
                                    <MDBNavItem>
                                        <MDBNavLink link to="#" active={this.state.activeItemJustified === "1"} onClick={this.toggleJustified("1")} role="tab" >
                                            <MDBIcon className='mr-1' icon="utensils" /> Meals
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink link to="#" active={this.state.activeItemJustified === "2"} onClick={this.toggleJustified("2")} role="tab" >
                                            <MDBIcon className='mr-1' icon="blender" /> Our Kitchen
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink link to="#" active={this.state.activeItemJustified === "3"} onClick={this.toggleJustified("3")} role="tab" >
                                            <MDBIcon className='mr-1' icon="hand-holding-heart" /> Purposeful Foods
                                        </MDBNavLink>
                                    </MDBNavItem>
                                </MDBNav>
                                <MDBTabContent
                                    className="card"
                                    activeItem={this.state.activeItemJustified}
                                >
                                    <MDBTabPane tabId="1" role="tabpanel">
                                        <p className="mt-2 text-justify">
                                            Thank you for helping Meals On Wheels Atlanta fight senior hunger in our community.
                                            Your generosity means the world to us and to those we serve.
                                            For just $9 per day, we can provide a senior in need with breakfast and lunch, home-delivered by our friendly volunteers.
                                            Please consider signing up for a monthly gift to help sustain and grow our impact!
                                        </p>
                                        <div className='d-flex justify-content-center'>
                                            <DonationModal />
                                            <MonthlyDonationModal />
                                        </div>
                                    </MDBTabPane>
                                    
                                    <MDBTabPane tabId="2" role="tabpanel">
                                        <MDBRow>
                                            <MDBCol md='6'>
                                                <MDBIframe title='Janelle Monae MOWA video' src="https://www.youtube.com/embed/l-OHizEwn5Y"></MDBIframe>
                                            </MDBCol>
                                            <MDBCol md='6'>
                                                <img src={kitchen} className='d-block img-fluid mt-2' alt='our kitchen logo' />
                                            </MDBCol>
                                        </MDBRow>
                                        <p className="mt-5 mdb-color-text text-left font-weight-bold">
                                        Last year, with the help of OUR community, OUR team at Meals On Wheels Atlanta prepared and delivered over 519,000 nutritious meals.  With hunger on the rise and the fact that seniors are at the greatest health risk for COVID-19, we expect to exceed OUR plans this year by almost an additional 100,000 meals.  Even with this huge increase, there will still be hundreds of seniors on OUR (can’t) wait list.  Could you imagine your mother, grandmother or grandfather just waiting for food?
                                        </p><br/>
                                        <p className="mt-2 mdb-color-text text-left font-weight-bold">
                                            We are thrilled to announce OUR new project called “Our Kitchen”.  It’s a community collaboration of designers, architects, builders, chefs, gardeners, and more.  We’re getting ready to build OUR answer to ending senior hunger in OUR community. We will convert more than 10,000 square feet of existing space into a new state-of-the- art commercial kitchen that will enable us to triple OUR meal production. We’ll add a gourmet demo kitchen for cooking classes, an organic garden and a beautiful community event space.
                                        </p>
                                        <MDBContainer className='px-5 py-5'>
                                            <MDBRow>
                                                <MDBCol md="12">
                                                    <form>
                                                        <p className="h5 text-center mb-4">Get In Touch</p>
                                                        <div className="grey-text">
                                                        <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                                                            success="right" />
                                                        <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                                            success="right" />
                                                        <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                                        <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                                                        </div>
                                                        <div className="text-center">
                                                        <MDBBtn className='purple-gradient btn-rounded'>
                                                            Submit
                                                            <MDBIcon far icon="paper-plane" className="ml-1" />
                                                        </MDBBtn>
                                                        </div>
                                                    </form>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBContainer>
                                    </MDBTabPane>
                                    <MDBTabPane tabId="3" role="tabpanel">
                                        {/* <MDBRow>
                                            <MDBCol md='6'>
                                                <img src={nuts1} className='rounded fluid' style={{ width: '350px' }} alt='purposeful foods' />
                                            </MDBCol>
                                            <MDBCol md='6'>
                                                <p className='text-justify mt-4 pr-5 font-weight-bold'>
                                                When you purchase from Purposeful Gourmet Foods, 100% of the proceeds support Meals On Wheels Atlanta. Buy them as a gift or enjoy them for yourself. We make the perfect corporate gift. Your clients will appreciate your continued commitment in giving back to the community, especially the most vulnerable, our elderly neighbors. We even wrap, ship, customize and deliver for FREE in the Atlanta area.
                                                </p>
                                                <div className='d-flex justify-content-center'>
                                                    <img src={nuts} alt='purposeful foods' style={{ width: '75px' }} />
                                                    <a href='https://www.purposefulgourmetfoods.org/collections/purposeful-gourmet-foods'><MDBBtn className='btn-rounded mdb-color border text-warning border-warning font-weight-bold'>Shop Now</MDBBtn></a>
                                                </div>
                                            </MDBCol>
                                        </MDBRow> */}
                                        <MDBRow>
                                            <MDBCol md='12'>
                                                <div className="text-center my-5">
                                                    <h2 className="h1-responsive font-weight-bold mdb-color-text my-5">
                                                    Why Purposeful Products?
                                                    </h2>
                                                    <p className="lead text-muted w-responsive mx-auto mb-5">
                                                    When you purchase from Purposeful Gourmet Foods, 100% of the proceeds support Meals On Wheels Atlanta. Buy them as a gift or enjoy them for yourself. We make the perfect corporate gift. Your clients will appreciate your continued commitment in giving back to the community, especially the most vulnerable, our elderly neighbors. We even wrap, ship, customize and deliver for FREE in the Atlanta area.
                                                    </p>
                                                    <MDBRow>
                                                        <MDBCol md="4">
                                                            {/* <MDBIcon icon="seedling" size="3x" className="red-text" /> */}
                                                            <MDBAvatar
                                                                tag="img"
                                                                src={ga}
                                                                className="rounded-circle z-depth-1-half img-fluid"
                                                                alt="Sample avatar"
                                                                style={{ width: '100px' }}
                                                            />
                                                            <h5 className="font-weight-bold my-4">Homegrown</h5>
                                                            <p className="text-muted mb-md-0 mb-5">
                                                            Georgia-grown, gluten free, and prepared in the Meals on Wheels Atlanta kitchen.
                                                            </p>
                                                        </MDBCol>
                                                        <MDBCol md="4">
                                                            {/* <MDBIcon icon="book" size="3x" className="cyan-text" /> */}
                                                            <MDBAvatar
                                                                tag="img"
                                                                src={chefrob}
                                                                className="rounded-circle z-depth-1-half img-fluid"
                                                                alt="Sample avatar"
                                                                style={{ width: '100px' }}
                                                            />
                                                            <h5 className="font-weight-bold my-4">Gourmet</h5>
                                                            <p className="text-muted mb-md-0 mb-5">
                                                            Gourmet recipes by Chef Robert Gerstenecker, former executive chef at the Four Seasons Atlanta.
                                                            </p>
                                                        </MDBCol>
                                                        <MDBCol md="4">
                                                            {/* <MDBIcon far icon="comments" size="3x" className="orange-text" /> */}
                                                            <MDBAvatar
                                                                tag="img"
                                                                src={meal}
                                                                className="rounded-circle z-depth-1-half img-fluid"
                                                                alt="Sample avatar"
                                                                style={{ width: '100px' }}
                                                            />
                                                            <h5 className="font-weight-bold my-4">Support</h5>
                                                            <p className="text-muted mb-md-0 mb-5">
                                                            All proceeds help the Meals on Wheels Atlanta team deliver nutritious meals to seniors.
                                                            </p>
                                                        </MDBCol>
                                                    </MDBRow>
                                                    <div className='d-flex justify-content-center mt-4'>
                                                        <img src={nuts} alt='purposeful foods' style={{ width: '75px' }} />
                                                        <a href='https://www.purposefulgourmetfoods.org/collections/purposeful-gourmet-foods' className='mt-1'><MDBBtn className='btn-rounded mdb-color border text-warning border-warning font-weight-bold'>Shop Now</MDBBtn></a>
                                                    </div>
                                                </div>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBTabPane>
                                </MDBTabContent>
                            </MDBContainer>
                        </div>
                    </MDBCard>

                </div>

                <footer style={{ marginTop: '-25px' }}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default Donate;