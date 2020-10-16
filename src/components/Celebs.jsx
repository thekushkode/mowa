import React from "react";
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, 
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIframe
} from "mdbreact";
import { Link } from 'react-router-dom';
import './MOWAColors.css';

const Celebs = () => {
    return (
        <MDBContainer>
            <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem >
                <MDBCarouselInner>
                    <MDBRow>
                        <MDBCarouselItem itemId="1">
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/schI2sYisNs" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Matt Ryan</MDBCardTitle>
                                        <MDBCardText>
                                            NFL QB, Atlanta Falcons
                                        </MDBCardText>
                                        <Link to='/donate'><MDBBtn  className='btn-rounded mowablue'>Donate</MDBBtn></Link>
                                        <Link to='/volunteer'><MDBBtn  className='mowaorange btn-rounded'>Volunteer</MDBBtn></Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/sDGHl9atGSs" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Keisha Lance Bottoms</MDBCardTitle>
                                        <MDBCardText>
                                            Mayor of Atlanta
                                        </MDBCardText>
                                        <Link to='/donate'><MDBBtn  className='btn-rounded mowablue'>Donate</MDBBtn></Link>
                                        <Link to='/volunteer'><MDBBtn  className='mowaorange btn-rounded'>Volunteer</MDBBtn></Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/uE-Tr_cR5aM" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Ed Helms</MDBCardTitle>
                                        <MDBCardText>
                                            Actor, The Office, The Hangover
                                        </MDBCardText>
                                        <Link to='/donate'><MDBBtn  className='btn-rounded mowablue'>Donate</MDBBtn></Link>
                                        <Link to='/volunteer'><MDBBtn  className='mowaorange btn-rounded'>Volunteer</MDBBtn></Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/zIRs-vWoUcQ" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Warrick Dunn</MDBCardTitle>
                                        <MDBCardText>
                                            NFL RB, Atlanta Falcons
                                        </MDBCardText>
                                        <Link to='/donate'><MDBBtn  className='btn-rounded mowablue'>Donate</MDBBtn></Link>
                                        <Link to='/volunteer'><MDBBtn  className='mowaorange btn-rounded'>Volunteer</MDBBtn></Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/oQtR5QhZCVM" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Cynthia Bailey</MDBCardTitle>
                                        <MDBCardText>
                                            Model, RHOA Cast Member
                                        </MDBCardText>
                                        <Link to='/donate'><MDBBtn  className='btn-rounded mowablue'>Donate</MDBBtn></Link>
                                        <Link to='/volunteer'><MDBBtn  className='mowaorange btn-rounded'>Volunteer</MDBBtn></Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/aQoIn7aY4_w" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Lil Jon</MDBCardTitle>
                                        <MDBCardText>
                                            Entertainer, Producer
                                        </MDBCardText>
                                        <Link to='/donate'><MDBBtn  className='btn-rounded mowablue'>Donate</MDBBtn></Link>
                                        <Link to='/volunteer'><MDBBtn  className='mowaorange btn-rounded'>Volunteer</MDBBtn></Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/y1spvP6vasg" />
                                    <MDBCardBody>
                                        <MDBCardTitle>MOWA Instructional Video</MDBCardTitle>
                                        <MDBCardText>
                                            Everything you need to know about MOWA!
                                        </MDBCardText>
                                        <Link to='/donate'><MDBBtn  className='btn-rounded mowablue'>Donate</MDBBtn></Link>
                                        <Link to='/volunteer'><MDBBtn  className='mowaorange btn-rounded'>Volunteer</MDBBtn></Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/TOYkPyRFx-c" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Staff Video</MDBCardTitle>
                                        <MDBCardText>
                                            At MOWA, WE ARE FAMILY! Join us in our efforts to put an end to hunger for our Atlanta Seniors!
                                        </MDBCardText>
                                        <Link to='/donate'><MDBBtn  className='btn-rounded mowablue'>Donate</MDBBtn></Link>
                                        <Link to='/volunteer'><MDBBtn  className='mowaorange btn-rounded'>Volunteer</MDBBtn></Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/Z7-97Poye7U" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Thank you!</MDBCardTitle>
                                        <MDBCardText>
                                            Without the unbelievable support from volunteers in our community, all of this wouldn't be possible!
                                        </MDBCardText>
                                        <Link to='/donate'><MDBBtn  className='btn-rounded mowablue'>Donate</MDBBtn></Link>
                                        <Link to='/volunteer'><MDBBtn  className='mowaorange btn-rounded'>Volunteer</MDBBtn></Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            
                        </MDBCarouselItem>
                    </MDBRow>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default Celebs;