import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle
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
        const overlay = (
            <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
        );
        return (
            <div>
                <MDBNavbar color='blue-gradient' dark expand="md" fixed="top">
                    <MDBContainer>
                        <MDBNavbarBrand>
                            <span className="white-text"><b><a style={{ color: "white" }} href='/'>MOW ATL</a></b></span>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")} />
                        <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <MDBNavLink to="/donate">Get Involved</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/donate">Get Meals</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/donate">Our Kitchen</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/donate">Dinner is Served</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/donate">1705</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <div className="d-none d-md-inline">Events & More</div>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/events'>Events</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/dinnerserved'>Dinner is Served</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/inthenews'>MOWA in the News</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='!#'>Something else here</MDBNavLink></MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/faq">FAQ</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/contact">Contact</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <a className='mx-2' style={{ color: 'white' }} href="https://www.facebook.com/MealsOnWheelsAtlanta/">
                                        <MDBIcon fab icon="facebook-f" />
                                    </a>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <a className='mx-2' style={{ color: 'white' }} href="https://twitter.com/MOWAtlanta">
                                        <MDBIcon fab icon="twitter" />
                                    </a>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <a className='mx-2' style={{ color: 'white' }} href="https://www.instagram.com/mealsonwheelsatlanta/?hl=en">
                                        <MDBIcon fab icon="instagram" />
                                    </a>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
                {this.state.collapseID && overlay}
            </div>
        );
    }
}

export default Nav;