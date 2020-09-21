import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBRotatingCard, MDBIcon } from "mdbreact";
import logo from '../assets/mowaaa.png';

class HomeRepairs extends Component {

    state = {
        flipped1: false,
    }

    handleFlipping = id => () => {
        const cardId = `flipped${id}`;
        this.setState({ [cardId]: !this.state[cardId] });
    }

    render() {
        return (
            <div>
                <header style={{ marginBottom: '56px' }}>

                </header>

            <MDBContainer>

                {/* First Row */}
                <MDBRow between>
                    <MDBCol md='4' style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped1} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="" />
                                </MDBCardUp>
                                {/* <MDBAvatar className="mx-auto white" circle>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle" />
                                </MDBAvatar> */}
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <p className="font-weight-bold blue-text">Web developer</p>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(1)}>
                                        <MDBIcon icon='hand-point-right' /> See Results!
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <ul className="list-inline py-2">
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg fb-ic">
                                                <MDBIcon fab icon="facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg tw-ic">
                                                <MDBIcon fab icon="twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg gplus-ic">
                                                <MDBIcon fab icon="google-plus" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg li-ic">
                                                <MDBIcon fab icon="linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(1)}>
                                        <MDBIcon icon='hand-point-left' /> See Before
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md='4' style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped2} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="" />
                                </MDBCardUp>
                                {/* <MDBAvatar className="mx-auto white" circle>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle" />
                                </MDBAvatar> */}
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <p className="font-weight-bold blue-text">Web developer</p>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(2)}>
                                        <MDBIcon icon='hand-point-right' /> See Results!
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <ul className="list-inline py-2">
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg fb-ic">
                                                <MDBIcon fab icon="facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg tw-ic">
                                                <MDBIcon fab icon="twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg gplus-ic">
                                                <MDBIcon fab icon="google-plus" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg li-ic">
                                                <MDBIcon fab icon="linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(2)}>
                                        <MDBIcon icon='hand-point-left' /> See Before
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md='4' style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped3} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="" />
                                </MDBCardUp>
                                {/* <MDBAvatar className="mx-auto white" circle>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle" />
                                </MDBAvatar> */}
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <p className="font-weight-bold blue-text">Web developer</p>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(3)}>
                                        <MDBIcon icon='hand-point-right' /> See Results!
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <ul className="list-inline py-2">
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg fb-ic">
                                                <MDBIcon fab icon="facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg tw-ic">
                                                <MDBIcon fab icon="twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg gplus-ic">
                                                <MDBIcon fab icon="google-plus" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg li-ic">
                                                <MDBIcon fab icon="linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(3)}>
                                        <MDBIcon icon='hand-point-left' /> See Before
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                </MDBRow>

                {/* Second Row */}
                <MDBRow between>
                    <MDBCol md='4' style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped4} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="" />
                                </MDBCardUp>
                                {/* <MDBAvatar className="mx-auto white" circle>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle" />
                                </MDBAvatar> */}
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <p className="font-weight-bold blue-text">Web developer</p>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(4)}>
                                        <MDBIcon icon='hand-point-right' /> See Results!
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <ul className="list-inline py-2">
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg fb-ic">
                                                <MDBIcon fab icon="facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg tw-ic">
                                                <MDBIcon fab icon="twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg gplus-ic">
                                                <MDBIcon fab icon="google-plus" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg li-ic">
                                                <MDBIcon fab icon="linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(4)}>
                                        <MDBIcon icon='hand-point-left' /> See Before
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md='4' style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped5} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="" />
                                </MDBCardUp>
                                {/* <MDBAvatar className="mx-auto white" circle>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle" />
                                </MDBAvatar> */}
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <p className="font-weight-bold blue-text">Web developer</p>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(5)}>
                                        <MDBIcon icon='hand-point-right' /> See Results!
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <ul className="list-inline py-2">
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg fb-ic">
                                                <MDBIcon fab icon="facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg tw-ic">
                                                <MDBIcon fab icon="twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg gplus-ic">
                                                <MDBIcon fab icon="google-plus" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg li-ic">
                                                <MDBIcon fab icon="linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(5)}>
                                        <MDBIcon icon='hand-point-left' /> See Before
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md='4' style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped6} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="" />
                                </MDBCardUp>
                                {/* <MDBAvatar className="mx-auto white" circle>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle" />
                                </MDBAvatar> */}
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <p className="font-weight-bold blue-text">Web developer</p>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(6)}>
                                        <MDBIcon icon='hand-point-right' /> See Results!
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <ul className="list-inline py-2">
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg fb-ic">
                                                <MDBIcon fab icon="facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg tw-ic">
                                                <MDBIcon fab icon="twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg gplus-ic">
                                                <MDBIcon fab icon="google-plus" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg li-ic">
                                                <MDBIcon fab icon="linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(6)}>
                                        <MDBIcon icon='hand-point-left' /> See Before
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                </MDBRow>

                {/* Third Row */}
                <MDBRow between>
                    <MDBCol md='4' style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped7} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="" />
                                </MDBCardUp>
                                {/* <MDBAvatar className="mx-auto white" circle>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle" />
                                </MDBAvatar> */}
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <p className="font-weight-bold blue-text">Web developer</p>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(7)}>
                                        <MDBIcon icon='hand-point-right' /> See Results!
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <ul className="list-inline py-2">
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg fb-ic">
                                                <MDBIcon fab icon="facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg tw-ic">
                                                <MDBIcon fab icon="twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg gplus-ic">
                                                <MDBIcon fab icon="google-plus" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg li-ic">
                                                <MDBIcon fab icon="linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(7)}>
                                        <MDBIcon icon='hand-point-left' /> See Before
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md='4' style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped8} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="" />
                                </MDBCardUp>
                                {/* <MDBAvatar className="mx-auto white" circle>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle" />
                                </MDBAvatar> */}
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <p className="font-weight-bold blue-text">Web developer</p>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(8)}>
                                        <MDBIcon icon='hand-point-right' /> See Results!
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <ul className="list-inline py-2">
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg fb-ic">
                                                <MDBIcon fab icon="facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg tw-ic">
                                                <MDBIcon fab icon="twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg gplus-ic">
                                                <MDBIcon fab icon="google-plus" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg li-ic">
                                                <MDBIcon fab icon="linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(8)}>
                                        <MDBIcon icon='hand-point-left' /> See Before
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                    <MDBCol md='4' style={{ minHeight: '26rem', maxWidth: "22rem" }}>
                        <MDBRotatingCard flipped={this.state.flipped9} className="text-center h-100 w-100">
                            <MDBCard className="face front">
                                <MDBCardUp>
                                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="" />
                                </MDBCardUp>
                                {/* <MDBAvatar className="mx-auto white" circle>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle" />
                                </MDBAvatar> */}
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                                    <p className="font-weight-bold blue-text">Web developer</p>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(9)}>
                                        <MDBIcon icon='hand-point-right' /> See Results!
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="face back" style={{ height: "400px" }}>
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <h4 className="font-weight-bold">About me</h4>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                        dolores nihil quae in mollitia asperiores ut rerum
                                        repellendus, voluptatum eum, officia laudantium quaerat?
                                    </p>
                                    <hr />
                                    <ul className="list-inline py-2">
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg fb-ic">
                                                <MDBIcon fab icon="facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg tw-ic">
                                                <MDBIcon fab icon="twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg gplus-ic">
                                                <MDBIcon fab icon="google-plus" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg li-ic">
                                                <MDBIcon fab icon="linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(9)}>
                                        <MDBIcon icon='hand-point-left' /> See Before
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
        );
    }
}

export default HomeRepairs;