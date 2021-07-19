import React from 'react';
import { Redirect } from "react-router-dom";
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBIcon, MDBInput, MDBSelect, MDBSelectInput, MDBSelectOption, MDBSelectOptions, MDBCardImage, MDBCardTitle, MDBCardText
} from 'mdbreact';
// import './1705Colors.css';
import './MOWAColors.css';
import Nav from './Nav';
import studio from '../assets/inspiration/studio-experience.png';
import FooterPage from './Footer';
import one from '../assets/pros.png';
import two from '../assets/octo.png';


class ChefsTable extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
            selectService: [],
            eventSpace: [],
            flexDate: [],
            selectOccasion: [],
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleServiceSelection = (e) => {
        this.setState({
            selectService: e[0]
        })
    }

    handleOccasionSelection = (e) => {
        this.setState({
            selectOccasion: e[0]
        })
    }

    // handleeventSpace = (e) => {
    //     this.setState({
    //         eventSpace: e[0]
    //     })
    // }

    handleflexDate = (e) => {
        this.setState({
            flexDate: e[0]
        })
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {
        const { status } = this.state;
        return (
            <div>
                <header style={{ marginBottom: '56px' }}>
                    <Nav />
                </header>
                <div>
                    {/* <MDBView
                        
                        fixed
                    >
                        <MDBMask className='whitegradient' />
                        <MDBMask overlay='black-strong' />
                        <MDBContainer
                            className='d-flex justify-content-center align-items-center'
                            style={{ height: '100%', width: '100%', paddingTop: '5rem' }}
                        >
                            <MDBRow>
                                <MDBCol md='12' className='mb-4 white-text text-center'>
                                    <h1 className='display-2 mb-0 pt-md-5 pt-5 goldtext2 font-weight-bold'>
                                        SEVENTEEN
                                    <span className='white-text font-weight-bold'>05</span>
                                    </h1>
                                    <h1 className='slideOneText display-1 text-uppercase mb-0 pt-md-5 pt-5 mowabluetext'>
                                        Chef's Experience
                                    </h1>
                                    <hr className='hr-light my-4' />
                                    <h4 className="h4-responsive px-3">
                                        Turn up the glamour, cut out the work and prepare your guests for a dinner to remember. Former Four Seasons Atlanta Executive Chef, Robert Gerstenecker, crafts gourmet culinary dinner experiences.
                                    </h4>

                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBView> */}
                    <main>
                        <MDBCard >
                            <div className="px-2 text-center">
                                <div className="my-5 px-1 text-center">
                                    <h2 className="h1-responsive mowabluetext font-weight-bold mb-5">
                                        Chef's Experience
                                    </h2>
                                    {/* <p className="black-text text-justify w-responsive mx-auto mb-3">
                                    Turn up the glamour, cut out the work and prepare your guests for a dinner to remember. Former Four Seasons Atlanta Executive Chef, Robert Gerstenecker, crafts gourmet culinary dinner experiences.
                                        
                                    </p> */}
                                    <h5 className="h4-responsive text-center px-5">
                                        Turn up the glamour, cut out the work and prepare your guests for a dinner to remember. Former Four Seasons Atlanta Executive Chef, Robert Gerstenecker, crafts gourmet culinary dinner experiences.
                                            </h5>
                                </div>
                            </div>
                            <MDBCardBody>
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol md='12'>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                                <MDBRow className='mt-4'>
                                    <MDBCol lg="6" >

                                        <MDBCard className='mt-2' style={{ height: '100%' }} >
                                            {/* <MDBCard> */}
                                            <MDBCardImage className="img-fluid" src={one}
                                                waves />
                                            <MDBCardBody>
                                                <MDBCardTitle className='text-uppercase'>Chef's Kitchen</MDBCardTitle>
                                                <MDBCardText>Make your next celebration the most delicious one yet! Enjoy perfectly curated meals and seasonal specialties from Chef's Kitchen, ready to serve in your kitchen. 
                                                Just unpack, plate and enjoy!
                                                    </MDBCardText>
                                                <h5>Featured Occasions:</h5>
                                                <ul>
                                                    <li>Valentine's Day Dinner - Serves 2 Guests</li>
                                                    <li>Mother's Day Brunch - Serves Up To 8 Guests</li>
                                                    <li>Father's Day - Serves 4 Guests</li>
                                                    <li>Fourth of July - Serves Up To 8 Guests</li>
                                                    <li>Thanksgiving - Serves Up To 8 Guests</li>
                                                    <li>Christmas - Serves Up To 8 Guests</li>
                                                </ul>
                                                <h5>Seasonal Specialties:</h5>
                                                <ul>
                                                    <li>Truffles</li>
                                                    <li>Pies</li>
                                                </ul>
                                                {/* <MDBBtn href="#">Click</MDBBtn> */}
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol lg="6" >
                                        <MDBCard className='mt-2' style={{ height: '100%' }} >
                                            <MDBCardImage className="d-block img-fluid" src={two}
                                                waves />
                                            <MDBCardBody>
                                                <MDBCardTitle className='text-uppercase'>Chef's Table</MDBCardTitle>
                                                <MDBCardText>Effortless entertaining meets gastronomic bliss when you gather at the Chef's Table. Enjoy your guests while Chef Robert prepares your ideal dining experience, expertly catered to your table.</MDBCardText>
                                                <br />
                                                <br />
                                                <h5>Each experience includes:</h5>
                                                <ul>
                                                    <li>A 4 or 5 course personalized menu</li>
                                                    <li>Dinner service</li>
                                                    <li>Menu can be custom paired to host's hand-selected wines</li>
                                                    <li><i>Beverage selections provided by host</i></li>
                                                </ul>
                                                {/* <MDBBtn href="#">Click</MDBBtn> */}
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow style={{ marginTop: '50px' }}>

                                    <div className="text-center mx-auto" >
                                        <MDBContainer>
                                            <MDBRow >
                                                <h1 className="mx-auto black-text pt-3">
                                                    Inquiry Form
                                                        </h1>
                                                <MDBCol md="12" className="md-0 mb-5 pt-3">
                                                    <form onSubmit={this.submitForm}
                                                        action="https://formspree.io/f/xoqpbznr"
                                                        method="POST">
                                                        <MDBRow>
                                                            <MDBCol md="6">
                                                                <div className="md-form mb-0">
                                                                    <MDBInput type="text" id="contact-name" label="Your Name"
                                                                        className='black-text' name='Name' required />
                                                                </div>
                                                            </MDBCol>
                                                            <MDBCol md="6">
                                                                <div className="md-form mb-0">
                                                                    <MDBInput
                                                                        type="text"
                                                                        id="contact-email"
                                                                        label="Your Email"
                                                                        className='black-text'
                                                                        name='Email'
                                                                        required
                                                                    />
                                                                </div>
                                                            </MDBCol>
                                                        </MDBRow>
                                                        <MDBRow>
                                                            <MDBCol md="6">
                                                                <div className="md-form mb-0">
                                                                    <MDBInput type="text" id="contact-phone" label="Your Phone"
                                                                        className='black-text' name='Phone' required />
                                                                </div>
                                                            </MDBCol>
                                                            {/* <MDBCol md="6">
                                                                <div className="md-form mb-0">
                                                                    <MDBInput
                                                                        type="text"
                                                                        id="event-name"
                                                                        label="Name Your Event"
                                                                        className='black-text'
                                                                        name='Name of Event'
                                                                    />
                                                                </div>
                                                            </MDBCol> */}
                                                            <MDBCol md="6">
                                                                <div className="md-form mb-0">
                                                                    <MDBInput type="text" id="date-of-event" label="Date of Event"
                                                                        className='black-text' name='Date of Event' />
                                                                </div>
                                                            </MDBCol>
                                                        </MDBRow>
                                                        <MDBRow>
                                                            <MDBCol md="4">
                                                                <div>
                                                                    <MDBInput name='Date Flexible' value={this.state.flexDate} hidden></MDBInput>
                                                                    <MDBSelect getValue={(e) => this.handleflexDate(e)}
                                                                        label='Is Date Flexible?'>
                                                                        <MDBSelectInput id='volunteer' name='Date Flexible:' className='black-text' />
                                                                        <MDBSelectOptions>
                                                                            <MDBSelectOption value="Yes" name="Yes">Yes</MDBSelectOption>
                                                                            <MDBSelectOption value="No" name="No">No</MDBSelectOption>
                                                                        </MDBSelectOptions>
                                                                    </MDBSelect>
                                                                </div>
                                                            </MDBCol>
                                                            <MDBCol md="4">
                                                                <div className="md-form mb-0">
                                                                    <MDBInput
                                                                        type="text"
                                                                        id="number-of-guests"
                                                                        label="Number of Guests"
                                                                        name='Number of Guests'
                                                                        className='black-text'
                                                                    />
                                                                </div>
                                                            </MDBCol>
                                                            <MDBCol md="4">
                                                                <div>
                                                                    <MDBInput name='Select Service:' value={this.state.selectService} hidden></MDBInput>
                                                                    <MDBSelect getValue={(e) => this.handleServiceSelection(e)}
                                                                        label='Select Service:'>
                                                                        <MDBSelectInput id='service-selection' name='Select Service:' className='black-text' />
                                                                        <MDBSelectOptions>
                                                                            <MDBSelectOption value="Dinner Is Served" name="Dinner Is Served">Dinner Is Served</MDBSelectOption>
                                                                            <MDBSelectOption value="Chefs Table" name="Chefs Table">Chef's Table</MDBSelectOption>

                                                                        </MDBSelectOptions>
                                                                    </MDBSelect>
                                                                </div>
                                                            </MDBCol>
                                                        </MDBRow>
                                                        {this.state.selectService === 'Dinner Is Served' ? <MDBRow>
                                                            <MDBCol md="12">
                                                                <div>
                                                                    <MDBInput name='Select Occasion:' value={this.state.selectOccasion} hidden></MDBInput>
                                                                    <MDBSelect getValue={(e) => this.handleOccasionSelection(e)}
                                                                        label='Select Occasion:'>
                                                                        <MDBSelectInput id='occasion-selection' name='Select Occasion:' className='black-text' />
                                                                        <MDBSelectOptions>
                                                                            <MDBSelectOption value="Valentine's Day" name="Valentine's Day">Valentine's Day</MDBSelectOption>
                                                                            <MDBSelectOption value="Mother's Day" name="Mother's Day">Mother's Day</MDBSelectOption>
                                                                            <MDBSelectOption value="Father's Day" name="Father's Day">Father's Day</MDBSelectOption>
                                                                            <MDBSelectOption value="Fourth of July" name="Fourth of July">Fourth of July</MDBSelectOption>
                                                                            <MDBSelectOption value="Thanksgiving" name="Thanksgiving">Thanksgiving</MDBSelectOption>
                                                                            <MDBSelectOption value="Christmas" name="Christmas">Christmas</MDBSelectOption>
                                                                        </MDBSelectOptions>
                                                                    </MDBSelect>
                                                                </div>
                                                            </MDBCol>
                                                        </MDBRow> : null}
                                                        <MDBRow>
                                                            <MDBCol md="12">
                                                                <div className="md-form mb-0">
                                                                    <MDBInput
                                                                        type="textarea"
                                                                        id="additional-details"
                                                                        name='Additional Details'
                                                                        label="Additional Details"
                                                                        className='black-text'
                                                                    />
                                                                </div>
                                                            </MDBCol>
                                                        </MDBRow>
                                                        <div className="text-center text-md-left">
                                                            <MDBBtn type='submit' className='mowablue' size="lg btn-rounded">
                                                                Send
                                                                    </MDBBtn>
                                                            {status === 'SUCCESS' && <Redirect to='/emailthankyou' />}
                                                            {status === 'ERROR' && <p className='black-text'>Oops! There was an error. Please try again.</p>}
                                                        </div>
                                                    </form>
                                                </MDBCol>
                                                {/* <p className='black-text text-uppercase text-justify px-3'>At MOWA, we’re committed to cultivating meaningful and memorable experiences while operating in accordance with CDC and state guidelines.</p> */}
                                            </MDBRow>
                                        </MDBContainer>

                                    </div>

                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </main>
                    <footer style={{ marginTop: '-25px' }}>
                        <FooterPage />
                    </footer>
                </div>
            </div>
        );
    }
}

export default ChefsTable;