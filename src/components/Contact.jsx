import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import Nav from "./Nav";
import Footer from "./Footer";

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <header style={{ marginBottom: '100px' }}>
                <Nav />
            </header>
            <section className="my-5">
                <h2 className="h1-responsive font-weight-bold mowabluetext text-center my-5">
                    Contact us
                </h2>
                <p className="text-center w-responsive mx-auto pb-5">
                    Have Questions? Need to get in touch with us? Shoot us a message and we will get back in touch with shortly. <br/>Thanks for visiting Meals on Wheels Atlanta!
                </p>
                <MDBRow>
                    <MDBCol lg="5" className="lg-0 mb-4">
                        <MDBCard>
                            <MDBCardBody>
                                <div className="form-header mowablue">
                                    <h3 className="mt-2">
                                        <MDBIcon icon="envelope" /> Get In Touch:
                                    </h3>
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="user"
                                        label="Your name"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-name"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="envelope"
                                        label="Your email"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-email"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="tag"
                                        label="Subject"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-subject"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="pencil-alt"
                                        label="Icon Prefix"
                                        iconClass="grey-text"
                                        type="textarea"
                                        id="form-text"
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn className="mowablue btn-rounded">Submit</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="7">
                        <div
                            id="map-container"
                            className="rounded z-depth-1-half map-container"
                            style={{ height: "400px" }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.4469721485366!2d-84.41224825009083!3d33.800776680580285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f504e3b6fe68d5%3A0x8b68f37dbe9633fe!2sMeals%20On%20Wheels%20Atlanta!5e0!3m2!1sen!2sus!4v1599231248600!5m2!1sen!2sus"
                                title="Meals on Wheels ATL"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                            />
                        </div>
                        <br />
                        <MDBRow className="text-center">
                            <MDBCol md="4">
                                <MDBBtn tag="a" href='tel:4043513889' floating className="mowablue">
                                    <MDBIcon icon="phone" />
                                </MDBBtn>
                                <p>404.351.3889</p>

                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating className="mowablue">
                                    <MDBIcon icon="fax" />
                                </MDBBtn>
                                <p>404.352.0595</p>

                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn tag="a" href='mailto:info@mowatl.org' floating className="mowablue">
                                    <MDBIcon icon="envelope" />
                                </MDBBtn>
                                <p>info@mowatl.org</p>

                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default ContactPage;