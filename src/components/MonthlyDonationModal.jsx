import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class MonthlyDonationModal extends Component {
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
                <MDBBtn className='aqua-gradient btn-rounded' onClick={this.toggle}><b>Donate Monthly</b></MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Donate Monthly</MDBModalHeader>
                    <MDBModalBody>
                        (Insert Donation Script Here)
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className="btn-rounded purple-gradient" onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default MonthlyDonationModal;