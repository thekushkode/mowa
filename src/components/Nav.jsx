import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle
} from "mdbreact";
import logo from '../assets/mowaaa.png';
import nuts from '../assets/purposenuts.png';


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
                            <span><a href='/' style={{ color: "white" }}><img src={logo} alt='MOWA logo' style={{ width: '100px', padding: '0px' }}></img></a></span>
                            {/* <span className="white-text"><b><a style={{ color: "white" }} href='/'>MOW ATL</a></b></span> */}
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")} />
                        <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <span className=""><b>Support Us</b></span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/donate'>Donate</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/dinnerserved'>Dinner is Served</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='!#'>1705: Gather With Purpose</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='!#'>Something else here</MDBNavLink></MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/donate"><b>Get Meals</b></MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                        <span className=""><b>Events & News</b></span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/events'>Events</MDBNavLink></MDBDropdownItem> 
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/inthenews'>MOWA in the News</MDBNavLink></MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/faq"><b>FAQ</b></MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/contact"><b>Contact</b></MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink className='mx-2' style={{ color: 'white' }} to="/donate">
                                        <MDBIcon size='lg' className='animated heartBeat infinite' icon="heart" />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <a className='mx-2' href="https://www.purposefulgourmetfoods.org">
                                        {/* <img style={{ width: '25px', marginTop: '7px' }} src={nuts} alt='purposeful foods link' /> */}
                                        <MDBBtn className='btn-rounded mdb-color border border-warning' size='sm'><b>Purposeful Foods</b></MDBBtn>
                                    </a>
                                </MDBNavItem>
                                {/* <MDBNavItem>
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
                                </MDBNavItem> */}
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