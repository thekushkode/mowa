import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavLink, MDBBtn, MDBIcon } from "mdbreact";
import seal from '../assets/sealoftransparency.png';
import member from '../assets/mow2020member.png';

const Footer = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <MDBFooter color="blue-gradient" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md='3' className='text-center'>
                        <h5 className="title font-weight-bold">Meals on Wheels Atlanta</h5>
                        <p>
                            Tax ID#: 58-0960309
                        </p>
                        <div>
                            <MDBBtn href='https://www.facebook.com/MealsOnWheelsAtlanta/' target='_blank' size="lg" tag="a" floating social="fb">
                                <MDBIcon fab icon="facebook-f" target='_blank' />
                            </MDBBtn>
                            <MDBBtn href='https://twitter.com/MOWAtlanta' target='_blank' size="lg" tag="a" floating social="tw">
                                <MDBIcon fab icon="twitter" target='_blank' />
                            </MDBBtn>
                            <MDBBtn href='https://www.instagram.com/mealsonwheelsatlanta/?hl=en' target='_blank' size="lg" tag="a" floating social="ins">
                                <MDBIcon fab icon="instagram" target='_blank' />
                            </MDBBtn>
                        </div>
                    </MDBCol>
                    <MDBCol md="3" className='text-center'>
                        <img src={seal} className="img-fluid mb-1" alt="Seal of Transparency" />
                        
                    </MDBCol>
                    <MDBCol md="3" className='text-center mb-3'>
                        
                        <img src={member} className="img-fluid mb-1" alt="MOW 2020 Member" />
                    </MDBCol>
                    <MDBCol md="3" className='text-right'>
                        <ul>
                            <li className="list-unstyled py-0">
                                <MDBNavLink to="/contact">Contact</MDBNavLink>
                            </li>
                            <li className="list-unstyled py-0">
                                <MDBNavLink to='/faq'>FAQ</MDBNavLink>
                            </li>
                            <li className="list-unstyled py-0">
                                <MDBNavLink to='/team'>Our Team</MDBNavLink>
                            </li>
                            <li className="list-unstyled py-0">
                                <MDBNavLink to="#!">Terms & Conditions</MDBNavLink>
                            </li>
                            <li className="list-unstyled py-0">
                                <MDBNavLink to="#!">Privacy</MDBNavLink>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer className='d-flex justify-content-between' fluid>
                    <div>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MOW Atlanta </a>
                    </div>
                    <div>
                        Powered By: <a href='https://www.goatwebdesigns.com'>Goat Web Designs</a>
                    </div>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;