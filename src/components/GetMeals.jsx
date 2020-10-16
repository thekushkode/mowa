import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBIcon, MDBIframe, MDBContainer } from "mdbreact";
import { Link } from 'react-router-dom';
import "./MOWAColors.css";
import Nav from "./Nav";
import Footer from "./Footer";
import old2 from '../assets/esther.jpeg';
import old3 from '../assets/blackman1.png';
import volback from '../assets/delivery1.jpg';
import blady from '../assets/blacklady1.jpeg';
import bman from '../assets/blackman2.jpg';
import ZipCodeModal from "./ZipCodeModal";
import MealContact from "./MealContactModal";

const GetMeals = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <header style={{ marginBottom: '100px' }}>
                <Nav />
            </header>
            <section className="mt-5">
                <h2 className="h1-responsive font-weight-bold text-center mowabluetext my-5">
                    Meal Services
                </h2>
                <p className="text-center w-responsive mx-auto mb-3">
                    Our flagship program, Meal Services, provides nourishing meals to low-income and homebound seniors in Atlanta who are unable to afford or access adequate nutrition. Currently, the meal services program delivers meals every Saturday to frail, homebound and low-income seniors residing in Fulton County. <b>Having trouble finding your local office? <a href='mailto:nmcintosh@mowatl.org?subject=Meal Services Inquiry'>Contact us</a>, visit our <Link to='/faq'>FAQ page</Link> or use the Find a Provider tool at the bottom of the page!</b>
                </p>
                <div className="d-flex justify-content-center">
                    {/* <MDBRow>
                        <MDBCol md='6'>
                            <ZipCodeModal />
                        </MDBCol>
                        <MDBCol md='6'>
                            <MealContact />
                        </MDBCol>
                    </MDBRow> */}
                    <ZipCodeModal />
                    <MealContact />
                </div>
            </section>
            <hr className="my-4 w-75" />
            <MDBContainer>
                <h2 className="font-weight-bold mowabluetext text-center mb-5">
                    Our Services
                </h2>
                <MDBRow >
                    <MDBCol md="7">
                        <MDBRow className="mb-3 mt-2">
                            <MDBCol size="1">
                                <MDBIcon icon="truck" size="lg" className="mowabluetext" />
                            </MDBCol>
                            <MDBCol xl="10" md="11" size="10">
                                <h5 className="font-weight-bold mowabluetext mb-3">Home Deliveries</h5>
                                <p className="mowabluetext">
                                    Our team, along with our helpful and much needed volunteers, hit the streets every week to deliver nutritious meals to qualifying Atlanta seniors. Check out our <Link to='/volunteer'>volunteers</Link> page to get involved!
                                </p>
                                <p className="mowabluetext">
                                    Food is medicine. Our meals are designed by our Registered Dietitian Nutritionist, with the help of our Executive Chef, to meet most dietary restrictions, including:
                                </p>
                                <MDBRow>
                                    <MDBCol>
                                        <ul className="mowabluetext">
                                            <li>Low Sodium</li>
                                            <li>Carb-Controlled</li>
                                            <li>Modified (Low Sodium & Carb-Controlled)</li>
                                            <li>Mechanical Soft</li>
                                        </ul>
                                    </MDBCol>
                                    <MDBCol>
                                        <ul className="mowabluetext">
                                            <li>Vegetarian</li>
                                            <li>Renal</li>
                                            <li>Ensure Only</li>
                                        </ul>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol size="1">
                                <MDBIcon icon="users" size="lg" className="mowabluetext" />
                            </MDBCol>
                            <MDBCol xl="10" md="11" size="10">
                                <h5 className="font-weight-bold mowabluetext mb-3">Congregate Meals</h5>
                                <p className="mowabluetext">
                                    Congregate meals are nutritious meals served hot to groups of 20 senior clients or more, usually located at community centers. The 30-day menu rotates quarterly and follows the Dietary Guidelines for Americans 2015-2020 for Older Adults. All MOWA meals are created by the MOWA Registered Dietitian with the input of our Executive and Executive Sous chefs.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol size="1">
                                <MDBIcon icon="shopping-cart" size="lg" className="mowabluetext" />
                            </MDBCol>
                            <MDBCol xl="10" md="11" size="10">
                                <h5 className="font-weight-bold mowabluetext mb-3">Food Pantry</h5>
                                <p className="mowabluetext">
                                    Meals On Wheels Atlanta offers a Pantry Program which serves as a critical stop-gap for seniors on our “can’t” waitlist who are waiting to receive home-delivered meals. Seniors receive a bag filled with a month-long supply of shelf-stable items.
                                </p>
                                <p className="mowabluetext">Directions for Dropping Off Pantry Items:<br />Donations of food may be dropped off in our lobby during normal business hours, 9am – 5pm, Monday – Friday.</p>
                                <p className="mowabluetext">Please note: <b>NO EXPIRED FOODS</b></p>
                                <ul className="mowabluetext">
                                    <li>Preferably low sodium cans.</li>
                                    <li>Preferably new or un-dented cans</li>
                                    <li>No used or open packages</li>
                                    <li>No MSG or High Fructose Corn Syrup</li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol size="1">
                                <MDBIcon icon="dog" size="lg" className="mowabluetext" />
                            </MDBCol>
                            <MDBCol xl="10" md="11" size="10">
                                <h5 className="font-weight-bold mowabluetext mb-3">Pet Food Program</h5>
                                <p className="mowabluetext">
                                    Meals On Wheels Atlanta partners with the Atlanta Humane Society to deliver meals to seniors and their pets!
                                    For many of our homebound clients, their pets are the only family they have. However, because of income restrictions, they struggle to provide their furry friends with the care they need. The MOWA Pet Pantry was started when our volunteers noticed our seniors sharing their meals with their dogs or cats. You can help by donating funds or any of the items listed below.
                                </p>
                                <MDBRow>
                                    <MDBCol>
                                        <ul>
                                            <li>Unopened bags/cans of dog or cat food (preferably dry)</li>
                                            <li>Unopened dog/cat treats</li>
                                            <li>New and unused dog/cat toys</li>
                                        </ul>
                                    </MDBCol>
                                    <MDBCol>
                                        <ul>
                                            <li>New containers of kitty litter</li>
                                            <li>New containers to store dry dog/cat food</li>
                                            <li><Link to='/volunteer'>Volunteers</Link> to deliver meals and pet food to our seniors!</li>
                                        </ul>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="5">
                        <img
                            className="img-fluid rounded"
                            src={old2}
                            alt="senior lady smiling"
                        />
                        <img
                            className="img-fluid mt-4 rounded"
                            src={old3}
                            alt="senior male"
                        />
                        <img
                            className="img-fluid mt-4 rounded"
                            src={volback}
                            alt="senior lady getting food delivery"
                        />
                        <img
                            className="img-fluid mt-4 rounded"
                            src={blady}
                            alt="senior lady smiling"
                        />
                        <img
                            className="img-fluid mt-4 rounded"
                            src={bman}
                            alt=""
                        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <hr className="my-5 w-75" />
            <div className='px-4'>
                <MDBRow>
                    <MDBCol md='12'>
                        <div className='mealsiframe' style={{ height: '900px', position: 'relative', overflow: 'hidden' }}>
                            <iframe frameborder="0" title='find your local meals on wheels office' style={{ position: 'absolute', top: '-200px', left: '0px', width: '100%', height: '990px' }} scrolling='no' src="https://www.mealsonwheelsamerica.org/findmeals"></iframe>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default GetMeals;