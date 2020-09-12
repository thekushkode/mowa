import React, { Component } from "react";
import { MDBContainer, MDBNotification } from "mdbreact";

class CovidPopUp extends Component {
    render() {
        return (
            <MDBContainer className="grey darken-3 p-3">
                <MDBNotification
                    iconClassName="text-primary"
                    show
                    fade
                    title="Bootstrap"
                    message="
                    For information regarding the prevention and treatment of COVID-19 and how Meals On Wheels Atlanta is reacting to safeguard our clients and volunteers, Please visit the CDC website <a href='https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fprepare%2Fprevention.html'>here</a>."
                    text="11 mins ago"
                />
            </MDBContainer>
        );
    }
}

export default CovidPopUp;