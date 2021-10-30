import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './MOWAColors.css';
import pi from '../assets/Jovita.png';

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
                    {/* <MDBModalHeader toggle={this.toggle(14)}>In Loving Memory</MDBModalHeader> */}
                    {/* <MDBModalBody>
                        <a href='https://e.givesmart.com/events/ns7/' target='_blank' rel="noopener noreferrer" ><img src={pi} className='img-fluid' alt='Golf Poster' /></a>
                    </MDBModalBody> */}
                    <MDBModalBody>
                        <img src={pi} className='img-fluid' alt='In memory of Jovita Moore' />
                    </MDBModalBody>
                    <MDBModalFooter>
                        {/* <a href='https://secure.givelively.org/event/meals-on-wheels-atlanta/21st-annual-meals-on-wheels-atlanta-golf-classic' target='_blank' rel="noopener noreferrer" > */}
                        {/* <MDBBtn href='https://e.givesmart.com/events/ns7/' target='_blank' rel="noopener noreferrer" className='mowablue'>Get Tickets</MDBBtn> */}
                        {/* </a> */}
                        <MDBBtn className='mowaorange' onClick={this.toggle(14)}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default PiDay;