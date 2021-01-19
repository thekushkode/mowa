import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter } from 'mdbreact';
import Nav from './Nav';
import Footer from './Footer';
import dinnerserved from '../assets/dinnerserved.png';
import valentines from '../assets/dis.png';
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
                    DINNER IS SERVED is a unique series of culinary dinner experiences serving up to 8 guests. Enjoy the perfect curated meal for any holiday or special occasion throughout the year. For your convenience, we offer contact-free curbside pick-up. Just unpack, plate and enjoy!
                </p>
                <p className='mowabluetext text-center w-responsive mx-auto mb-5'>All meals are deliciously prepared by our Executive Chef, <b>Robert Gerstenecker</b>. Proceeds benefit our home-delivered meal services program for Atlanta’s homebound senior neighbors.</p>
                <p className='mowabluetext text-center w-responsive mx-auto font-weight-bold'>Upcoming Featured Occasions:</p>

                <p className='m-0 p-0'>Mother's Day</p>
                <p className='m-0 p-0'>Father's Day</p>
                <p className='m-0 p-0'>Fourth of July</p>
                <p className='m-0 p-0'>Thanksgiving</p>
                <p className='mb-3 p-0'>Christmas</p>

                <p className='mowabluetext text-center w-responsive mx-auto mb-5'>For private gourmet dinners catered at your home, please contact <a href='mailto:caguas@mowatl.org'>caguas@mowatl.org</a>. (Experience starts at 10 guests or more.)</p>
                <MDBRow className='mx-3 d-flex justify-content-center'>
                    <MDBCol lg='8' md='8' className='mb-lg-0 mb-4'>
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
                                        <a href='https://secure.givelively.org/event/meals-on-wheels-atlanta/dinner-is-served/dinner-is-served-valentine-s-day' target='_blank' rel="noopener noreferrer">Valentines Day Dinner</a>
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
                                        <MDBBtn href='https://secure.givelively.org/event/meals-on-wheels-atlanta/dinner-is-served/dinner-is-served-valentine-s-day' target='_blank' className='mowablue btn-rounded font-weight-bold white-text mr-3' size='sm'>Order Now</MDBBtn>
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