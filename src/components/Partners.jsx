import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody } from "mdbreact";
import hd from '../assets/hd.png';
import invest from '../assets/investatl.png';
import fulton from '../assets/fulton.png';

const Partners = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <MDBCard className="px-1 pb-5 text-center">
                <MDBCardBody>
                    <h2 className="h1-responsive mowabluetext font-weight-bold my-5">
                        Our Home Repair Partners
                    </h2>
                    <p className="text-muted w-responsive mx-auto mb-5">
                        Our amazing partners go above and beyond to assist in our home repair efforts. Our home repair program offers critical support for seniors and veterans, preventing them from being displaced from their homes or being forced into transitional housing or shelters due to code violations or inability to facilitate ongoing maintenance.
                    </p>
                    <MDBRow>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={hd}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="home depot logo"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                The Home Depot
                            </h4>
                            <p className="text-uppercase text-justify text-muted mb-3">Clients must be honorably discharged military veterans who live in one of the Metro Atlanta counties. Prioritization is given to senior veterans. There is no cost for this service.
                            </p>
                        </MDBCol>

                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={invest}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="invest atlanta logo"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">Invest Atlanta</h4>
                            <p className="text-uppercase text-muted text-justify mb-3">
                                Must reside within the City of Atlanta and meet specific residency requirements. Ten years at a 0% interest rate deferred forgivable loan.  Seniors age 55+, military veterans, the disabled, and those who have been in their homes for 15+ years will have priority in the program.
                            </p>
                            
                        </MDBCol>

                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <MDBAvatar
                                tag="img"
                                src={fulton}
                                className="rounded-circle z-depth-1-half img-fluid"
                                alt="fulton county logo"
                            />
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Fulton County
                            </h4>
                            <p className="text-uppercase text-justify text-muted mb-3">Clients must be at least 55 years old and live in Fulton County. There is no cost for this service.<br/><br/>
                            For more information, please contact Fulton County’s STARLine at <a href='tel:4046136000'>404-613-6000</a>.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}

export default Partners;