import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './MOWAColors.css';
import pi from '../assets/tinygolf.png';

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
                    <MDBModalHeader toggle={this.toggle(14)}>21st Annual MOWA Golf Classic</MDBModalHeader>
                    <MDBModalBody>
                        <a href='https://secure.givelively.org/event/meals-on-wheels-atlanta/21st-annual-meals-on-wheels-atlanta-golf-classic' target='_blank' rel="noopener noreferrer" ><img src={pi} className='img-fluid' alt='Mothers Day Meal Poster' /></a>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <a href='/https://secure.givelively.org/event/meals-on-wheels-atlanta/21st-annual-meals-on-wheels-atlanta-golf-classic' target='_blank' >
                        <MDBBtn className='mowablue'>Sign-Up Now!</MDBBtn>
                        </a>
                        <MDBBtn className='mowaorange' onClick={this.toggle(14)}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default PiDay;