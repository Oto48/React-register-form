import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "./Select";

function Experience({ formData, setFormData }) {

    const [data, setData] = useState(null);
    const url = "https://chess-tournament-api.devtest.ge/api/grandmasters";
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[url]);

    if(data){
        return (
            <div className="personal-info-container">
                <div className="about-page">
                    <h2>Personal information</h2>
                    <p>The Basic Information Field</p>
                </div>
                <div className="selects">
                <select
                    onChange={(event) =>
                        setFormData({ ...formData, experience_level: event.target.value })
                    }
                >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="professional">Professional</option>
                </select>
                <Select 
                    options={data} 
                    formData={formData}
                    setFormData={setFormData}
                    images={true}
                />
                </div>
                <p>Have you participated in the Redberry Championship?</p>
                <label>Yes</label>
                <input 
                    type="radio" value={true} name="radio" defaultChecked
                    onChange={() => setFormData({ ...formData, already_participated: true })}
                />
                <label>No</label>
                <input 
                    type="radio" value={false} name="radio"
                    onChange={() =>setFormData({ ...formData, already_participated: false })}
                />
            </div>
        )
    }
}

export default Experience;