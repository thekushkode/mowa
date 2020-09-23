import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";
import Nav from "./Nav";
import Kush from '../assets/kush250x250.png';
import Footer from "./Footer";
import team1 from '../assets/Team/team1.png';
import team2 from '../assets/Team/team2.png';
import team3 from '../assets/Team/team3.png';
import team4 from '../assets/Team/team4.png';
import team5 from '../assets/Team/team5.png';
import team6 from '../assets/Team/team6.png';


const Team = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <header style={{ marginBottom: '56px' }}>
                <Nav />
            </header>
            <MDBCard className="px-1 pb-5 text-center">
                <MDBCardBody>
                    <h2 className="h1-responsive mdb-color-text font-weight-bold my-5">
                        Meet Our Amazing Team
                    </h2>
                    <p className="grey-text w-responsive mx-auto mb-5">
                        We're honored to introduce the Meals on Wheels Atlanta team! This amazing group of people are the backbone of the MOWA organization. From fielding calls and emails to creating engaging fundraising events to preparing Senior meals, they are always ready to carry the load to fulfill our mission!
                    </p>
                    <MDBRow className='mb-5'>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={team1}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Charlene Crusoe-Ingram
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Chief Executive Officer</h6>
                            <MDBBtn href='tel:4043513889p222' tag="a" floating size="lg" gradient='blue' className="mx-1 mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:ccrusoeingram@mowatl.org' tag="a" floating size="lg" gradient='peach' className="mx-1 mb-0">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        
                        </MDBCol>

                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={team6}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">Vona Cox</h4>
                            <h6 className="text-uppercase grey-text mb-3">
                                Chief Process Improvement Officer
                            </h6>
                            <MDBBtn href='tel:4043513889p233' tag="a" floating size="lg" gradient='blue' className="mx-1 mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:vcox@mowatl.org' tag="a" floating size="lg" gradient='peach' className="mx-1 mb-0">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>

                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={team5}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Laura Ernst
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Sr. Director of Grants & Institutional Giving</h6>
                            <MDBBtn href='tel:4043513889p232' tag="a" floating size="lg" gradient='blue' className="mx-1 mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:lernst@mowatl.org' tag="a" floating size="lg" gradient='peach' className="mx-1 mb-0">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={team4}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                                style={{ height: '250px', width: '250px' }}
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Joshua Rumohr
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Sr. Director of Operations & Veteran Affairs</h6>
                            <MDBBtn href='tel:4043513889p249' tag="a" floating size="lg" gradient='blue' className="mx-1 mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:jrumohr@mowatl.org' tag="a" floating size="lg" gradient='peach' className="mx-1 mb-0">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>

                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={team3}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">Elisha Silvera</h4>
                            <h6 className="text-uppercase grey-text mb-3">
                                Sr. Director of Special Events & Community Engagement
                            </h6>
                            <MDBBtn href='tel:4043513889p224' tag="a" floating size="lg" gradient='blue' className="mx-1 mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:esilvera@mowatl.org' tag="a" floating size="lg" gradient='peach' className="mx-1 mb-0">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>

                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={team2}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Jason Tucker
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Sr. Director of Meal Services</h6>
                            <MDBBtn href='tel:4043513889p308' tag="a" floating size="lg" gradient='blue' className="mx-1 mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:jtucker@mowatl.org' tag="a" floating size="lg" gradient='peach' className="mx-1 mb-0">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            <MDBCard className="px-1 pb-5 text-center">
                        <MDBCardBody>
                            <h2 className="h1-responsive mdb-color-text font-weight-bold my-5">
                                MOWA Board of Trustees
                            </h2>
                            <p className="grey-text w-responsive mx-auto mb-5">
                                MOWA would like to recognize our Board of Trustees. Our trustees are charged with making sure our organization runs at the highest levels and maximizes the full potential of our fundraising efforts.
                            </p>
                            <MDBRow>

                                <MDBCol md='6' className='text-left'>
                                    <p className='blue-text'><b className='mdb-color-text'>Louisa Johnson,</b> Board Chair & Partner at Seyfarth Shaw LLP</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Erik Bryant,</b> Board Vice Chair & Sr. VP of Wealth Mgmt at Cadence Bank</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Freda Porter,</b> Board Treasurer & Manager at SouthStar Energy</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Johanna Wise,</b> Board Secretary & Director, Labor & Employement Law at Chick-Fil-A</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Marlene Alexander,</b> Sr. VP at Ivy Investments</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Sandra Baldwin,</b> VP & Design Consultant at Baldwin Capital</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Grené Baranco,</b> Sales Manager at Mercedes-Benz of Buckhead</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Angela Blank,</b> Community Organizer</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Rusty Bowers,</b> Owner at Pine Street Market</p>
                                    <p className='blue-text'><b className='mdb-color-text'>J. Vance Burgess,</b> Sr. Director of Real Estate at Chick-Fil-A</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Trent Collins,</b> District Manager at Publix Supermarkets Inc.</p>
                                </MDBCol>
                                <MDBCol md='6' className='text-left'>
                                    <p className='blue-text'><b className='mdb-color-text'>Elise Durham,</b> Dir. of Policy & Communication at Hartsfield-Jackson INTL Airport</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Fayron Epps,</b> Asst. Professor at Nell Hodgson Woodruff School of Nursing at Emory</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Jim Fink,</b> CAO, Managing Director at Voya Investment Management</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Sean Hyslop,</b> President at Sysco Atlanta</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Naima Judge,</b> Managing Director, Market Investment Executive at US Trust, B.O.A.</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Nick Leahy,</b> Executive Chef, Partner at AIX & Tin Tin</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Rachel Martin,</b> Director of Marketing at Design Galleria</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Jovita Moore,</b> News Anchor at WSB-TV</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Louisa Johnson,</b> Board Chair & Partner at Seyfarth Shaw LLP</p>
                                    <p className='blue-text'><b className='mdb-color-text'>Louise Sams,</b> Executive VP & General Counsel at Turner Broadcasting (retired)</p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
            <footer style={{ marginTop: '-25px' }}>
                <Footer />
            </footer>
        </div>
    );
}

export default Team;