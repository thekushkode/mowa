import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Script from './Script';
import Loading from './Loading';

class DonationModal extends Component {

    state = {
        modal: false,
        loading: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            loading: true
        });
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    };


    render() {

        return (
            <div>
                <MDBBtn className='blue-gradient btn-rounded' onClick={this.toggle}><b>One-Time Donation</b></MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>MOWA Donations</MDBModalHeader>
                    <MDBModalBody id='modal'>
                        { this.state.loading ? <Loading/> : <Script /> }
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