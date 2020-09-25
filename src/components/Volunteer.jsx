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
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView
} from "mdbreact";
import Nav from "./Nav";
import DonationModal from './DonationModal';
import MonthlyDonationModal from './MonthlyDonationModal';
import Footer from "./Footer";
import volback from '../assets/volbackground.jpg';
import vol1 from '../assets/Volunteers/vol1.png';
import vol2 from '../assets/Volunteers/vol2.png';
import vol3 from '../assets/Volunteers/vol3.png';
import vol4 from '../assets/Volunteers/vol4.png';
import vol5 from '../assets/Volunteers/vol5.png';
import vol6 from '../assets/Volunteers/vol6.png';
import vol7 from '../assets/Volunteers/vol7.png';
import vol8 from '../assets/Volunteers/vol8.png';
import vol9 from '../assets/Volunteers/vol9.png';
import newform from '../assets/Forms/newvolunteerform.pdf';

class Volunteer extends Component {

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
                            backgroundImage: "url(" + volback + ")"
                        }}
                    >
                        <div className="rgba-black-strong pb-5 px-2 text-center">

                            <div className="my-5 px-1 text-center">
                                <h2 className="h1-responsive white-text font-weight-bold my-5">
                                    Volunteer with MOWA!
                                </h2>
                                <p className="white-text w-responsive mx-auto mb-5">
                                    Thank you for your interest in volunteering with Meals On Wheels Atlanta. We truly appreciate your support! Volunteers are the heart of our organization and we could not provide our vital services to the community without YOU!
                                </p>
                            </div>
                            <MDBContainer>
                                <MDBNav tabs className="nav-justified" color='primary'>
                                    <MDBNavItem>
                                        <MDBNavLink link to="#" active={this.state.activeItemJustified === "1"} onClick={this.toggleJustified("1")} role="tab" >
                                            <MDBIcon className='mr-1' icon="hand-holding-heart" /> Volunteer Requirements
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink link to="#" active={this.state.activeItemJustified === "2"} onClick={this.toggleJustified("2")} role="tab" >
                                            <MDBIcon className='mr-1' icon="user-tie" /> Corporate Engagement
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink link to="#" active={this.state.activeItemJustified === "3"} onClick={this.toggleJustified("3")} role="tab" >
                                            <MDBIcon className='mr-1' fab icon="wpforms" /> Get Forms
                                        </MDBNavLink>
                                    </MDBNavItem>
                                </MDBNav>
                                <MDBTabContent
                                    className="card"
                                    activeItem={this.state.activeItemJustified}
                                >
                                    <MDBTabPane tabId="1" role="tabpanel">

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
                                            <li>You must provide proof of your charge. This must be written documentation from your probation officer, counselor, attorney, or other official. Please send a copy to <a href='mailto:arobbins@mowatl.org?subject=Community Service Eligibility'>Alissa Robbins</a>.</li>
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
                                        <p>Looking for a long-term volunteer opportunity or an internship? <a href='mailto:volunteerservices@mowatl.org?subject=MOWA Internship'>Contact us!</a></p>
                                        <div className='text-center'>
                                            <a href={require('../assets/Forms/newvolunteerform.pdf')} download={newform}><MDBBtn size='md' className='btn-rounded blue-gradient font-weight-bold'>New Volunteer Form</MDBBtn></a>
                                            <a href='https://mealsonwheelsatlanta.volunteerhub.com/account/signin?returnUrl=%2fevents%2findex' ><MDBBtn size='md' className='btn-rounded purple-gradient font-weight-bold'>Login to Volunteer Portal</MDBBtn></a>
                                        </div>

                                        {/* <div className='d-flex justify-content-center'>
                                            <MDBBtn className='btn-rounded aqua-gradient'>Forms</MDBBtn>
                                            <MDBBtn className='btn-rounded blue-gradient'><MDBNavLink className='p-0' to='/contact' style={{ color: 'white' }}>Contact Us</MDBNavLink></MDBBtn>
                                        </div> */}
                                    </MDBTabPane>
                                    <MDBTabPane tabId="2" role="tabpanel">
                                        <p className='px-2'>
                                            At Meals On Wheels Atlanta, we’re dedicated to supporting senior independence through meals, shelter, education, and community. An easy way to double your contribution is through employee giving programs.
                                            <br />
                                            <br />
                                            Many corporations match employee donations (or the tax deductible component of your membership) to our organization.
                                            If you volunteer with us, your employer may also provide us with a grant as a way to recognize your ongoing support.
                                        </p>
                                        <div className='text-center'>
                                            <a href='https://doublethedonation.com/mealsonwheelsatlanta' ><MDBBtn size='md' className='btn-rounded blue-gradient font-weight-bold'>Click Here To See If Your Company Matches</MDBBtn></a>
                                        </div>
                                    </MDBTabPane>
                                    <MDBTabPane tabId="3" role="tabpanel">
                                        <h4 className='mdb-color-text font-weight-bold'>New Volunteers</h4>
                                        <p>
                                            Please download and complete the New Volunteer form & return to <a href='mailto:arobbins@mowatl.org?subject=New Volunteer'>arobbins@mowatl.org</a>.
                                        </p>
                                        <div className='text-center'>
                                            <a href={require('../assets/Forms/newvolunteerform.pdf')} download={newform}><MDBBtn size='md' className='btn-rounded blue-gradient font-weight-bold mb-4'>New Volunteer Form</MDBBtn></a>
                                        </div>
                                        <h4 className='mdb-color-text font-weight-bold'>Returning Volunteers</h4>
                                        <p>
                                            Please use the button below to login to our Volunteer portal!.
                                        </p>
                                        <div className='text-center'>
                                            <a href='https://mealsonwheelsatlanta.volunteerhub.com/account/signin?returnUrl=%2fevents%2findex' ><MDBBtn size='md' className='btn-rounded purple-gradient font-weight-bold'>Login to Volunteer Portal</MDBBtn></a>
                                        </div>
                                    </MDBTabPane>
                                </MDBTabContent>
                            </MDBContainer>
                            <MDBContainer style={{ marginTop: '50px' }} >
                                <h2 className="h1-responsive white-text font-weight-bold my-5">
                                    MOWA Volunteers in Action!
                                </h2>
                                <MDBCarousel
                                    activeItem={1}
                                    length={9}
                                    showControls={true}
                                    showIndicators={false}
                                    className="z-depth-1"
                                    slide
                                >
                                    <MDBCarouselInner>
                                        <MDBCarouselItem itemId="1">
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={vol1}
                                                    alt="Volunteer in Action"
                                                />
                                            </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="2">
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={vol2}
                                                    alt="Volunteer in Action"
                                                />
                                            </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="3">
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={vol3}
                                                    alt="Volunteer in Action"
                                                />
                                            </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="4">
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={vol4}
                                                    alt="Volunteer in Action"
                                                />
                                            </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="5">
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={vol5}
                                                    alt="Volunteer in Action"
                                                />
                                            </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="6">
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={vol6}
                                                    alt="Volunteer in Action"
                                                />
                                            </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="7">
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={vol7}
                                                    alt="Volunteer in Action"
                                                />
                                            </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="8">
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={vol8}
                                                    alt="Volunteer in Action"
                                                />
                                            </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="9">
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={vol9}
                                                    alt="Volunteer in Action"
                                                />
                                            </MDBView>
                                        </MDBCarouselItem>
                                    </MDBCarouselInner>
                                </MDBCarousel>
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

export default Volunteer;