import React, { useEffect} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavLink } from "mdbreact";

const Footer = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <MDBFooter color="blue-gradient" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Footer Content</h5>
                        <p>
                            Here you can use rows and columns here to organize your footer
                            content.
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
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