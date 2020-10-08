import React, { Component } from 'react';

class Script extends Component {
    // constructor(props) {
    //     super(props);
    // };
    getScript = () => {
        const targetDiv = document.getElementById("donationScript");
        const script = document.createElement("script");
        script.id = "MOWscript";
        script.src =
            "https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/mealsonwheelsatlanta/.widget-js/24879104.js";
        targetDiv.appendChild(script);
    };
    componentDidMount() {
        this.getScript();
    }
    render() {
        return (
            <div>
                <div id="donationScript" style={{ zIndex: '999' }}></div>
            </div>
        )
    }
};

export default Script;