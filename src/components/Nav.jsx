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
                                            <span className=""><b>Get Involved</b></span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/donate'>Donate</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/volunteer'>Volunteer With Us</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/dinnerserved'>Dinner is Served</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='!#'>1705: Gather With Purpose</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdown>
                                                <MDBDropdownToggle nav caret>
                                                    <span className="black-text"><b>Events & News</b></span>
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
                                    <MDBNavLink to="/donate"><b>Home Repair</b></MDBNavLink>
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
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <span className=""><b>About</b></span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/events'>Home Repairs</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/events'>Meal Services</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/events'>FAQ</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink className='black-text' to='/inthenews'>Contact</MDBNavLink></MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                {/* <MDBNavItem>
                                    <MDBNavLink to="/faq"><b>FAQ</b></MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/contact"><b>Contact</b></MDBNavLink>
                                </MDBNavItem> */}
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink style={{ color: 'white' }} to="/donate">
                                        <MDBBtn size='sm' outline rounded color="white" href="/donate">
                                            <MDBIcon size='lg' className='mr-1 animated heartBeat infinite' icon="heart" /> Donate
                                        </MDBBtn>
                                        {/* <MDBIcon size='lg' className='animated heartBeat infinite' icon="heart" /> */}
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem style={{ marginTop: '7px' }} >
                                    <a href="https://www.purposefulgourmetfoods.org/collections/purposeful-gourmet-foods">
                                        {/* <img style={{ width: '25px', marginTop: '7px' }} src={nuts} alt='purposeful foods link' /> */}
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