import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBBtn,  MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter } from 'mdbreact';
import Nav from './Nav';
import Footer from './Footer';
import dinnerserved from '../assets/dinnerserved.png';
import dinnerservedsm from '../assets/dinnerservedsm.png';
import mangiamo from '../assets/mangiamo.png';
import thanksgiving from '../assets/thanksgiving.png';
import christmas from '../assets/christmas.png';

const DinnerServed = () => {
    return (
        <div>
            <header style={{ marginBottom: '56px' }}>
                <Nav />
            </header>

            <div className='text-center'>

                {/* <h2 className='h1-responsive font-weight-bold mdb-color-text text-center mt-5'>Dinner is Served</h2> */}

                <img src={dinnerserved} style={{ width: '500px' }} className="img-fluid mb-4" alt="dinner is served poster" />

                <p className='mdb-color-text text-center w-responsive mx-auto mb-3'>
                    DINNER IS SERVED is a unique series of culinary dinner experiences for two or more people. Meals are conveniently delivered right to your door or expertly prepared in your own kitchen.  Each experience includes a four-course meal and hand-selected wine pairings.  Just unpack, plate & enjoy!
                </p>
                <p className='mdb-color-text text-center w-responsive mx-auto mb-5'>All meals are deliciously prepared by <b>Chef Robert Gerstenecker</b></p>

                <MDBRow className='mx-3'>
                    <MDBCol lg='4' md='12' className='mb-lg-0 mb-4'>
                        <MDBCard wide ecommerce>
                            <MDBCardImage
                                cascade
                                src={mangiamo}
                                top
                                alt='Mangiamo dinner'
                            />
                            <MDBCardBody cascade className='text-center'>
                                {/* <a href='#!' className='text-muted'>
                                    <h5>Camera</h5>
                                </a> */}
                                <MDBCardTitle>
                                    <strong>
                                        <a href='https://secure.givelively.org/donate/meals-on-wheels-atlanta/dinner-is-served' target='_blank' rel="noopener noreferrer">Mangiamo Dinner</a>
                                    </strong>
                                </MDBCardTitle>
                                <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
                                <MDBCardFooter className='px-1'>
                                    <span className='float-left mt-2 font-weight-bold'>
                                        $1000
                                    </span>
                                    <span className='float-right'>
                                        <MDBBtn href='https://secure.givelively.org/donate/meals-on-wheels-atlanta/dinner-is-served' target='_blank' className='blue-gradient btn-rounded font-weight-bold white-text' size='sm'>Order Now</MDBBtn>
                                    </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg='4' md='12' className='mb-lg-0 mb-4'>
                        <MDBCard wide ecommerce>
                            <MDBCardImage
                                cascade
                                src={thanksgiving}
                                top
                                alt='thanksgiving dinner'
                            />
                            <MDBCardBody cascade className='text-center'>
                                {/* <a href='#!' className='text-muted'>
                                    <h5>Photography</h5>
                                </a> */}
                                <MDBCardTitle>
                                    <strong>
                                        <a href='https://secure.givelively.org/donate/meals-on-wheels-atlanta/dinner-is-served' target='_blank' rel="noopener noreferrer">Thanksgiving Dinner</a>
                                    </strong>
                                </MDBCardTitle>
                                <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
                                <MDBCardFooter className='px-1'>
                                    <span className='float-left mt-2 font-weight-bold'>
                                        $500
                                    </span>
                                    <span className='float-right'>
                                        <MDBBtn href='https://secure.givelively.org/donate/meals-on-wheels-atlanta/dinner-is-served' target='_blank' className='blue-gradient btn-rounded font-weight-bold white-text' size='sm'>Order Now</MDBBtn>
                                    </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg='4' md='12' className='mb-lg-0 mb-4'>
                        <MDBCard wide ecommerce>
                            <MDBCardImage
                                cascade
                                src={christmas}
                                top
                                alt='christmas dinner'
                            />
                            <MDBCardBody cascade className='text-center'>
                                {/* <a href='#!' className='text-muted'>
                                    <h5>Smartphone</h5>
                                </a> */}
                                <MDBCardTitle>
                                    <strong>
                                        <a href='https://secure.givelively.org/donate/meals-on-wheels-atlanta/dinner-is-served' target='_blank' rel="noopener noreferrer">Christmas Dinner</a>
                                    </strong>
                                </MDBCardTitle>
                                <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
                                <MDBCardFooter className='px-1'>
                                    <span className='float-left mt-2 font-weight-bold'>
                                        $500
                                    </span>
                                    <span className='float-right'>
                                        <MDBBtn href='https://secure.givelively.org/donate/meals-on-wheels-atlanta/dinner-is-served' target='_blank' className='blue-gradient btn-rounded font-weight-bold white-text' size='sm'>Order Now</MDBBtn>
                                    </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default DinnerServed;