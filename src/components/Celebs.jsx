import React from "react";
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIframe
} from "mdbreact";

const Celebs = () => {
    return (
        <MDBContainer>
            <MDBCarousel activeItem={1} length={3} slide={true} showControls={false} showIndicators={true} multiItem>
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
                                        <MDBBtn className='blue-gradient btn-rounded' href='/donate'>Donate</MDBBtn>
                                        <MDBBtn className='purple-gradient btn-rounded'href='/volunteer'>Volunteer</MDBBtn>
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
                                        <MDBBtn className='blue-gradient btn-rounded' href='/donate'>Donate</MDBBtn>
                                        <MDBBtn className='purple-gradient btn-rounded' href='/volunteer'>Volunteer</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/zIRs-vWoUcQ" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Warrick Dunn</MDBCardTitle>
                                        <MDBCardText>
                                            NFL RB, Atlanta Falcons
                                        </MDBCardText>
                                        <MDBBtn className='blue-gradient btn-rounded' href='/donate'>Donate</MDBBtn>
                                        <MDBBtn className='purple-gradient btn-rounded' href='/volunteer'>Volunteer</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/oQtR5QhZCVM" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Cynthia Bailey</MDBCardTitle>
                                        <MDBCardText>
                                            Model, RHOA Cast Member
                                        </MDBCardText>
                                        <MDBBtn className='blue-gradient btn-rounded' href='/donate'>Donate</MDBBtn>
                                        <MDBBtn className='purple-gradient btn-rounded' href='/volunteer'>Volunteer</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/Es2CNTUYpmk" />
                                    <MDBCardBody>
                                        <MDBCardTitle>MOWA Celeb Endorsements</MDBCardTitle>
                                        <MDBCardText>
                                            From movie stars to entertainers, Atlanta's elite stand with Meals on Wheels Atlanta!
                                        </MDBCardText>
                                        <MDBBtn className='blue-gradient btn-rounded' href='/donate'>Donate</MDBBtn>
                                        <MDBBtn className='purple-gradient btn-rounded' href='/volunteer'>Volunteer</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/y1spvP6vasg" />
                                    <MDBCardBody>
                                        <MDBCardTitle>MOWA Instructional Video</MDBCardTitle>
                                        <MDBCardText>
                                            Everything you need to know about MOWA!
                                        </MDBCardText>
                                        <MDBBtn className='blue-gradient btn-rounded' href='/donate'>Donate</MDBBtn>
                                        <MDBBtn className='purple-gradient btn-rounded' href='/volunteer'>Volunteer</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/TOYkPyRFx-c" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Staff Video</MDBCardTitle>
                                        <MDBCardText>
                                            At MOWA, WE ARE FAMILY! Join us in our efforts to put an end to hunger for our Atlanta Seniors!
                                        </MDBCardText>
                                        <MDBBtn className='blue-gradient btn-rounded' href='/donate'>Donate</MDBBtn>
                                        <MDBBtn className='purple-gradient btn-rounded' href='/volunteer'>Volunteer</MDBBtn>
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
                                        <MDBBtn className='blue-gradient btn-rounded' href='/donate'>Donate</MDBBtn>
                                        <MDBBtn className='purple-gradient btn-rounded' href='/volunteer'>Volunteer</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBIframe src="https://www.youtube.com/embed/u8I3iIiXK2s" />
                                    <MDBCardBody>
                                        <MDBCardTitle>We Need YOU!</MDBCardTitle>
                                        <MDBCardText>
                                            Now more than ever we need the support of our amazing Atlanta community. Your help means an Atlanta Senior won't go hungry.
                                        </MDBCardText>
                                        <MDBBtn className='blue-gradient btn-rounded' href='/donate'>Donate</MDBBtn>
                                        <MDBBtn className='purple-gradient btn-rounded' href='/volunteer'>Volunteer</MDBBtn>
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