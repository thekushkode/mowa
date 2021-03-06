import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './MOWAColors.css';
import pi from '../assets/jov.png';

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
                    <MDBModalHeader toggle={this.toggle(14)}>Help Support Jovita Moore!</MDBModalHeader>
                    <MDBModalBody>
                        <Link to='/donate' ><img src={pi} className='img-fluid' alt='Mothers Day Meal Poster' /></Link>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <Link to='/donate' >
                        <MDBBtn className='mowablue'>Donate Now</MDBBtn>
                        </Link>
                        <MDBBtn className='mowaorange' onClick={this.toggle(14)}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default PiDay;