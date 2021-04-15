import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";
import './MOWAColors.css';
import Nav from "./Nav";
import Footer from "./Footer";
import team1 from '../assets/AdditionalTeam/ingram.jpg';
import team2 from '../assets/Team/team2.jpg';
import team3 from '../assets/Team/team3.jpg';
import team4 from '../assets/Team/team4.jpg';
import team5 from '../assets/Team/team5.jpg';
import team6 from '../assets/Team/team6.jpg';
import alissa from '../assets/AdditionalTeam/alissaregine.jpg';
import chefchris from '../assets/AdditionalTeam/chefchris.jpg';
import chefrobert from '../assets/AdditionalTeam/robby.jpg';
import digitalteam from '../assets/AdditionalTeam/digitalteam.jpg';
import hillary from '../assets/AdditionalTeam/hillary.jpg';
import karen from '../assets/AdditionalTeam/karen.jpg';
import kitchen from '../assets/AdditionalTeam/kitchen.jpg';
import kristy from '../assets/AdditionalTeam/kristy.jpg';
import nicole from '../assets/AdditionalTeam/nicole.jpg';
import volunteerteam from '../assets/AdditionalTeam/volunteerteam.jpg';
import claudia from '../assets/AdditionalTeam/lpatrick.jpg';
import jamie from '../assets/AdditionalTeam/jamie.jpg';


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
                    <h2 className="h1-responsive mowabluetext font-weight-bold my-5">
                        Meet Our Amazing Team
                    </h2>
                    <p className="text-muted w-responsive mx-auto mb-5">
                        We're honored to introduce the Meals on Wheels Atlanta team! This amazing group of people are the backbone of the MOWA organization. From fielding calls and emails to creating engaging fundraising events to preparing Senior meals, they are always ready to carry the load to fulfill our mission!
                    </p>
                    <MDBRow className='mb-5'>
                        <MDBCol md="3" className="mb-md-0 mb-5">
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
                            <MDBBtn href='tel:4043513889p222' tag="a" floating className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:ccrusoeingram@mowatl.org' tag="a" floating className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>

                        </MDBCol>

                        <MDBCol md="3" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={team6}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">Vona Cox</h4>
                            <h6 className="text-uppercase grey-text mb-3">
                                Chief Project Officer
                            </h6>
                            <MDBBtn href='tel:4043513889p233' tag="a" floating className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:vcox@mowatl.org' tag="a" floating className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>

                        <MDBCol md="3" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={claudia}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                                width='250'
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">Lynn Patrick</h4>
                            <h6 className="text-uppercase grey-text mb-3">
                                Sr. Director Operations & Administration
                            </h6>
                            <MDBBtn href='tel:4043513889p233' tag="a" floating className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:caguas@mowatl.org' tag="a" floating className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>

                        <MDBCol md="3" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={hillary}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Hillary Baker
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Chief Marketing <br />Officer</h6>
                            <MDBBtn href='tel:4048190334' tag="a" floating className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:hbaker@mowatl.org' tag="a" floating className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-5'>
                        <MDBCol md="3" className="mb-md-0 mb-5">
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
                            <MDBBtn href='tel:4043513889p232' tag="a" floating className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:lernst@mowatl.org' tag="a" floating className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={team4}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                                width='250'
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Joshua Rumohr
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Sr. Director of Operations & Veteran Affairs</h6>
                            <MDBBtn href='tel:4043513889p249' tag="a" floating className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:jrumohr@mowatl.org' tag="a" floating className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>

                        {/* <MDBCol md="2" className="mb-md-0 mb-5">
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
                            <MDBBtn href='tel:4043513889p224' tag="a" floating className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:esilvera@mowatl.org' tag="a" floating className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol> */}

                        <MDBCol md="3" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={team2}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Jason Tucker
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Chief Innovation & Business Development Director</h6>
                            <MDBBtn href='tel:4043513889p308' tag="a" floating className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:jtucker@mowatl.org' tag="a" floating className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={karen}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Karen Kraemer
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Senior Director of <br />Finance</h6>
                            <MDBBtn href='tel:4043513889p309' tag="a" floating className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:kkraemer@mowatl.org' tag="a" floating className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="3" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={jamie}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                                style={{ height: '250px', width: '250px' }}
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Jamie Martin
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Director Brand <br />Development</h6>
                            <MDBBtn href='tel:4043513889p361' tag="a" floating className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:kjackson@mowatl.org' tag="a" floating className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>

                        <MDBCol md="3" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={nicole}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">Nicole McIntosh</h4>
                            <h6 className="text-uppercase grey-text mb-3">
                                Client Engagement <br />Manager
                            </h6>
                            <MDBBtn href='tel:4043513889p362' tag="a" floating className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:nmcintosh@mowatl.org' tag="a" floating className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>

                        <MDBCol md="3" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={alissa}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Alissa Robbins & Regine Amos
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Community Engagement Manager</h6>
                            <MDBBtn href='tel:4043513889p245' tag="a" floating className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:arobbins@mowatl.org' tag="a" floating className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={kristy}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Kristy Prox
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Registered Dietician Nutritionist, LD</h6>
                            <MDBBtn href='tel:4043513889p310' tag="a" floating className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:kprox@mowatl.org' tag="a" floating className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            <MDBCard className="px-1 pb-5 text-center">
                <MDBCardBody>
                    <h2 className="h1-responsive mowabluetext font-weight-bold my-5">
                        Chefs & Kitchen Staff
                    </h2>
                    {/* <p className="grey-text w-responsive mx-auto mb-5">
                        We're honored to introduce the Meals on Wheels Atlanta team! This amazing group of people are the backbone of the MOWA organization. From fielding calls and emails to creating engaging fundraising events to preparing Senior meals, they are always ready to carry the load to fulfill our mission!
                    </p> */}
                    <MDBRow className='mb-5'>
                        <MDBCol md="6" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={chefrobert}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Robert Gerstenecker
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Executive Chef, Culinary Consultant</h6>
                            <MDBBtn href='tel:4043513889p317' tag="a" floating size="lg" className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:rgerstenecker@mowatl.org' tag="a" floating size="lg" className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>

                        </MDBCol>

                        <MDBCol md="6" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={chefchris}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="Sample avatar"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">Christopher Kelly</h4>
                            <h6 className="text-uppercase grey-text mb-3">
                                Executive Sous Chef
                            </h6>
                            <MDBBtn href='tel:4043513889p310' tag="a" floating size="lg" className="mx-1 mowablue mb-0">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <MDBBtn href='mailto:ckelly@mowatl.org' tag="a" floating size="lg" className="mx-1 mb-0 mowaorange">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='12'>
                            <h2 className="h1-responsive mowabluetext font-weight-bold my-5">
                                Kitchen Support Staff
                            </h2>
                            <img src={kitchen} className='d-block img-fluid mx-auto w-50' alt='MOWA kitchen support staff' />
                            <figcaption className="figure-caption">
                                From left: RaShonda E., Akheim C., Ameshia K.,Tyrell M., Hajji J., Tony W.
                            </figcaption>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='12'>
                            <h2 className="h1-responsive mowabluetext font-weight-bold my-5">
                                Digital Team
                            </h2>
                            <img src={digitalteam} alt='MOWA digital team' className='img-fluid' />
                            <figcaption className="figure-caption">
                                From left: Andrew A., Kendra N., Brandon J., Sydney H-L.
                            </figcaption>
                        </MDBCol>
                        {/* <MDBCol md='6'>
                            <h2 className="h1-responsive mowabluetext font-weight-bold my-5">
                                Volunteer Services
                            </h2>
                            <img src={volunteerteam} alt='MOWA Volunteer Services Team' />
                            <figcaption className="figure-caption">
                                From left: Jasmine D., Alissa R.
                            </figcaption>
                        </MDBCol> */}
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            <MDBCard className="px-1 pb-5 text-center">
                <MDBCardBody>
                    <h2 className="h1-responsive mowabluetext font-weight-bold my-5">
                        MOWA Board of Trustees
                            </h2>
                    <p className="grey-text w-responsive mx-auto mb-5">
                        MOWA would like to recognize our Board of Trustees. Our trustees are charged with making sure our organization runs at the highest levels and maximizes the full potential of our fundraising efforts.
                            </p>
                    <MDBRow>

                        <MDBCol md='6' className='text-left'>
                            <p className='blue-text'><b className='mowabluetext'>Louisa Johnson,</b> Board Chair & Partner at Seyfarth Shaw LLP</p>
                            <p className='blue-text'><b className='mowabluetext'>Erik Bryant,</b> Board Vice Chair & Sr. VP of Wealth Mgmt at Cadence Bank</p>
                            <p className='blue-text'><b className='mowabluetext'>Naima Judge,</b> Board Treasurer, Bank of America Private Wealth Mgmt, Managing Director & Market Investment Executive, U.S. Trust</p>
                            <p className='blue-text'><b className='mowabluetext'>Kim Tyson Chenevey,</b> Vice President, Wealth Advisor at Atlanta Wealth Management</p>
                            <p className='blue-text'><b className='mowabluetext'>Marlene Alexander,</b> Sr. VP at Ivy Investments</p>
                            <p className='blue-text'><b className='mowabluetext'>Dietmar G Hofmarcher,</b> Board Secretary, Siemens, Inc., Head of Accounting & Finance, Americas</p>
                            <p className='blue-text'><b className='mowabluetext'>Grené Baranco,</b> Sales Manager at Mercedes-Benz of Buckhead</p>
                            <p className='blue-text'><b className='mowabluetext'>Angela Blank,</b> Community Organizer</p>
                            <p className='blue-text'><b className='mowabluetext'>Rusty Bowers,</b> Owner at Pine Street Market</p>
                            <p className='blue-text'><b className='mowabluetext'>J. Vance Burgess,</b> Sr. Director of Real Estate at Chick-Fil-A</p>
                            <p className='blue-text'><b className='mowabluetext'>Trent Collins,</b> District Manager at Publix Supermarkets Inc.</p>
                        </MDBCol>
                        <MDBCol md='6' className='text-left'>
                            <p className='blue-text'><b className='mowabluetext'>Elise Durham,</b> Director of Communications, Interim | Mayor’s Office of Communications | Atlanta Mayor Keisha Lance Bottoms</p>
                            <p className='blue-text'><b className='mowabluetext'>Fayron Epps,</b> Asst. Professor at Nell Hodgson Woodruff School of Nursing at Emory</p>
                            <p className='blue-text'><b className='mowabluetext'>Sean Hyslop,</b> President at Sysco Atlanta</p>
                            <p className='blue-text'><b className='mowabluetext'>Sarah Beth Brown,</b> Global Customer Director at The Coca-Cola Company</p>
                            <p className='blue-text'><b className='mowabluetext'>Nick Leahy,</b> Atlanta Restauranteur</p>
                            <p className='blue-text'><b className='mowabluetext'>Rachel Martin,</b> Director of Marketing at Design Galleria</p>
                            <p className='blue-text'><b className='mowabluetext'>John Murnane,</b> McKinsey & Company, Senior Partner</p>
                            <p className='blue-text'><b className='mowabluetext'>Jovita Moore,</b> News Anchor at WSB-TV</p>
                            <p className='blue-text'><b className='mowabluetext'>Freda Porter,</b> Manager at SouthStar Energy</p>
                            <p className='blue-text'><b className='mowabluetext'>Louise Sams,</b> Executive VP & General Counsel at Turner Broadcasting (retired)</p>
                            <p className='blue-text'><b className='mowabluetext'>Edward Stephenson,</b> Sr. Principal Managing Partner at Workday, Inc.</p>
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