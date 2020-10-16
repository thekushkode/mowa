import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView, MDBBtn, MDBIframe } from "mdbreact";
import { Link } from 'react-router-dom';
import './MOWAColors.css';
import Nav from "./Nav";
import Footer from "./Footer";

const InTheNews = () => {

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
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                        MOWA in the News!
                    </h2>
                    <p className="text-center w-responsive mx-auto mb-5">
                        Meals on Wheels Atlanta depends on it's community to help fight senior hunger- and that includes our media outlets. We are honored to have such a great group of media outlets in Atlanta to support our mission of ending senior hunger in Atlanta.
                    </p>
                    <MDBRow>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <MDBIframe src="https://www.youtube.com/embed/_jVoBtucMt8"></MDBIframe>
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="7">
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>Meals on Wheels Pandemic Impacts</strong>
                            </h3>
                            <p>
                                The COVID-19 pandemic has greatly impacted our services. We have had to cancel some of our largest revenue generating events. These events are responsible for the bulk of the donations we receive which go directly to supporting hungry Atlanta seniors. Please condsider making a donation or purchasing a gift from <a href='https://www.purposefulgourmetfoods.org/collections/purposeful-gourmet-foods'>Purposeful Gourmet Foods</a> to help fill the gap.
                            </p>
                            <p>
                                by&nbsp;
                                <a href="https://www.youtube.com/watch?v=_jVoBtucMt8">
                                    <strong>CBS46 Atlanta</strong>
                                </a>
                            </p>
                            <Link to='/donate'>
                                <MDBBtn size="md" className="waves-light mowablue btn-rounded">
                                    DONATE NOW!
                                </MDBBtn>
                            </Link>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                    <MDBRow>
                        <MDBCol lg="7">
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>Meals on Wheels Launches Purposeful Pecans</strong>
                            </h3>
                            <p>
                                MOWA is proud to announce our launch of Purposeful Gourmet Foods! Purposeful Gourmet Food's featured product is our Purposeful Pecans. Our products are handmade here in Georgia with the highest quality ingredient. The best part? 100% of the proceeds go towarg Atlanta's seniors. One 16oz. bag can provide a senior with 6 meals. <a href='https://www.purposefulgourmetfoods.org/collections/purposeful-gourmet-foods'>Visit the Purposeful Shop today!</a>
                            </p>
                            <p>
                                by&nbsp;
                                <a href="https://www.youtube.com/watch?v=zwf1gyKwEcw">
                                    <strong>Fox5 Atlanta</strong>
                                </a>
                            </p>
                            <Link to='/donate'>
                                <MDBBtn
                                    size="md"
                                    className="mowablue btn-rounded mb-lg-0 mb-4 waves-light"
                                >
                                    DONATE NOW!
                                </MDBBtn>
                            </Link>
                                <MDBBtn
                                    size="md"
                                    className="mowaorange btn-rounded mb-lg-0 mb-4 waves-light"
                                    href='https://www.purposefulgourmetfoods.org/collections/purposeful-gourmet-foods'
                                >
                                    SHOP PURPOSEFUL!
                                </MDBBtn>
                        </MDBCol>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <MDBIframe src="https://www.youtube.com/embed/zwf1gyKwEcw"></MDBIframe>
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                    <MDBRow>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <MDBIframe src="https://www.youtube.com/embed/8kdNLcWI7Io"></MDBIframe>
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="7">
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>MOWA Starts Pet Pantry to Feed Pets of Senior's</strong>
                            </h3>
                            <p>
                                Meal on Wheels Atlanta found that some of our seniors were having to give their meals to their pets because they couldn't afford the extra cost of pet food. We stepped in to create the Meals on Wheels Pet Pantry. This new initiative helps us keep meals on our seniors tables and food in their pets stomach's too. In additon to monetary donations, we accept dry dog & cat food, unopened treats, unopened kitty litter, and new storage containers.
                            </p>
                            <p>
                                by&nbsp;
                                <a href="https://www.youtube.com/watch?v=8kdNLcWI7Io">
                                    <strong>11Alive News Atlanta</strong>
                                </a>
                                , 11/08/2018
                            </p>
                            <Link to='/donate'>
                                <MDBBtn size="md" className="waves-light btn-rounded mowablue">
                                    DONATE NOW!
                                </MDBBtn>
                            </Link>
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

export default InTheNews;