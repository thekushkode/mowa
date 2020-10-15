import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBInput, MDBIcon } from 'mdbreact';
import './MOWAColors.css';

class MealContact extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <MDBBtn className='mowablue btn-rounded' onClick={this.toggle}>Apply For Meal Services</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Meal Services</MDBModalHeader>
                    <MDBModalBody>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="12">
                                    <form>
                                        <p className="h5 text-center mb-4">Apply for Meal Services</p>
                                        <div className="grey-text">
                                            <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                                                success="right" />
                                            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                                success="right" />
                                            <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                            <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                                        </div>
                                        <div className="text-center">
                                            <MDBBtn className='mowablue btn-rounded'>
                                                Send
                                                <MDBIcon far icon="paper-plane" className="ml-1" />
                                            </MDBBtn>
                                        </div>
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