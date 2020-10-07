import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import DonationForm from './DonationForm';
//import $ from '$';

class DonationModal extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         modal: false
    //     }
    //     this.myRef = React.createRef()
    // }
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.modal === false) {
    //         const script = document.createElement('script');
    //         script.src = "https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/mealsonwheelsatlanta/.widget-js/24879104.js";
    //         script.type = 'text/javascript';
    //         script.async = true;
    //         // const element = document.querySelector('#script');
    //         // element.appendChild(script);
    //         this.myRef.current.appendChild(script);
    //     }
    // this.myRef.current.appendChild(script);
    // console.log(this.myRef);
    // console.log(this.myRef.current)
    //};
    // componentDidMount() {
    //     const script = document.createElement("script");
    //     script.src = "https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/mealsonwheelsatlanta/.widget-js/24879104.js";
    //     script.async = true;
    //     script.defer = true;
    //     document.body.appendChild(script);
    //     script.onload = () => {
    //         new DonationModal({
    //             container: '#myscriptcontainer' // querySelector to the element that will contain the widget
    //         });
    //     }
    // }


    render() {
        const myScript = '<script src="https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/mealsonwheelsatlanta/.widget-js/24879104.js" type="text/javascript"></script>'
        return (
            <div>
                <MDBBtn className='blue-gradient btn-rounded' onClick={this.toggle}><b>One-Time Donation</b></MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>MOWA Donations</MDBModalHeader>
                    <MDBModalBody>
                        {/* <form>
                            <div id='myscriptcontainer'></div>
                        </form> */}
                        {/* <div dangerouslySetInnerHTML={{__html: myScript }}>
                        </div> */}
                        {/* <DonationForm /> */}
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className="btn-rounded purple-gradient" onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default DonationModal;