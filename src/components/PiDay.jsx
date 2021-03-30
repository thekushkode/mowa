import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './MOWAColors.css';
import pi from '../assets/truffles.png';

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
                <MDBBtn color="primary" onClick={this.toggle(14)} hidden>MDBModal</MDBBtn>
                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader toggle={this.toggle(14)}>Delicious Spring Truffles!</MDBModalHeader>
                    <MDBModalBody>
                        <a href='https://secure.givelively.org/event/meals-on-wheels-atlanta/gourmet-spring-truffles?blm_aid=40295425' target='_blank' rel="noopener noreferrer"><img src={pi} className='img-fluid' alt='piday promotion' /></a>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn href='https://secure.givelively.org/event/meals-on-wheels-atlanta/gourmet-spring-truffles?blm_aid=40295425' target='_blank' rel="noopener noreferrer" className='mowablue'>Place Order</MDBBtn>
                        <MDBBtn className='mowaorange' onClick={this.toggle(14)}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default PiDay;