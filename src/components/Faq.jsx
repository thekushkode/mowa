import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBCol, MDBRow, MDBCollapse, MDBCollapseHeader, MDBCard, MDBBtn, MDBCardBody, MDBIcon } from "mdbreact";
import './MOWAColors.css';
import peeps from '../assets/esther.jpeg';
import Nav from "./Nav";
import Footer from "./Footer";
import fiveohone from '../assets/financials/501c3.pdf';
import nineninezero from '../assets/financials/form990.pdf';
import reportcard from '../assets/financials/reportcard.png';
import nuts from '../assets/purposenuts.png';


class Faq extends Component {
    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

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
                    <MDBCard
                        className="card-image"
                        style={{
                            backgroundImage: "url(" + peeps + ")"
                        }}
                    >
                        <div className="rgba-black-strong py-5 px-2">
                            <MDBRow className="d-flex justify-content-center">
                                <MDBCol md="10" xl="8">
                                    <MDBContainer className="accordion md-accordion accordion-5">
                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse1")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase blue-gradient white-text mb-0 d-flex justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex mowablue justify-content-center align-items-center mr-4"
                                                    style={{ minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="utensils"
                                                        size="2x"
                                                        className="m-3 white-text"
                                                    />
                                                </div>
                                                Qualifying for Meals
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <h4 className="p-md-4 mb-0">
                                                        In order to qualify for Meal Services, applicants must be:
                                                    </h4>
                                                    <ul className='font-weight-bold'>
                                                        <li>60 YEARS AND OLDER</li>
                                                        <li>FULTON COUNTY RESIDENTS</li>
                                                        <li>LOW-INCOME</li>
                                                    </ul>
                                                    <h4 className="p-md-4 mb-0">
                                                        MOWA currently serves the following areas & zipcodes:
                                                    </h4>
                                                    <p className="py-md-2 px-md-4 mb-0 font-weight-bold">Central Fulton County- Buckhead, East Point, Hapeville, & the City of Atlanta</p>
                                                    <MDBRow>
                                                        <MDBCol md='6'>
                                                            <ul className='font-weight-bold'>
                                                                <li>30305</li>
                                                                <li>30306</li>
                                                                <li>30307</li>
                                                                <li>30308</li>
                                                                <li>30309</li>
                                                                <li>30310</li>
                                                                <li>30311</li>
                                                                <li>30312</li>
                                                                <li>30313</li>
                                                            </ul>
                                                        </MDBCol>
                                                        <MDBCol md='6'>
                                                            <ul className='font-weight-bold'>
                                                                <li>30314</li>
                                                                <li>30315</li>
                                                                <li>30316</li>
                                                                <li>30318</li>
                                                                <li>30324</li>
                                                                <li>30344</li>
                                                                <li>30354</li>
                                                                <li>30363</li>
                                                            </ul>
                                                        </MDBCol>
                                                    </MDBRow>
                                                    <h4 className="p-md-4 mb-0">
                                                        If you have any questions, please <a href='mailto:jtucker@mowatl.org?subject=Meal Services Inquiry'>send us an email!</a>
                                                    </h4>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse6")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase blue-gradient white-text mb-0 d-flex justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center mr-4 mowablue"
                                                    style={{minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="home"
                                                        size="2x"
                                                        className="m-3 white-text"
                                                    />
                                                </div>
                                                Qualifying for Home Repairs
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse6" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <h2 className="h1-responsive white-text font-weight-bold ml-4 my-3">
                                                        How We Can Help
                                                    </h2>
                                                    <p className="p-md-4 mb-0">
                                                        Our Home Repair Services program prioritizes projects that provide our clients with safe and usable access to spaces such as the bathroom, kitchen, and living and sleeping areas.<br /><br />
                                                        Handyman projects include installing Americans with Disabilities Act (ADA) compliant toilets, replacing faucets, replacing light fixtures, and installing grab bars. More extensive projects include replacement of wheelchair ramps, HVAC systems, plumbing, electrical/rewiring, and roofs.
                                                    </p>
                                                    <h2 className="h1-responsive white-text font-weight-bold ml-4 my-3">
                                                        Getting Started
                                                    </h2>
                                                    <ul>
                                                        <li><b>Applications will be reviewed on a first-come, first-served basis, according to the program funding priorities and eligibility threshold requirements (for the Home Depot program, a prioritization is given to senior veterans).</b></li>
                                                        <li><b><a href='https://portal.neighborlysoftware.com/mowa/Participant/Login'>Click here </a>to fill out the online Pre-Qualification form. You will need to register and create an account to fill out the form.</b></li>
                                                        <li><b>Once you complete and submit this online form, you will be contacted by our Home Repair Team.</b></li>
                                                        <li><b>If you are eligible for one of our programs, you will be placed in the queue for the follow-up process. It is during this process that we will collect more information from you.</b></li>
                                                        <li><b>When our Home Repair Team is ready to begin, we will schedule a home assessment to determine your home’s repair needs and which repairs can be completed for you. The repair needs must meet program guidelines and budget limits. NOTE: Not all homes can be repaired.</b></li>
                                                    </ul>
                                                    <p className="p-md-4 mb-0">
                                                        <b>If you have any questions, please email <a href='mailto:homes@mowatl.org?subject=Home Repair Services'>homes@mowatl.org</a>.</b>
                                                    </p>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse2")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase blue-gradient white-text mb-0 d-flex justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center mr-4 mowablue"
                                                    style={{minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="hands-helping"
                                                        size="2x"
                                                        className="m-3 white-text"
                                                    />
                                                </div>
                                                Volunteering With MOWA
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <p className="mt-2">
                                                        You’ll find that there are a number of different types of volunteer opportunities at MOWA, all of which are vital in supporting our work with local seniors. Some opportunities include delivering meals, preparing shelf stable meal options, and stocking our food pantry. Regardless of what opportunity speaks to you, you will be making a world of difference to our senior neighbors here in Atlanta!
                                                    </p>
                                                    <h2 className='text-center mowaorangetext'>Volunteer Requirements</h2>
                                                    <ol>
                                                        <li>The minimum volunteer age requirement is 13 years. Volunteers under the age of 16 must be accompanied by a parent or guardian.</li>
                                                        <li>All volunteers will be prompted to view an orientation prior to volunteering with Meals On Wheels Atlanta.</li>
                                                        <li>All individual and group volunteers will be prompted to complete a volunteer background check and liability waiver when creating their profile on VolunteerHub.</li>
                                                        <li>Volunteers are required to self-register for events via our VolunteerHub portal.</li>
                                                        <li>Due to the nature of volunteer opportunities, volunteering at Meals On Wheels Atlanta may require periods of standing, walking, and lifting boxes up to 10 pounds.</li>
                                                        <li>Volunteers must be able to stay for the entire duration of the registered event.</li>
                                                    </ol>
                                                    <p>
                                                        After completing the online application form, your account is subject to review. Once approved, you will be contacted by a member of our Community Engagement Team who will provide you with instructions on completing all required paperwork and waivers as well as creating your VolunteerHub account!
                                                    </p>
                                                    <h4 className='font-weight-bold'>Community Service Eligibility:</h4>
                                                    <ul>
                                                        <li>We cannot accept charges related to <b>larceny, theft, violent offenses, sexual offenses, or felonies.</b></li>
                                                        <li>You must provide proof of your charge. This must be written documentation from your probation officer, counselor, attorney, or other official. Please send a copy to <a href='mailto:arobbins@mowatl.org?subject=Community Service Eligibility'>Alissa Robbins</a>.</li>
                                                    </ul>
                                                    <h2 className='text-center mowaorangetext'>Additional Information</h2>
                                                    <h4 className='white-text font-weight-bold'><b>Volunteer Waiver</b></h4>
                                                    <p>
                                                        All volunteers will ﬁll out a volunteer waiver during the volunteer orientation with MOWA.
                                                    </p>
                                                    <h4 className='white-text font-weight-bold'><b>Background Checks</b></h4>
                                                    <p>
                                                        All individual volunteers will need a volunteer background check that can be ﬁlled out at orientation.
                                                    </p>
                                                    <h4 className='white-text font-weight-bold'><b>Group Volunteers</b></h4>
                                                    <p>
                                                        Corporate Volunteers will not need to ﬁll out a background check. Faith-based groups, civic groups and school groups will still need all members to ﬁll out a background check prior to their scheduled volunteer date. The completed forms may be mailed, scanned or faxed for your convenience.
                                                    </p>
                                                    <h4 className='white-text font-weight-bold'><b>Parking</b></h4>
                                                    <p>
                                                        Parking can be found on either side of the building. Due to limited parking, carpooling is recommended for ease and convenience.
                                                    </p>
                                                    <h4 className='white-text font-weight-bold'><b>Arriving</b></h4>
                                                    <p>
                                                        Ask for a MOWA Volunteer Representative in the reception area so your group can be directed to the volunteer orientation.
                                                    </p>
                                                    <h4 className='white-text font-weight-bold'><b>Confirmation</b></h4>
                                                    <p>
                                                        We will call or email all volunteers to conﬁrm one week prior to their volunteer date to make sure they are set and to answer any questions they have about their upcoming volunteer day. However, if anything changes in your plans, please <a href='tel:4043513889'>call</a> or <a href='mailto:volunteerservices@mowatl.org'>email</a> as soon as possible!
                                                    </p>
                                                    <h4 className='white-text font-weight-bold'><b>Internships</b></h4>
                                                    <p>Looking for a long-term volunteer opportunity or an internship? <a href='mailto:volunteerservices@mowatl.org?subject=MOWA Iternship'>Contact us!</a></p>

                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>

                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse3")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase blue-gradient white-text mb-0 d-flex justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center mr-4 mowablue"
                                                    style={{minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="donate"
                                                        size="2x"
                                                        className="m-3 white-text"
                                                    />
                                                </div>
                                                Donations
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <p className="p-md-4 mb-0">
                                                        Donations can be made in numerous ways:
                                                    </p>
                                                    <ul>
                                                        <li><b>Money</b>: to provide meals for Atlanta Seniors</li>
                                                        <li><b>Time:</b> volunteer with MOWA to help pack meals, deliver meals, & more</li>
                                                        <li><b>Our Kitchen:</b> make financial donations or donate commercial kitchen equipment to Our Kitchen</li>
                                                        <li><b>Purposeful Gourmet Products:</b> purchasing any of our purposeful products make a great gift and proceeds go directly towards our mission of ending hunger for Atlanta's seniors</li>
                                                    </ul>
                                                    <div className='text-center'>
                                                        <Link to='/donate'>
                                                            <MDBBtn className='mowalightblue btn-rounded font-weight-bold'>Donate</MDBBtn>
                                                        </Link>
                                                        <Link to='/volunteer'>
                                                            <MDBBtn className='mowablue btn-rounded font-weight-bold'>Volunteer</MDBBtn>
                                                        </Link>
                                                        <MDBBtn className='mowaorange btn-rounded font-weight-bold' target='_blank' href='https://www.purposefulgourmetfoods.org/collections/purposeful-gourmet-foods'>Shop Purposeful</MDBBtn>
                                                    </div>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse4")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase blue-gradient white-text mb-0 d-flex justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center mr-4 mowablue"
                                                    style={{minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="gift"
                                                        size="2x"
                                                        className="m-3 white-text"
                                                    />
                                                    {/* <img src={nuts} style={{ width: '50px' }} alt='purposeful' className='m-3' /> */}
                                                </div>
                                                Purposeful Gourmet Foods
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse4" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <p className="p-md-4 mb-0">
                                                        When you purchase from Purposeful Gourmet Foods, 100% of the proceeds support Meals On Wheels Atlanta. Buy them as a gift or enjoy them for yourself. We make the perfect corporate gift. Your clients will appreciate your continued commitment in giving back to the community, especially the most vulnerable, our elderly neighbors. We even wrap, ship, customize and deliver for FREE in the Atlanta area.
                                                    </p>
                                                    <div className='text-center'>
                                                        <MDBBtn href="https://www.purposefulgourmetfoods.org/collections/purposeful-gourmet-foods" className='mowaorange btn-rounded font-weight-bold'>Shop Purposeful</MDBBtn>
                                                    </div>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse5")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase blue-gradient white-text mb-0 d-flex justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center mr-4 mowablue"
                                                    style={{ minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="info"
                                                        size="2x"
                                                        className="m-3 white-text"
                                                    />
                                                </div>
                                                Annual Report & Financials
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse5" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <h2 className="p-md-4 mb-0">
                                                        Annual Report Card
                                                    </h2>
                                                    <img className='d-block img-fluid' src={reportcard} alt='form 990' />
                                                    <h2 className="p-md-4 mb-0">
                                                        Form 990
                                                    </h2>
                                                    <MDBBtn className='btn-rounded mowablue' href={require("../assets/financials/form990.pdf")} download={nineninezero}>Download Form 990</MDBBtn>
                                                    <h2 className="p-md-4 mb-0">
                                                        501(c)3
                                                    </h2>
                                                    <MDBBtn className='btn-rounded mowablue' href={require("../assets/financials/501c3.pdf")} download={fiveohone}>Download Form 990</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>

                                    </MDBContainer>
                                </MDBCol>
                            </MDBRow>
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

export default Faq;