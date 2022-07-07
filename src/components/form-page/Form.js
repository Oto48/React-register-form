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

    // const testdata = {
    //     "name": "Beth Harmon",
    //     "email": "beth@redberry.ge",
    //     "phone": "598125819",
    //     "date_of_birth": "10/20/1997",
    //     "experience_level": "beginner",
    //     "already_participated": true,
    //     "character_id": 2
    // }

    const submitHandler = () => {
        console.log(formData);
        // console.log(testdata);
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
                        console.log(formData);
                    } else {
                        setPage((currPage) => currPage + 1);
                        console.log(page)
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