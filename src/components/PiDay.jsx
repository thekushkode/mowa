import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './MOWAColors.css';
import pi from '../assets/turkey.png';

class PiDay extends Component {
    state = {
        modal14: true
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBBtn color="primary" onClick={this.toggle(14)} hidden>MOWA</MDBBtn>
                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered size='lg'>
                    <MDBModalHeader toggle={this.toggle(14)}>Turkey Day Made Easy!</MDBModalHeader>
                    <MDBModalBody>
                        <a href='https://www.purposefulgourmetfoods.org/products/thanksgiving-offering' target='_blank' rel="noopener noreferrer" ><img src={pi} className='img-fluid' alt='Turkey Poster' /></a>
                    </MDBModalBody>
                    {/* <MDBModalBody>
                        <img src={pi} className='img-fluid' alt='Turkey Day Meals' />
                    </MDBModalBody> */}
                    <MDBModalFooter>
                        <a href='https://www.purposefulgourmetfoods.org/products/thanksgiving-offering' target='_blank' rel="noopener noreferrer" >
                        <MDBBtn href='https://www.purposefulgourmetfoods.org/products/thanksgiving-offering' target='_blank' rel="noopener noreferrer" className='mowablue'>Order Now</MDBBtn>
                        </a>
                        <MDBBtn className='mowaorange' onClick={this.toggle(14)}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default PiDay;