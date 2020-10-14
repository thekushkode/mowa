import React, { Component } from "react";
import { MDBCol, MDBRow, MDBCard } from "mdbreact";
import peeps from '../assets/esther.jpeg';
import Nav from "./Nav";
import Footer from "./Footer";
import mowa from '../assets/mowaaa.png';


class ThankYou extends Component {
    

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <header style={{ marginBottom: '56px' }}>
                    <Nav />
                </header>

                <div>
                    <MDBCard
                        className="card-image"
                        style={{
                            backgroundImage: "url(" + peeps + ")"
                        }}
                    >
                        <div className="rgba-black-strong py-5 px-2">
                            <MDBRow>
                                <MDBCol md='12' className='text-center'>
                                    <img src={mowa} alt='MOWA logo' className='w-50 mx-auto' />
                                    <h2 className='text-center white-text my-4'>Thank You for Your Donation!</h2>
                                    <p className='font-weight-bold text-center text-white my-4'>Your generous gift has been processed.<br/>We truly appreciate your continued support in ending hunger for Atlanta's Seniors!</p>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCard>
                </div>
                <footer style={{ marginTop: '-25px' }}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default ThankYou;