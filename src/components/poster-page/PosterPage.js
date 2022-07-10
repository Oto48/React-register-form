import React from "react";
import '../../App.css';

import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import logo from "../../images/poster-logo.svg";

function PosterPage({page}) {

    return (
        <div className="poster-page" style={{ backgroundImage: `url(${page === 0 ? image1 : page === 1 ? image2 : image3})` }}>
            <div className="title">
                <img src={logo} />
            </div>
        </div>
    )
}

export default PosterPage;