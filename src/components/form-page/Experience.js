import React, { useEffect, useState } from "react";
import axios from "axios";

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
                <p>{data[0].id}</p>
                <img src={"https://chess-tournament-api.devtest.ge/"+data[0].image} />
                <input 
                    type="text" 
                    placeholder="experience_level" 
                    value={formData.experience_level}
                    onChange={(event) =>
                        setFormData({ ...formData, experience_level: event.target.value })
                    }
                />
                <p>Please select your favorite Web language:</p>
                <input 
                    type="radio" value={true} name="radio" checked="checked"
                    onChange={() => setFormData({ ...formData, already_participated: false })}
                />
                <input 
                    type="radio" value={false} name="radio"
                    onChange={() =>setFormData({ ...formData, already_participated: true })}
                />
                <input 
                    type="number" 
                    placeholder="character_id" 
                    value={formData.character_id}
                    onChange={(event) =>
                        setFormData({ ...formData, character_id: +event.target.value })
                    }
                />
                <select>
                    {data.map((item) => {
                        return <option style={{backgroundImage: `url("https://chess-tournament-api.devtest.ge/"${item.image})` }}>{item.id}</option>
                    })}  
                </select> 
            </div>
        )
    }
}

export default Experience;