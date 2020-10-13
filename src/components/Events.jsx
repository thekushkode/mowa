import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import Nav from "./Nav";
import Footer from "./Footer";
import bentley from '../assets/bentley.png';
import wonder from '../assets/wonder.png';

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
                                <a href="https://secure.givelively.org/event/meals-on-wheels-atlanta/the-bentley-atlanta-golf-classic">
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
                                <strong>The Bentley Golf Classic</strong>
                            </h3>
                            <p>
                                This tournament provides a great opportunity for corporations to impact the communities they serve. All tournament proceeds are donated to Meals On Wheels Atlanta, which supports senior independence through meals, shelter, education and community.
                            </p>
                            <p>
                                Event Date: 10/20/2020
                            </p>
                            <p>
                                Location: <a href='https://goo.gl/maps/TnHUaSRBkhUtxCZd9' target='_blank' rel="noopener noreferrer">Piedmont Driving Club</a>
                            </p>
                            <MDBBtn href='https://secure.givelively.org/event/meals-on-wheels-atlanta/the-bentley-atlanta-golf-classic' color="success" size="md" className="waves-light " target='_blank'>
                                Get Tickets
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                    <MDBRow>
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
                    </MDBRow>
                    {/* <hr className="my-5" /> */}
                    {/* <MDBRow>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img
                                    className="img-fluid"
                                    src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                                    alt=""
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="7">
                            <a href="#!" className="indigo-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="suitcase" className="pr-2" />
                                    Food
                                </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>Title of the news</strong>
                            </h3>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
                                sit amet.
                            </p>
                            <p>
                                Event Date: 11/08/2018
                            </p>
                            <MDBBtn color="indigo" size="md" className="waves-light ">
                                Get Tickets
                        </MDBBtn>
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