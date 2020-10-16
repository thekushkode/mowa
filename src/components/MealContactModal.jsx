import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBInput, MDBIcon } from 'mdbreact';
import './MOWAColors.css';
import { Redirect } from 'react-router-dom';

class MealContact extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            modal: false,
            status: ''
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

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
    };

    render() {
        const { status } = this.state;
        return (
            <div>
                <MDBBtn className='mowablue btn-rounded' onClick={this.toggle}>Apply For Meal Services</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Meal Services</MDBModalHeader>
                    <MDBModalBody>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="12">
                                    <form name='Get Meals' onSubmit={this.submitForm} method='POST' action='https://formspree.io/f/meqpadeo'>
                                        <p className="h5 text-center mb-4">Apply for Meal Services</p>
                                        <div className="grey-text">
                                            <MDBInput name='name' label="Your name" icon="user" group type="text" validate error="wrong"
                                                success="right" />
                                            <MDBInput name='email' label="Your email" icon="envelope" group type="email" validate error="wrong"
                                                success="right" />
                                            <MDBInput name='subject' label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                            <MDBInput name='message' type="textarea" rows="2" label="Message" icon="pencil-alt" />
                                        </div>
                                        <div className="text-center">
                                            <MDBBtn type='submit' className='mowablue btn-rounded'>
                                                Send
                                                <MDBIcon far icon="envelope" className="ml-1" />
                                            </MDBBtn>
                                        </div>
                                        { status === 'SUCCESS' && <Redirect to='/emailthankyou' /> }
                                        { status === 'ERROR' && <p>Oops! There was an error. Please try again.</p> }
                                    </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className='btn-rounded mowaorange' onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default MealContact;