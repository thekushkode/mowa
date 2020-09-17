import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCollapse, MDBCollapseHeader, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import peeps from '../assets/oldladyandwoman.jpg';
import Nav from "./Nav";
import Footer from "./Footer";

class Faq extends Component {
    state = {
        collapseID: "collapse1"
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <header style={{ marginBottom: '56px' }}>
                    <Nav />
                </header>

                <div>
                    <MDBCard
                        className="card-image"
                        style={{
                            backgroundImage: "url(" + peeps + ")"
                        }}
                    >
                        <div className="rgba-black-strong py-5 px-2">
                            <MDBRow className="d-flex justify-content-center">
                                <MDBCol md="10" xl="8">
                                    <MDBContainer className="accordion md-accordion accordion-5">
                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse1")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase blue-gradient white-text mb-0 d-flex justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center mr-4"
                                                    style={{ backgroundColor: "#0B42FF", minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="utensils"
                                                        size="2x"
                                                        className="m-3 black-text"
                                                    />
                                                </div>
                                                How to Qualify for Meals
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <p className="p-md-4 mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high
                                                        life accusamus terry richardson ad squid. 3 wolf moon
                                                        officia aute, non cupidatat skateboard dolor brunch.
                                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                        wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et.
                                                    </p>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>

                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse2")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase blue-gradient white-text mb-0 d-flex justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center mr-4"
                                                    style={{ backgroundColor: "#0B42FF", minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="hands-helping"
                                                        size="2x"
                                                        className="m-3 black-text"
                                                    />
                                                </div>
                                                Volunteering With MOWA
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <p className="p-md-4 mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high
                                                        life accusamus terry richardson ad squid. 3 wolf moon
                                                        officia aute, non cupidatat skateboard dolor brunch.
                                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                        wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et.
                                                    </p>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>

                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse3")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase blue-gradient white-text mb-0 d-flex justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center mr-4"
                                                    style={{ backgroundColor: "#0B42FF", minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="donate"
                                                        size="2x"
                                                        className="m-3 black-text"
                                                    />
                                                </div>
                                                Donations
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <p className="p-md-4 mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high
                                                        life accusamus terry richardson ad squid. 3 wolf moon
                                                        officia aute, non cupidatat skateboard dolor brunch.
                                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                        wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et.
                                                    </p>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse4")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase blue-gradient white-text mb-0 d-flex justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center mr-4"
                                                    style={{ backgroundColor: "#0B42FF", minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="gift"
                                                        size="2x"
                                                        className="m-3 black-text"
                                                    />
                                                </div>
                                                Purposeful Foods
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse4" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <p className="p-md-4 mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high
                                                        life accusamus terry richardson ad squid. 3 wolf moon
                                                        officia aute, non cupidatat skateboard dolor brunch.
                                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                        wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et.
                                                    </p>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse5")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase blue-gradient white-text mb-0 d-flex justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center mr-4"
                                                    style={{ backgroundColor: "#0B42FF", minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="info"
                                                        size="2x"
                                                        className="m-3 black-text"
                                                    />
                                                </div>
                                                Annual Report & Financials
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse5" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <p className="p-md-4 mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high
                                                        life accusamus terry richardson ad squid. 3 wolf moon
                                                        officia aute, non cupidatat skateboard dolor brunch.
                                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                        wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et.
                                                    </p>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                    </MDBContainer>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCard>
                </div>
                <footer style={{ marginTop: '-25px' }}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default Faq;