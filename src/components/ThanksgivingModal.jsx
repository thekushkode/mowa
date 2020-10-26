import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './MOWAColors.css';
import thanksmenu from '../assets/thanksmenu.png';

class ThanksgivingModal extends Component {
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
            <MDBContainer>
                <MDBBtn className='mowaorange btn-rounded' onClick={this.toggle} size='sm'>See Menu</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} size='lg'>
                    <MDBModalHeader toggle={this.toggle}>Thanksgiving Menu</MDBModalHeader>
                    <MDBModalBody>
                        <img src={thanksmenu} className='img-fluid' alt='thanksgiving menu'/>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className='mowablue btn-rounded' onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default ThanksgivingModal;