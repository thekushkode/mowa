import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer
} from "mdbreact";


class Nav extends Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        // const overlay = (
        //     <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
        // );
        return (
                <div>
                    <MDBNavbar dark expand="md" fixed="top">
                        <MDBContainer>
                            <MDBNavbarBrand>
                                <span className="white-text">MOW ATL</span>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")} />
                            <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">About</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Features</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Services</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Opinions</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Team</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Contact</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink to="!#">
                                            <MDBIcon fab icon="facebook-f" />
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="!#">
                                            <MDBIcon fab icon="twitter" />
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="!#">
                                            <MDBIcon fab icon="instagram" />
                                        </MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                    {/* {this.state.collapseID && overlay} */}
                </div>
        );
    }
}

export default Nav;