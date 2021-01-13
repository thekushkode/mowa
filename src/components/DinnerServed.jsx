import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter } from 'mdbreact';
import Nav from './Nav';
import Footer from './Footer';
import dinnerserved from '../assets/dinnerserved.png';
import valentines from '../assets/valentines.png';
import valdinner from '../assets/valdinner.jpeg';
import './MOWAColors.css';

const DinnerServed = () => {
    return (
        <div>
            <header style={{ marginBottom: '56px' }}>
                <Nav />
            </header>

            <div className='text-center'>

                <img src={dinnerserved} style={{ width: '500px' }} className="img-fluid mb-4" alt="dinner is served poster" />

                <p className='mowabluetext text-center w-responsive mx-auto mb-3'>
                    DINNER IS SERVED is a unique series of culinary dinner experiences for two or more people. Meals are conveniently delivered right to your door or expertly prepared in your own kitchen.  Each experience includes a four-course meal and hand-selected wine pairings.  Just unpack, plate & enjoy!
                </p>
                <p className='mowabluetext text-center w-responsive mx-auto mb-5'>With the holidays around every corner DINNER IS SERVED provides the perfect holiday meal without all of the hustle and bustle. These delicious "to go" packages include a full menu of holiday favorites and can serve eight or more.<br /><br />All meals are deliciously prepared by <b>Chef Robert Gerstenecker</b></p>

                <MDBRow className='mx-3'>
                    <MDBCol lg='12' md='12' className='mb-lg-0 mb-4'>
                        <MDBCard wide ecommerce>
                            <MDBCardImage
                                cascade
                                src={valentines}
                                top
                                alt='valentines day dinner'
                            />
                            <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle>
                                    <strong>
                                        <a href='https://secure.givelively.org/event/meals-on-wheels-atlanta/dinner-is-served-27237709-628c-4e58-bbc7-ecdf300c417d' target='_blank' rel="noopener noreferrer">Valentines Day Dinner</a>
                                    </strong>
                                </MDBCardTitle>
                                <MDBCardText>Each dinner benefits Meals on Wheels Atlanta's home delivered meal services program for Seniors.<br />All meals are deliciously prepared by Chef Robert Gerstenecker.<br />
                                    <h5 className='text-center mt-2'>Order Deadline: February 09, 2021</h5>
                                    {/* <p className='font-weight-bold mt-3'>Orders received by 02.09.2021 will receive a <br />FREE bottle of wine!</p> */}
                                </MDBCardText>
                                <MDBCardImage
                                    cascade
                                    src={valdinner}
                                    top
                                    alt='valentines day dinner'
                                />
                                <MDBCardFooter className='px-1 d-flex justify-content-between'>
                                    <span className='mt-2 font-weight-bold ml-3'>
                                        $300: Feeds 2 People
                                    </span>
                                    <span>
                                        <MDBBtn href='https://secure.givelively.org/event/meals-on-wheels-atlanta/dinner-is-served-27237709-628c-4e58-bbc7-ecdf300c417d' target='_blank' className='mowablue btn-rounded font-weight-bold white-text mr-3' size='sm'>Order Now</MDBBtn>
                                    </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    {/* <MDBCol lg='6' md='6' className='mb-lg-0 mb-4'>
                        <MDBCard wide ecommerce>
                            <MDBCardImage
                                cascade
                                src={christmasmenu}
                                top
                                alt='christmas dinner'
                            />
                            <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle>
                                    <strong>
                                        <a href='https://secure.givelively.org/event/meals-on-wheels-atlanta/dinner-is-served-27237709-628c-4e58-bbc7-ecdf300c417d' target='_blank' rel="noopener noreferrer">Christmas Dinner</a>
                                    </strong>
                                </MDBCardTitle>
                                <MDBCardText>Each dinner benefits Meals on Wheels Atlanta's home delivered meal services program for Seniors.<br />All meals are deliciously prepared by Chef Robert Gerstenecker.<br />
                                    <h5 className='text-center mt-2'>Order Deadline: December 11, 2020</h5>
                                    <p className='font-weight-bold mt-3'>Orders received by 12.11.2020 will receive a <br />FREE bottle of wine!</p>
                                </MDBCardText>
                                <MDBCardImage
                                    cascade
                                    src={christmas}
                                    top
                                    alt='christmas dinner'
                                />
                                <MDBCardFooter className='px-1 d-flex justify-content-between'>
                                    <span className='mt-2 font-weight-bold ml-3'>
                                        $500: Feeds 8 People
                                    </span>
                                    <span>
                                        <MDBBtn href='https://secure.givelively.org/event/meals-on-wheels-atlanta/dinner-is-served-27237709-628c-4e58-bbc7-ecdf300c417d' target='_blank' className='mowablue btn-rounded font-weight-bold white-text mr-3' size='sm'>Order Now</MDBBtn>
                                    </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol> */}
                </MDBRow>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default DinnerServed;