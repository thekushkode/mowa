import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput, MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from "mdbreact";
import { Redirect } from 'react-router-dom';
import './MOWAColors.css';

class VolunteerForm extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
            volunteer: [],
            court: [],
            volType: [],
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    submitForm(ev) {
        ev.preventDefault();
        console.log(ev.target);
        console.log(ev);
        const form = ev.target;
        const data = new FormData(form);
        console.log(data);
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

    handleVolunteer = (e) => {
        this.setState({
            volunteer: e[0]
        })
    }

    handleCourt = (e) => {
        this.setState({
            court: e[0]
        })
    }

    handleVolType = (e) => {
        this.setState({
            volType: e[0]
        })
    }


    render() {
        const { status } = this.state;
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12" className="md-0 mb-5">
                        <form onSubmit={this.submitForm} method='POST' action='https://formspree.io/f/xwkwopln' >
                            <MDBRow>
                                <MDBCol md="6">
                                    <div className="md-form mb-0">
                                        <MDBInput name='Name' type="text" id="contact-name" label="Your name" />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="contact-email"
                                            label="Your email"
                                            name='Email'
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="6">
                                    <div>
                                        <MDBInput name='Volunteer Type:' value={this.state.volType} hidden></MDBInput>
                                        <MDBSelect getValue={(e) => this.handleVolType(e)}
                                            label='Are You An Individual or Corporation:'>
                                            <MDBSelectInput id='volunteer-type' name='Volunteering Type:' />
                                            <MDBSelectOptions>
                                                <MDBSelectOption value="Individual" name="Individual">Individual</MDBSelectOption>
                                                <MDBSelectOption value="Corporation" name="Corporation">Corporation</MDBSelectOption>
                                            </MDBSelectOptions>
                                        </MDBSelect>
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="corp-name"
                                            label="If Corporation, Enter Company Name:"
                                            name='Company Name'
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="6">
                                    <div>
                                        <MDBInput name='Volunteer For:' value={this.state.volunteer} hidden></MDBInput>
                                        <MDBSelect getValue={(e) => this.handleVolunteer(e)}
                                            label='I Want to Volunteer For:'>
                                            <MDBSelectInput id='volunteer' name='Volunteering For:' />
                                            <MDBSelectOptions>
                                                <MDBSelectOption value="Meal Delivery" name="Meal Delivery">Meal Delivery (Tuesday - Saturday AM)</MDBSelectOption>
                                                <MDBSelectOption value="Meal Prep" name="Meal Prep">Meal Preparation (Mon-Fri, 9am-6pm)</MDBSelectOption>
                                                <MDBSelectOption value="Home Repair" name="Home Repair">Home Repair (Saturday Mornings)</MDBSelectOption>
                                                <MDBSelectOption value="Admin" name="Admin">Administrative</MDBSelectOption>
                                                <MDBSelectOption value="Purposeful" name="Purposeful">Purposeful Products</MDBSelectOption>
                                                <MDBSelectOption value="Other" name="Other">Other</MDBSelectOption>
                                            </MDBSelectOptions>
                                        </MDBSelect>
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div>
                                        <MDBInput name='Court Ordered?' value={this.state.court} hidden></MDBInput>
                                        <MDBSelect getValue={(e) => this.handleCourt(e)} label='Court-Ordered Community Service?'>
                                            <MDBSelectInput name='Court Ordered?' id='courtOrdered' />
                                            <MDBSelectOptions>
                                                <MDBSelectOption name='Yes' value="Yes">Yes</MDBSelectOption>
                                                <MDBSelectOption name='no' value="No">No</MDBSelectOption>
                                            </MDBSelectOptions>
                                        </MDBSelect>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="12">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="textarea"
                                            id="availability"
                                            name='Availability'
                                            label="Please enter the dates you are available or let us know if you have open availability:"
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <div className="text-center text-md-left">
                                <MDBBtn type='submit' className='btn-rounded mowablue' size="md">
                                    Submit
                                </MDBBtn>
                            </div>
                            {status === 'SUCCESS' && <Redirect to='/emailthankyou' />}
                            {status === 'ERROR' && <p>Oops! There was an error. Please try again.</p>}
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default VolunteerForm;