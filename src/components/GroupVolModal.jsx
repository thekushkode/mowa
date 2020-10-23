import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './MOWAColors.css';
import GroupVolForm from './GroupVolForm';

class GroupVolModal extends Component {
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
                <MDBBtn className='mowalightblue btn-rounded' size='md' onClick={this.toggle}>Group Volunteer Form</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} size='fluid'>
                    <MDBModalHeader toggle={this.toggle}>Group Volunteer Form</MDBModalHeader>
                    <MDBModalBody>
                        <GroupVolForm />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className='mowaorange btn-rounded' onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default GroupVolModal;