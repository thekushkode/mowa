import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';

const AlertPage = () => {
    return (
        <MDBContainer>
            <MDBAlert color="danger" dismiss>
                <strong>The recently passed CARES Act lifts the cap on annual contributions from 60% to 100% of adjusted income (contributions must be itemized). It also creates a new above-the-line deduction for charitable cash contributions up to $300.</strong>
            </MDBAlert>
        </MDBContainer>
    );
};

export default AlertPage;