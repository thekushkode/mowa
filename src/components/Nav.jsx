import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBBtn, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle
} from "mdbreact";
import logo from '../assets/mowaaa.png';


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
                <MDBNavbar style={{ backgroundColor: "#283c64" }} dark expand="md" fixed="top">
                    <MDBContainer>
                        <MDBNavbarBrand>
                            <span><a href='/' style={{ color: "white" }}><img src={logo} alt='MOWA logo' style={{ width: '100px', padding: '0px' }}></img></a></span>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")} />
                        <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <span className=""><b>Get Involved</b></span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/donate'>Donate</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/volunteer'>Volunteer</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/ourkitchen'>Our Kitchen</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/chefsexperience'>Chef's Experience</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdown>
                                                <MDBDropdownToggle nav caret>
                                                    <span className="black-text">Events & News</span>
                                                </MDBDropdownToggle>
                                                <MDBDropdownMenu className="dropdown-default">
                                                    <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/events'>Events</MDBNavLink></MDBDropdownItem>
                                                    <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/inthenews'>MOWA in the News</MDBNavLink></MDBDropdownItem>
                                                </MDBDropdownMenu>
                                            </MDBDropdown>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/getmeals"><b>Get Meals</b></MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/homerepairs"><b>Home Repair</b></MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/chefsexperience"><b>Dine For A Cause</b></MDBNavLink>
                                </MDBNavItem>
                                
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink style={{ color: 'white' }} to="/volunteer">
                                        <MDBBtn size='sm' className='mowaorange btn-rounded'>
                                            <MDBIcon size='lg' className='mr-1 animated rubberBand infinite' icon="hand-holding-heart" /> Volunteer
                                        </MDBBtn>
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink style={{ color: 'white' }} to="/donate">
                                        <MDBBtn size='sm' outline rounded color="white" href="/donate">
                                            <MDBIcon size='lg' className='mr-1 animated heartBeat infinite' icon="heart" /> Donate
                                        </MDBBtn>
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem style={{ marginTop: '7px' }} >
                                    <a href="https://www.purposefulgourmetfoods.org/">
                                        <MDBBtn className='btn-rounded mdb-color border border-warning' size='sm'><b>Shop Purposeful</b></MDBBtn>
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