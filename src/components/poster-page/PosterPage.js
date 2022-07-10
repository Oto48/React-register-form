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
            {page === 1 &&
            <div className="first-quote">
                <h2>"when you see a good move, look for a better one"</h2>
                <p>-emanuel lasker</p>
            </div>
            }
            {page === 2 &&
            <div className="second-quote">
                <h2>"many have become chess masters;<br/> no one has become the master of chess"</h2>
                <p>-siegbert tarrasch</p>
            </div>
            }
        </div>
    )
}

export default PosterPage;