import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from "mdbreact";
import { Redirect } from 'react-router-dom';
import './MOWAColors.css';

class StockForm extends Component {
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
                        <form onSubmit={this.submitForm} method='POST' action='https://formspree.io/f/mvovbpdv' >
                            <MDBRow>
                                <MDBCol md="4">
                                    <div className="md-form mb-0">
                                        <MDBInput name='Date' type="text" id="date" label="Date" />
                                    </div>
                                </MDBCol>
                                <MDBCol md="4">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="donor-name"
                                            label="Donor Name"
                                            name='Donor Name'
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol md="4">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="donor-phone"
                                            label="Phone Number"
                                            name='Donor Phone'
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="4">
                                    <div className="md-form mb-0">
                                        <MDBInput name='Firm' type="text" id="firm-name" label="Delivering Firm" />
                                    </div>
                                </MDBCol>
                                <MDBCol md="4">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="firm-contact-name"
                                            label="Contact Name"
                                            name='Firm Contact Name'
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol md="4">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="firm-phone"
                                            label="Firm Contact Phone"
                                            name='Phone'
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol md="6">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="textarea"
                                            id="stock-name"
                                            name='Stock Name'
                                            label="Name of Stock"
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="share-number"
                                            label="Number of Shares"
                                            name='Number of Shares'
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="12">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="textarea"
                                            id="gift-response"
                                            name='Gift in Response To:'
                                            label="Is this gift in response to a specific request (mailer, event, etc.)?"
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

export default StockForm;