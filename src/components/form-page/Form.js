import React, { useState } from "react";
import Info from "./Info";
import Experience from "./Experience";
import axios from "axios";

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
        if (page === 0) {
            return <Info formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
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
        <div className="form">
            <div className="body">{PageDisplay()}</div>
            <div className="footer">
                <button 
                    disabled={page == 0}
                    onClick={() => {setPage((currPage) => currPage - 1)}}>
                    Back
                </button>
                <button
                    onClick={() => {
                    if (page === 1) {
                        submitHandler();
                    } 
                    if(page === 0) {
                        setPage((currPage) => currPage + 1);
                    }
                    }}
                >
                    {page === 1 ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    )
}

export default Form;