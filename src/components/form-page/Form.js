import React, { useState } from "react";
import Info from "./Info";
import Experience from "./Experience";
import PosterPage from "../poster-page/PosterPage";
import axios from "axios";
import arrow from "../../images/arrow-right.svg";

function Form() {
    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date_of_birth: "",
        experience_level: "",
        already_participated: true,
        character_id: ""
    });

    const PageDisplay = () => {
        if (page === 1) {
            return <Info formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <Experience formData={formData} setFormData={setFormData} />;
        }
    }


    const submitHandler = () => {
        axios.post("https://chess-tournament-api.devtest.ge/api/register", formData)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="form-container">
            <PosterPage page={page} />
            <div className="form" style={page === 0 ? {background:'#FD5334'} : {}}>
                <div className="body">{PageDisplay()}</div>
                <div>
                    {page === 0 &&
                        <div className="first-page">
                            <div><h1>ChESS SAYS</h1> <p>A LOT ABOUT</p></div>
                            <h1>WHO WE ARE</h1>
                            <button className="button" style={{marginTop: '102px'}}
                                // disabled={page == 0}
                                onClick={() => {setPage((currPage) => currPage + 1);}}>
                                Get Started <img src={arrow} />
                            </button>
                        </div>
                    }

                    {/* {page !==0 &&
                        <button 
                            // disabled={page == 0}
                            onClick={() => {setPage((currPage) => currPage - 1)}}>
                            Back
                        </button>
                    }
                    <button
                        onClick={() => {
                        if (page === 2) {
                            submitHandler();
                        } 
                        if(page === 0 || page === 1) {
                            setPage((currPage) => currPage + 1);
                        }
                        }}
                    >
                        {page === 2 ? "Submit" : "Next"}
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default Form;