import React, { Component } from 'react';
import Loading from './Loading';
import './Script.css';

class Script extends Component {


    state = {
        loading: '',
        show: ''
    }

    getScript = () => {
        const targetDiv = document.getElementById("donationScript");
        const script = document.createElement("script");
        script.id = "MOWscript";
        script.src =
            "https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/mealsonwheelsatlanta/.widget-js/24879104.js";
        script.type = 'text/javascript'
        targetDiv.appendChild(script);
    };

    // isLoading = () => {
    //     // this.setState({
    //     //     loading: [...this.state.loading, <Loading />]
    //     // })
    //     const timer = setTimeout(() => this.setState({ show: true }), 3000)
    //     return () => clearTimeout(timer);
    // }


    componentDidMount() {
        // this.isLoading();
        this.getScript();
        // this.setState({
        //     loading: false
        // })
        // setTimeout(() => this.setState({ show: true }), 3000)
    };

    // componentDidUpdate() {
    //     this.getScript();

    // }

    render() {
        return (
            <div>
                {/* { this.show && <Loading /> } */}
                <div id="donationScript"></div>
                {/* { this.state.show ? <Loading /> : <div id="donationScript"></div>} */}
            </div>
        )
    }
};

export default Script;