import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from "mdbreact";
import { Redirect } from 'react-router-dom';
import './MOWAColors.css';

class GroupVolForm extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
            volunteer: [],
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

    handleGroupVolunteer = (e) => {
        this.setState({
            volunteer: e[0]
        })
    }


    render() {
        const { status } = this.state;
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12" className="md-0 mb-5">
                        <form onSubmit={this.submitForm} method='POST' action='https://formspree.io/f/mzbkrknz' >
                            <MDBRow>
                                <MDBCol md="4">
                                    <div className="md-form mb-0">
                                        <MDBInput name='Contact Name' type="text" id="contact-name" label="Contact Name" />
                                    </div>
                                </MDBCol>
                                <MDBCol md="4">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="contact-email"
                                            label="Contact Email"
                                            name='Contact Email'
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol md="4">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="phone"
                                            label="Contact Phone Number"
                                            name='Contact Phone Number'
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="6">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="corp-name"
                                            label="Company Name"
                                            name='Company Name'
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="corp-name"
                                            label="Department Name (if applicable):"
                                            name='Department Name'
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="12">
                                    <div>
                                        <MDBInput name='Volunteer For:' value={this.state.volunteer} hidden></MDBInput>
                                        <MDBSelect getValue={(e) => this.handleGroupVolunteer(e)}
                                            label='We Want to Volunteer For:'>
                                            <MDBSelectInput id='volunteer' name='Volunteering For:' />
                                            <MDBSelectOptions>
                                                <MDBSelectOption value="Saturday Meal Delivery" name="Saturday Meal Delivery">Super Saturday Meal Delivery</MDBSelectOption>
                                                <MDBSelectOption value="Weekday Meal Delivery" name=" Weekday Meal Delivery">Weekday Meal Delivery</MDBSelectOption>
                                                <MDBSelectOption value="Weekday Meal Meal Prep" name="Weekday Meal Prep">Weekday Pantry & Meal Preparation</MDBSelectOption>

                                                <MDBSelectOption value="Admin" name="Admin">Administrative Assistance</MDBSelectOption>
                                                <MDBSelectOption value="Decorate Boxes" name="Decorate Boxes">Decorate Meal Boxes</MDBSelectOption>
                                                <MDBSelectOption value="Letter Writing" name="Letter Writing">Letter Writing Campaign</MDBSelectOption>
                                                <MDBSelectOption value="Week of Service" name="Week of Service">Week of Service</MDBSelectOption>
                                            </MDBSelectOptions>
                                        </MDBSelect>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="4">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="Service Date"
                                            name='Service Date:'
                                            label="Preferred Service Date(s)"
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol md="4">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="Group Size"
                                            name='Group Size'
                                            label="Group Size"
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol md="4">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="Referral"
                                            name='Referral'
                                            label="How did you hear about us?"
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

export default GroupVolForm;