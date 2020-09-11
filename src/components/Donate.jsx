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
    MDBBtn
} from "mdbreact";
import Nav from "./Nav";
import DonationModal from './DonationModal';
import ladies from '../assets/donatesample.png';
import Footer from "./Footer";

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
                <header style={{ marginBottom: '100px' }}>
                    <Nav />
                </header>
                {/* <div>
                    <MDBRow>
                        <MDBCol md="12" className="mb-3">
                            <img src={ladies} className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                    </MDBRow>
                </div> */}
                <div className="my-5 px-1 text-center">
                    <h2 className="h1-responsive mdb-color-text font-weight-bold my-5">
                        ATL Seniors Need Your Support!
                    </h2>
                    <p className="muted-text w-responsive mx-auto mb-5">
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
                                <MDBIcon className='mr-1' icon="blender" /> Supplies
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent
                        className="card"
                        activeItem={this.state.activeItemJustified}
                    >
                        <MDBTabPane tabId="1" role="tabpanel">
                            <p className="mt-2">
                                Thank you for helping Meals On Wheels Atlanta fight senior hunger in our community.
                                Your generosity means the world to us and to those we serve.
                                For just $9 per day, we can provide a senior in need with breakfast and lunch, home-delivered by our friendly volunteers.
                                Please consider signing up for a monthly gift to help sustain and grow our impact
                            </p>
                            <div className='d-flex text-center'>
                                <DonationModal />
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
                            <div className='d-flex justify-content-center'>
                                <MDBBtn className='btn-rounded aqua-gradient'>Forms</MDBBtn>
                                <MDBBtn className='btn-rounded blue-gradient'>Contact Us</MDBBtn>
                            </div>
                        </MDBTabPane>
                        <MDBTabPane tabId="3" role="tabpanel">
                            <p className="mt-2">
                                Etsy mixtape wayfarers, ethical wes anderson tofu before
                                they sold out mcsweeney's organic lomo retro fanny pack
                                lo-fi farm-to-table readymade. Messenger bag gentrify
                                pitchfork tattooed craft beer, iphone skateboard locavore
                                carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                                banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
                                Williamsburg banh mi whatever gluten-free, carles pitchfork
                                biodiesel fixie etsy retro mlkshk vice blog. Scenester cred
                                you probably haven't heard of them, vinyl craft beer blog
                                stumptown. Pitchfork sustainable tofu synth chambray yr.
                            </p>
                            <div className='d-flex justify-content-center'>
                                <MDBBtn className='btn-rounded aqua-gradient'>Forms</MDBBtn>
                                <MDBBtn className='btn-rounded blue-gradient'>Contact Us</MDBBtn>
                            </div>
                        </MDBTabPane>
                    </MDBTabContent>
                </MDBContainer>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default Donate;