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


    const submitHandler = () => {
        console.log(formData)
        axios.post("https://chess-tournament-api.devtest.ge/api/register", formData)
        .then(response => {
            console.log(response);
            setPage((currPage) => currPage + 1)
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="form-container">
            <PosterPage page={page} />
            <div className="form" style={page === 0 ? {background:'#FD5334'} : {}}>
                {page === 1 &&
                    <header><p>Start Creating Your Account</p></header>
                }
                {page === 2 &&
                    <header><p>First Step is Done, Continue To Finish Onboarding</p></header>
                }
                {page !== 0 && page !==3 &&
                    <div className="page-numbers">
                        <div className="page-number">
                            <div><p>1</p></div>
                            {/* <span>Personal Information</span> */}
                        </div>
                        <div className="line"></div>
                        <div className="page-number">
                            <div><p>2</p></div>
                            {/* <span>Chess experience</span> */}
                        </div>
                    </div>
                }
                <div className="form-pages">
                    {page === 0 &&
                        <div className="first-page">
                            <div><h1>ChESS SAYS</h1> <p>A LOT ABOUT</p></div>
                            <h1>WHO WE ARE</h1>
                            <button className="arrow-button" style={{marginTop: '102px'}}
                                onClick={() => {setPage((currPage) => currPage + 1);}}>
                                Get Started <img src={arrow} />
                            </button>
                        </div>
                    }

                    {page === 1 &&
                    <div className="form-inputs">
                        <Info formData={formData} setFormData={setFormData} />
                        <div className="buttons">
                            <button className="button"
                                onClick={() => {setPage((currPage) => currPage - 1)}}>
                                Back
                            </button>
                            <button
                                className="arrow-button"
                                onClick={() => {
                                    setPage((currPage) => currPage + 1);
                                }}
                            >
                                Next <img src={arrow} />
                            </button>
                        </div>
                    </div>
                    }
                    {page === 2 &&
                    <div>
                        <Experience formData={formData} setFormData={setFormData} />
                        <div className="buttons">
                            <button className="button"
                                onClick={() => {setPage((currPage) => currPage - 1)}}>
                                Back
                            </button>
                            <button
                                className="arrow-button"
                                onClick={() => {
                                    submitHandler();
                                }}
                            >
                                Submit <img src={arrow} />
                            </button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Form;