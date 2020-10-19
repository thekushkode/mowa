import React, { Component } from "react";
import { MDBCol, MDBRow, MDBCard } from "mdbreact";
import peeps from '../assets/esther.jpeg';
import Nav from "./Nav";
import Footer from "./Footer";
import mowa from '../assets/mowaaa.png';


class EmailThankYou extends Component {
    

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
                                    <h2 className='text-center white-text my-4'>Thank You, your submission has been sent!</h2>
                                    <p className='font-weight-bold text-center text-white my-4'>A MOWA Team Member Will Be In Touch Soon!</p>
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

export default EmailThankYou;