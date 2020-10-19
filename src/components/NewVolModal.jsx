import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './MOWAColors.css';
import VolunteerForm from './VolunteerForm';

class NewVolModal extends Component {
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
            <div className='mb-3'>
                <MDBBtn className='mowablue btn-rounded' onClick={this.toggle}>New Volunteer Form</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} size='lg'>
                    <MDBModalHeader toggle={this.toggle}>New Volunteer Form</MDBModalHeader>
                    <MDBModalBody>
                        <VolunteerForm />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className='mowaorange btn-rounded' onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default NewVolModal;