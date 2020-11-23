import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBContainer } from 'mdbreact';
import './MOWAColors.css';
import StockForm from './StockForm';

class StockModal extends Component {
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
            <div className='mb-3'>
                <MDBBtn className='mowaorange btn-rounded' onClick={this.toggle}><b>Donate Stock</b></MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} size='fluid'>
                    <MDBModalHeader toggle={this.toggle}>Stock & Mutual Fund Donation Form</MDBModalHeader>
                    <MDBModalBody>
                        <MDBContainer>
                            <p>Thank you for your support of Meals On Wheels Atlanta and the senior neighbors that we serve in our community! Here is our easy two-step process for donating shares of stock or mutual funds to our organization. If you have any questions, please contact Karen Kraemer at <a href='tel:4043513889p309' >404-351-3889 ext. 309.</a></p>
                            <h4><b>Step 1</b></h4>
                            <p>Instruct your brokerage firm to make your gift by transferring stock to the following account:</p>
                            <p><b>Account Name: </b>Senior Citizens of Metro Atlanta</p>
                            <p><b>Brokerage: </b>PNC Investments (1-800-622-7086)</p>
                            <p><b>Account Number: </b>005044358</p>
                            <p><b>DTC: </b>0226</p>
                            <h4><b>Step 2</b></h4>
                            <p>Complete the Following Form:</p>
                        </MDBContainer>
                        <StockForm />
                        <p>Your contribution will be recognized with a receipt from Meals On Wheels Atlanta (EIN 58-0960309). Details on the deductibility of your stock donation can be found on the <a href='http://www.irs.gov/instructions/i8283/' rel="noopener noreferrer" target='_blank'>IRS website</a> or by consulting your tax advisor.</p>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className='mowaorange btn-rounded' onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default StockModal;