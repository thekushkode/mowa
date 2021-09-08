import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import Nav from "./Nav";
import Footer from "./Footer";
import bentley from '../assets/newgolf.png';
import wonder from '../assets/wonder.jpg';

const Events = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <header>
                <Nav />
            </header>

            <MDBCard className="mt-5 px-5 pb-5">
                <MDBCardBody>
                    <h2 className="h1-responsive font-weight-bold mowabluetext text-center my-5">
                        MOWA Events
                    </h2>
                    <p className="text-center w-responsive mx-auto mb-5">
                        Meals on Wheels is always coming up with fresh, fun events for you to be a part of! In addition to having a good time, you will also be supporting the MOWA mission of supporting senior independence through meals, shelter, education, and community!
                    </p>
                    <MDBRow>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img
                                    className="img-fluid"
                                    src={bentley}
                                    alt="bentley golf classic poster"
                                />
                                <a href="https://secure.givelively.org/event/meals-on-wheels-atlanta/21st-annual-meals-on-wheels-atlanta-golf-classic">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="7">
                            <a href="#!" className="green-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="golf-ball" className="pr-2" />
                                    Sport
                                </h6>
                            </a>
                            <h3 className="font-weight-bold mowabluetext mb-3 p-0">
                                <strong>21st Annual MOWA Golf Classic</strong>
                            </h3>
                            <p>
                                We are thrilled to announce that the 21st Annual Meals On Wheels Atlanta Golf Classic will take place on Tuesday, October 26th at the Piedmont Driving Club! This all-inclusive event combines tasty cuisine, hand-crafted libations, player gift bags, prizes, raffles, and an exceptional round of golf! All proceeds from this exclusive golf experience will allow Meals On Wheels Atlanta to fill the empty plates and hearts of our homebound senior neighbors.
                            </p>
                            <p>
                                Event Date: 10/26/2021
                            </p>
                            <p>
                                Location: <a href='https://goo.gl/maps/TnHUaSRBkhUtxCZd9' target='_blank' rel="noopener noreferrer">Piedmont Driving Club</a>
                            </p>
                            <MDBBtn href='https://secure.givelively.org/event/meals-on-wheels-atlanta/21st-annual-meals-on-wheels-atlanta-golf-classic' color="success" size="md" className="waves-light " target='_blank'>
                                Get Tickets
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                    {/* <MDBRow>
                        <MDBCol lg="7">
                            <a href="#!" className="pink-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon='video' className="pr-2" />
                                    Lifestyle
                                </h6>
                            </a>
                            <h3 className="font-weight-bold mowabluetext mb-3 p-0">
                                <strong>Reelz on Wheels: Wonder Woman</strong>
                            </h3>
                            <p>
                                Join us for an old school drive-in movie experience! All cars will be socially distanced and sound will be transmitted directly into your FM/AM radio as well as through our outdoor speakers! Come enjoy a night out and support the MOWA mission!
                            </p>
                            <p>
                                Event Date: 09/24/2020
                            </p>
                            <p>
                                Location: <a href='https://g.page/springscinema?share' target='_blank' rel="noopener noreferrer">The Springs Cinema & TapHouse</a>
                            </p>
                            <MDBBtn
                            href='https://secure.givelively.org/event/meals-on-wheels-atlanta/reelz-on-wheels-drive-in-wonder-woman'
                                color="pink"
                                size="md"
                                className="mb-lg-0 mb-4 waves-light"
                                target='_blank'
                            >
                                Get Tickets
                        </MDBBtn>
                        </MDBCol>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img
                                    className="img-fluid"
                                    src={wonder}
                                    alt="wonder woman reelz on wheels poster"
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                    </MDBRow> */}
                </MDBCardBody>
            </MDBCard>
            <footer style={{ marginTop: '-25px' }}>
                <Footer />
            </footer>
        </div>
    );
}

export default Events;