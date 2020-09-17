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
    MDBCard
} from "mdbreact";
import Nav from "./Nav";
import DonationModal from './DonationModal';
import MonthlyDonationModal from './MonthlyDonationModal';
import ladies from '../assets/donatesample.png';
import Footer from "./Footer";
import peeps from '../assets/oldladyandwoman.jpg';
import kitchen from '../assets/kitchen.png';
import nuts from '../assets/purposenuts.png';
import nuts1 from '../assets/nuts1.jpeg';

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
                                            <MDBIcon className='mr-1' icon="clock" /> Volunteer
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink link to="#" active={this.state.activeItemJustified === "3"} onClick={this.toggleJustified("3")} role="tab" >
                                            <MDBIcon className='mr-1' icon="blender" /> Our Kitchen
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink link to="#" active={this.state.activeItemJustified === "4"} onClick={this.toggleJustified("4")} role="tab" >
                                            <MDBIcon className='mr-1' icon="hand-holding-heart" /> Purposeful Foods
                                        </MDBNavLink>
                                    </MDBNavItem>
                                </MDBNav>
                                <MDBTabContent
                                    className="card"
                                    activeItem={this.state.activeItemJustified}
                                >
                                    <MDBTabPane tabId="1" role="tabpanel">
                                        <p className="mt-2 font-weight-bold text-justify">
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
                                        <p className="mt-2">
                                            You’ll find that there are a number of different types of volunteer opportunities at MOWA, all of which are vital in supporting our work with local seniors. Some opportunities include delivering meals, preparing shelf stable meal options, and stocking our food pantry. Regardless of what opportunity speaks to you, you will be making a world of difference to our senior neighbors here in Atlanta!.
                                        </p>
                                        <h2 className='text-center red-text darken-4'>Volunteer Requirements</h2>
                                        <ol>
                                            <li>The minimum volunteer age requirement is 13 years. Volunteers under the age of 16 must be accompanied by a parent or guardian.</li>
                                            <li>All volunteers will be prompted to view an orientation prior to volunteering with Meals On Wheels Atlanta.</li>
                                            <li>All individual and group volunteers will be prompted to complete a volunteer background check and liability waiver when creating their profile on VolunteerHub.</li>
                                            <li>Volunteers are required to self-register for events via our VolunteerHub portal.</li>
                                            <li>Due to the nature of volunteer opportunities, volunteering at Meals On Wheels Atlanta may require periods of standing, walking, and lifting boxes up to 10 pounds.</li>
                                            <li>Volunteers must be able to stay for the entire duration of the event that you register for.</li>
                                        </ol>
                                        <p>
                                            After completing the online application form, your account is subject to review. Once approved, you will be contacted by a member of our Community Engagement Team who will provide you with instructions on completing all required paperwork and waivers as well as creating your VolunteerHub account!
                                        </p>
                                        <h4 className='font-weight-bold'>Community Service Eligibility:</h4>
                                        <ul>
                                            <li>We cannot accept charges related to <b>larceny, theft, violent offenses, sexual offenses, or felonies.</b></li>
                                            <li>You must provide proof of your charge. This must be written documentation from your probation officer, counselor, attorney, or other official. Please send a copy to <a href='mailto:arobbins@mowatl.org'>Alissa Robbins</a>.</li>
                                        </ul>
                                        <h2 className='text-center red-text darken-4'>Additional Information</h2>
                                        <h4 className='mdb-color-text font-weight-bold'><b>Volunteer Waiver</b></h4>
                                        <p>
                                            All volunteers will ﬁll out a volunteer waiver during the volunteer orientation with MOWA.
                                        </p>
                                        <h4 className='mdb-color-text font-weight-bold'><b>Background Checks</b></h4>
                                        <p>
                                            All individual volunteers will need a volunteer background check that can be ﬁlled out at orientation.
                                        </p>
                                        <h4 className='mdb-color-text font-weight-bold'><b>Group Volunteers</b></h4>
                                        <p>
                                            Corporate Volunteers will not need to ﬁll out a background check. Faith-based groups, civic groups and school groups will still need all members to ﬁll out a background check prior to their scheduled volunteer date. The completed forms may be mailed, scanned or faxed for your convenience.
                                        </p>
                                        <h4 className='mdb-color-text font-weight-bold'><b>Parking</b></h4>
                                        <p>
                                            Parking can be found on either side of the building. Due to limited parking, carpooling is recommended for ease and convenience.
                                        </p>
                                        <h4 className='mdb-color-text font-weight-bold'><b>Arriving</b></h4>
                                        <p>
                                            Ask for a MOWA Volunteer Representative in the reception area so your group can be directed to the volunteer orientation.
                                        </p>
                                        <h4 className='mdb-color-text font-weight-bold'><b>Confirmation</b></h4>
                                        <p>
                                            We will call or email all volunteers to conﬁrm one week prior to their volunteer date to make sure they are set and to answer any questions they have about their upcoming volunteer day. However, if anything changes in your plans, please <a href='tel:4043513889'>call</a> or <a href='mailto:volunteerservices@mowatl.org'>email</a> as soon as possible!
                                        </p>
                                        <h4 className='mdb-color-text font-weight-bold'><b>Internships</b></h4>
                                        <p>Looking for a long-term volunteer opportunity or an internship? <a href='mailto:volunteerservices@mowatl.org'>Contact us!</a></p>
                                        
                                        <div className='d-flex justify-content-center'>
                                            <MDBBtn className='btn-rounded aqua-gradient'>Forms</MDBBtn>
                                            <MDBBtn className='btn-rounded blue-gradient'><MDBNavLink className='p-0' to='/contact' style={{ color: 'white' }}>Contact Us</MDBNavLink></MDBBtn>
                                        </div>
                                    </MDBTabPane>
                                    <MDBTabPane tabId="3" role="tabpanel">
                                        <img src={kitchen} alt='our kitchen logo' />
                                        <p className="mt-2">
                                            Would you like to donate new kitchen supplies or commercial appliances to “OUR Kitchen”? How about hosting a virtual Kitchen shower in support of “Our Kitchen”? If so, please submit the form below and somebody will reach out to you to discuss your options!
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
                                        <div className='d-flex justify-content-center'>
                                            <MDBBtn className='btn-rounded aqua-gradient'>Forms</MDBBtn>
                                            <MDBBtn className='btn-rounded blue-gradient'>Contact Us</MDBBtn>
                                        </div>
                                    </MDBTabPane>
                                    <MDBTabPane tabId="4" role="tabpanel">
                                        <MDBRow>
                                            <MDBCol md='6'>
                                                <img src={nuts1} className='rounded fluid' style={{ width: '350px' }} alt='purposeful foods' />
                                            </MDBCol>
                                            <MDBCol md='6'>
                                                <p className='text-justify mt-4 pr-5 font-weight-bold'>
                                                When you purchase from Purposeful Gourmet Foods, 100% of the proceeds support Meals On Wheels Atlanta. Buy them as a gift or enjoy them for yourself. We make the perfect corporate gift. Your clients will appreciate your continued commitment in giving back to the community, especially the most vulnerable, our elderly neighbors. We even wrap, ship, customize and deliver for FREE in the Atlanta area.
                                                </p>
                                                <div className='d-flex justify-content-center'>
                                                    <img src={nuts} alt='purposeful foods' style={{ width: '75px' }} />
                                                    <MDBBtn className='btn-rounded mdb-color border text-warning border-warning font-weight-bold'>Shop Now</MDBBtn>
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