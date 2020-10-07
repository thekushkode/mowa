import React, { useEffect } from "react";

const DonationForm = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/mealsonwheelsatlanta/.widget-js/24879104.js";
        script.async = true;
        document.getElementsByClassName("form-embed")[0].appendChild(script);
    }, []);

    return (

        <div className="form-embed">
            
        </div>
    );
};

export default DonationForm;