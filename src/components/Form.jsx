import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import mowa from '../assets/mowaaa.png';

class FormsPage extends React.Component {
    state = {
        radio: '',
        cc: '',
        expiration: '',
        fname: "",
        lname: "",
        email: "",
        address1: '',
        address2: '',
        city: "",
        state: "",
        zip: ""
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onClick = (nr) => () => {
        this.setState({
            radio: nr
        });
    }

    render() {
        return (
            <div style={{ marginBottom: '56px' }}>
                <form
                    className="needs-validation px-5"
                    onSubmit={this.submitHandler}
                    noValidate
                >
                    <MDBRow>
                        <MDBCol md='6'>
                            {/* <img src={mowa}  alt='mowa logo'/> */}
                            <p className='text-muted pt-4'>Thank you for helping Meals On Wheels Atlanta fight senior hunger in our community.
                            Your generosity means the world to us and to those we serve.
                            For just $9 per day, we can provide a senior in need with breakfast and lunch, home-delivered by our friendly volunteers. Help us complete our mission of supporting senior independence through meals, shelter, education, & community.
                            </p>
                        </MDBCol>
                        <MDBCol md='6'>
                            <h2 className='mdb-color-text ml-4'>Choose Donation Amount</h2>
                            <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false} label="$100: Supports our dry goods pet & people pantry" type="radio"
                                id="radio1" />
                            <MDBInput gap onClick={this.onClick(2)} checked={this.state.radio === 2 ? true : false} label="$500: Supports our Therapeutic Meal Program" type="radio"
                                id="radio2" />
                            <MDBInput gap onClick={this.onClick(3)} checked={this.state.radio === 3 ? true : false} label="$1,000: Supports our Rise & Shine Breakfast program" type="radio"
                                id="radio3" />
                            <MDBInput gap onClick={this.onClick(4)} checked={this.state.radio === 4 ? true : false} label="$3,000: Nourishes a vulnerable senior for 1 year" type="radio"
                                id="radio4" />
                            <MDBInput gap onClick={this.onClick(5)} checked={this.state.radio === 5 ? true : false} label="$10,000: Provides a new freezer for Our Kitchen" type="radio"
                                id="radio5" />
                            <MDBInput gap onClick={this.onClick(6)} checked={this.state.radio === 6 ? true : false} label="Other Amount:" type="radio"
                                id="radio6" />
                            <h4 className='mdb-color-text ml-4 mt-3'>Payment Information</h4>
                            <div className="d-flex">
                            <MDBInput
                                value={this.state.cc}
                                name="cc"
                                onChange={this.changeHandler}
                                type="text"
                                id="materialFormRegisterNameEx9"
                                label="Credit Card #"
                                required
                            >
                                <div className="valid-feedback">Looks good!</div>
                            </MDBInput>
                            <MDBInput
                                value={this.state.expiration}
                                name="expiration"
                                onChange={this.changeHandler}
                                type="text"
                                id="materialFormRegisterNameEx10"
                                label="Exp. MM/YY"
                                required
                            >
                                <div className="valid-feedback">Looks good!</div>
                            </MDBInput>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4">
                            <MDBInput
                                value={this.state.fname}
                                name="fname"
                                onChange={this.changeHandler}
                                type="text"
                                id="materialFormRegisterNameEx1"
                                label="First name"
                                required
                            >
                                <div className="valid-feedback">Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBInput
                                value={this.state.lname}
                                name="lname"
                                onChange={this.changeHandler}
                                type="text"
                                id="materialFormRegisterEmailEx2"
                                label="Last name"
                                required
                            >
                                <div className="valid-feedback">Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBInput
                                value={this.state.email}
                                onChange={this.changeHandler}
                                type="email"
                                id="materialFormRegisterConfirmEx3"
                                name="email"
                                label="Your Email address"
                            >
                                <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </MDBInput>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='12'>
                            <MDBInput
                                value={this.state.address1}
                                onChange={this.changeHandler}
                                type="text"
                                id="materialFormRegisterPasswordEx4"
                                name="address1"
                                label="Billing Address"
                                required
                            >
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='12'>
                            <MDBInput
                                value={this.state.address2}
                                onChange={this.changeHandler}
                                type="text"
                                id="materialFormRegisterPasswordEx5"
                                name="address2"
                                label="Apt, Suite, etc."
                                required
                            >
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4">
                            <MDBInput
                                value={this.state.city}
                                onChange={this.changeHandler}
                                type="text"
                                id="materialFormRegisterPasswordEx6"
                                name="city"
                                label="City"
                                required
                            >
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBInput
                                value={this.state.state}
                                onChange={this.changeHandler}
                                type="text"
                                id="materialFormRegisterPasswordEx7"
                                name="state"
                                label="State"
                                required
                            >
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBInput
                                value={this.state.zip}
                                onChange={this.changeHandler}
                                type="text"
                                id="materialFormRegisterPasswordEx8"
                                name="zip"
                                label="Zip"
                                required
                            >
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol md='4'>

                            <MDBInput
                                type="checkbox"
                                value="monthlygiving"
                                id="monthlygiving"
                                label="Make This A Monthly Donation!"
                            >
                            </MDBInput>
                        </MDBCol>
                        <MDBCol md='4'>

                            <MDBInput
                                type="checkbox"
                                value="increaseimpact"
                                id="increaseimpact"
                                label="Increase Impact by Offsetting Bank Fees"
                            >
                            </MDBInput>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBInput
                            type="checkbox"
                            value="conditions"
                            id="materialInvalidCheck"
                            required
                            label="Agree to terms and conditions"
                        >
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </MDBInput>
                    </MDBRow>
                    <MDBBtn className='btn-rounded blue-gradient' type="submit">
                        Submit Donation
                    </MDBBtn>
                </form>
            </div>
        );
    }
}

export default FormsPage;