import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBBtn, MDBNavLink, MDBCardImage, MDBRotatingCard, MDBIcon } from "mdbreact";
import mary from '../assets/oldladyandwoman.jpg';

class SeniorStories extends Component {

    state = {
        flipped1: false,
    }

    handleFlipping = id => () => {
        const cardId = `flipped${id}`;
        this.setState({ [cardId]: !this.state[cardId] });
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='4' style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped1} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardImage
                                    top
                                    src={mary}
                                    overlay='white-slight'
                                    hover
                                    waves
                                    alt='MDBCard image cap'
                                />
                                {/* <MDBCardUp className='indigo lighten-1'>
                                    
                                </MDBCardUp>
                                <MDBAvatar className="mx-auto white" circle>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle fluid" />
                                </MDBAvatar> */}
                                <MDBCardBody style={{ height: "600px" }}>
                                    <h4 className="font-weight-bold mb-3">Meet Mary</h4>
                                    <p className="font-weight-bold blue-text">MOWA Recipient</p>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlipping(1)}>
                                        <MDBIcon icon="redo" /> Read Mary's Story
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ overflow: 'scroll' }}>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Mary was born in Aruba. At the age of 16, she was sent to London to complete school. After finishing school, she relocated to New York where she began working as a home attendant at a nursing home.
                                        When asked how MOWA has effected her life, she said, " This is the first time since I stopped working years ago that I have been able to wake up and enjoy a fresh piece of fruit because I do not receive enough money monthly to buy food and fresh produce. I particularly love the oranges, apples, and peaches the most."<br />
                                        Head to our donate page to help seniors like Mary.
                                    </p>
                                    <hr />
                                    <MDBBtn size="md" className="waves-light btn-rounded blue-gradient">
                                        <MDBNavLink className='p-0' style={{ color: 'white', fontSize: '20px' }} to='/donate'>Donate Now</MDBNavLink>
                                    </MDBBtn>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlipping(1)}>
                                        <MDBIcon icon="undo" /> Click here to rotate back
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md='4' style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped1} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardImage
                                    top
                                    src={mary}
                                    overlay='white-slight'
                                    hover
                                    waves
                                    alt='MDBCard image cap'
                                />
                                {/* <MDBCardUp className='indigo lighten-1'>
                                    
                                </MDBCardUp>
                                <MDBAvatar className="mx-auto white" circle>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle fluid" />
                                </MDBAvatar> */}
                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-3">Meet Mary</h4>
                                    <p className="font-weight-bold blue-text">MOWA Recipient</p>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlipping(1)}>
                                        <MDBIcon icon="redo" /> Read Mary's Story
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ overflow: 'scroll' }}>
                                <MDBCardBody>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Meet Mary. She was born in Aruba and a majority of her family is from Grenada. At the age of 16, she was sent to London to complete school. After finishing school, she relocated to New York where she began working as a home attendant at a nursing home.
                                        When asked about the impact that our home-delivered meals and @royalfoodservicega produce boxes have on her life, she said, " This is the first time since I stopped working years ago that I have been able to wake up and enjoy a fresh piece of fruit because I do not receive enough money monthly to buy food and fresh produce. I particularly love the oranges, apples, and peaches the most."<br />
                                        Mary's furry friend, Boobie, is also fed through our Pet Pantry program. "My dog really loves the food that Meals On Wheels Atlanta has been supplying to her. We are so grateful for your services," she said.
                                        Head toour donate page to help seniors like Mary.
                                    </p>
                                    <hr />
                                    <MDBBtn size="md" className="waves-light btn-rounded blue-gradient">
                                        <MDBNavLink className='p-0' style={{ color: 'white', fontSize: '20px' }} to='/donate'>Donate Now</MDBNavLink>
                                    </MDBBtn>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlipping(1)}>
                                        <MDBIcon icon="undo" /> Click here to rotate back
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md='4' style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped1} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardImage
                                    top
                                    src={mary}
                                    overlay='white-slight'
                                    hover
                                    waves
                                    alt='MDBCard image cap'
                                />
                                {/* <MDBCardUp className='indigo lighten-1'>
                                    
                                </MDBCardUp>
                                <MDBAvatar className="mx-auto white" circle>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle fluid" />
                                </MDBAvatar> */}
                                <MDBCardBody>
                                    <h4 className="font-weight-bold mb-3">Meet Mary</h4>
                                    <p className="font-weight-bold blue-text">MOWA Recipient</p>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlipping(1)}>
                                        <MDBIcon icon="redo" /> Read Mary's Story
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back">
                                <MDBCardBody>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <div style={{ overflow: 'scroll' }}>
                                        <p>
                                            Meet Mary. She was born in Aruba and a majority of her family is from Grenada. At the age of 16, she was sent to London to complete school. After finishing school, she relocated to New York where she began working as a home attendant at a nursing home.
                                        When asked about the impact that our home-delivered meals and @royalfoodservicega produce boxes have on her life, she said, " This is the first time since I stopped working years ago that I have been able to wake up and enjoy a fresh piece of fruit because I do not receive enough money monthly to buy food and fresh produce. I particularly love the oranges, apples, and peaches the most."<br />
                                        Mary's furry friend, Boobie, is also fed through our Pet Pantry program. "My dog really loves the food that Meals On Wheels Atlanta has been supplying to her. We are so grateful for your services," she said.
                                        Head toour donate page to help seniors like Mary.
                                    </p>
                                    </div>
                                    <hr />
                                    <MDBBtn size="md" className="waves-light btn-rounded blue-gradient">
                                        <MDBNavLink className='p-0' style={{ color: 'white', fontSize: '20px' }} to='/donate'>Donate Now</MDBNavLink>
                                    </MDBBtn>
                                    <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlipping(1)}>
                                        <MDBIcon icon="undo" /> Click here to rotate back
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        );
    }
}

export default SeniorStories;