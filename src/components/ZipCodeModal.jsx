import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol } from 'mdbreact';
import './MOWAColors.css';

class ZipCodeModal extends Component {
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
                <MDBBtn className='mowaorange btn-rounded' onClick={this.toggle}>Our Coverage Area</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>MOWA Coverage Area</MDBModalHeader>
                    <MDBModalBody>
                        <h4 className='font-weight-bold p-md-4 mb-0'>
                            In order to qualify for Meal Services, applicants must be:
                                                    </h4>
                        <ul className='font-weight-bold text-left'>
                            <li>60 YEARS AND OLDER</li>
                            <li>FULTON COUNTY RESIDENTS</li>
                            <li>LOW-INCOME</li>
                        </ul>
                        <h4 className="p-md-4 mb-0">
                            MOWA currently serves the following areas & zipcodes:
                                                    </h4>
                        <p className="font-weight-bold p-md-4 mb-0">Central Fulton County- Buckhead, East Point, Hapeville, & the City of Atlanta</p>
                        <MDBRow>
                            <MDBCol>
                                <ul className='font-weight-bold text-left'>
                                    <li>30305</li>
                                    <li>30306</li>
                                    <li>30307</li>
                                    <li>30308</li>
                                    <li>30309</li>
                                    <li>30310</li>
                                    <li>30311</li>
                                    <li>30312</li>
                                    <li>30313</li>
                                </ul>
                            </MDBCol>
                            <MDBCol>
                                <ul className='font-weight-bold text-left'>
                                    <li>30314</li>
                                    <li>30315</li>
                                    <li>30316</li>
                                    <li>30318</li>
                                    <li>30324</li>
                                    <li>30344</li>
                                    <li>30354</li>
                                    <li>30363</li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                        <h4 className="p-md-4 mb-0">
                            If you have any questions, please <a href='mailto:nmcintosh@mowatl.org?subject=Meal Services Inquiry'>send us an email!</a>
                        </h4>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className='btn-rounded mowablue' onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default ZipCodeModal;