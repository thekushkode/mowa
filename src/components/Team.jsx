import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";
import Nav from "./Nav";
import Kush from '../assets/kush250x250.png';
import Footer from "./Footer";

const Team = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            {/* <header>
                <Nav />
            </header> */}
            <MDBCard className="px-1 pb-5 text-center">
                <MDBCardBody>
                    <h2 className="h1-responsive mdb-color-text font-weight-bold my-5">
                        Meet Our Amazing Team
                    </h2>
                    <p className="grey-text w-responsive mx-auto mb-5">
                        We're honored to introduce the Meals on Wheels Atlanta team! This amazing group of people are the backbone of the MOWA organization. From fielding calls and emails to creating engaging fundraising events to preparing Senior meals, they are always ready to carry the load to fulfill our mission!
                    </p>
                    <MDBRow>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Maria Kate
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Photographer</h6>
                            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                                <MDBIcon fab icon="facebook-f" />
                            </MDBBtn>
                            <MDBBtn
                                tag="a"
                                floating
                                size="sm"
                                className="mx-1 mb-0 btn-dribbble"
                            >
                                <MDBIcon fab icon="dribbble" />
                            </MDBBtn>
                            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                                <MDBIcon fab icon="twitter" />
                            </MDBBtn>
                        </MDBCol>

                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={Kush}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">Robert Kushner</h4>
                            <h6 className="text-uppercase grey-text mb-3">
                                Full-Stack Developer
                            </h6>
                            <MDBBtn
                                tag="a"
                                floating
                                size="sm"
                                className="mx-1 mb-0 btn-email"
                            >
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                                <MDBIcon fab icon="facebook-f" />
                            </MDBBtn>
                            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-git">
                                <MDBIcon fab icon="github" />
                            </MDBBtn>
                        </MDBCol>

                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Sarah Melyah
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
                            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-li">
                                <MDBIcon fab icon="linkedin-in" />
                            </MDBBtn>
                            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                                <MDBIcon fab icon="twitter" />
                            </MDBBtn>
                            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-pin">
                                <MDBIcon fab icon="pinterest" />
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            {/* <MDBCard className="px-1 pb-5 text-center">
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
                    </MDBCard> */}
            {/* <footer>
                <Footer />
            </footer> */}
        </div>
    );
}

export default Team;