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
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[url]);

    if(data){
        return (
            <div className="personal-info-container">
                <input 
                    type="text" 
                    placeholder="experience_level" 
                    value={formData.experience_level}
                    onChange={(event) =>
                        setFormData({ ...formData, experience_level: event.target.value })
                    }
                />
                <input 
                    type="radio" value={true} name="radio" defaultChecked
                    onChange={() => setFormData({ ...formData, already_participated: false })}
                />
                <input 
                    type="radio" value={false} name="radio"
                    onChange={() =>setFormData({ ...formData, already_participated: true })}
                />
                <Select 
                    options={data} 
                    formData={formData}
                    setFormData={setFormData}
                    images={true}
                />
            </div>
        )
    }
}

export default Experience;