import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './MOWAColors.css';
import pi from '../assets/mommy.png';

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
                    <MDBModalHeader toggle={this.toggle(14)}>Plan the Perfect Mother's Day!</MDBModalHeader>
                    <MDBModalBody>
                        <a href='https://www.purposefulgourmetfoods.org/collections/chefs-kitchen/products/chefs-kitchen' target='_blank' ><img src={pi} className='img-fluid' alt='Mothers Day Meal Poster' /></a>
                    </MDBModalBody>
                    <MDBModalFooter>
                        {/* <Link to='/donate' > */}
                        <MDBBtn href='https://www.purposefulgourmetfoods.org/collections/chefs-kitchen/products/chefs-kitchen' className='mowablue'>Order Now</MDBBtn>
                        {/* </Link> */}
                        <MDBBtn className='mowaorange' onClick={this.toggle(14)}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default PiDay;