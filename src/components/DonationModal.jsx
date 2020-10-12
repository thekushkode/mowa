import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Script from './Script';

class DonationModal extends Component {

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
                <MDBBtn className='blue-gradient btn-rounded' onClick={this.toggle}><b>One-Time Donation</b></MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                    <MDBModalHeader toggle={this.toggle}>MOWA Donations</MDBModalHeader>
                    <MDBModalBody id='modal'>
                        <Script />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className="btn-rounded purple-gradient" onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default DonationModal;