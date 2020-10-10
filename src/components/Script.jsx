import React, { Component } from 'react';
import Loading from './Loading';

class Script extends Component {


    // state = {
    //     loading: true
    // }

    getScript = () => {
        const targetDiv = document.getElementById("donationScript");
        const script = document.createElement("script");
        script.id = "MOWscript";
        script.src =
            "https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/mealsonwheelsatlanta/.widget-js/24879104.js";
        targetDiv.appendChild(script);
    };

    // isLoading = () => {
    //     this.setState({
    //         loading: [...this.state.loading, <Loading />]
    //     })
    // }


    componentDidMount() {
        this.getScript();
    };

    render() {
        return (
            <div>
                <div id="donationScript"></div>
            </div>
        )
    }
};

export default Script;