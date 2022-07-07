import React from "react";

function Experience({ formData, setFormData }) {
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
        </div>
    )
}

export default Experience;