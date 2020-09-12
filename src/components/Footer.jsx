import React, { useEffect} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavLink } from "mdbreact";
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
                    <MDBCol md="4">
                        <img src={seal} className="img-fluid mb-1 pl-4" alt="Seal of Transparency" />
                        <img src={member} className="img-fluid mb-1" alt="MOW 2020 Member" />
                    </MDBCol>
                    <MDBCol md='4'>
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title">Meals on Wheels Atlanta</h5>
                        <p>
                            Tax ID#: 58-0960309
                        </p>
                        <ul>
                            <li className="list-unstyled">
                                <MDBNavLink to="/contact">Contact</MDBNavLink>
                            </li>
                            <li className="list-unstyled">
                                <MDBNavLink to='/faq'>FAQ</MDBNavLink>
                            </li>
                            <li className="list-unstyled">
                                <MDBNavLink to="#!">Link 3</MDBNavLink>
                            </li>
                            <li className="list-unstyled">
                                <MDBNavLink to="#!">Link 4</MDBNavLink>
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