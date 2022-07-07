import React from "react";

function Info({ formData, setFormData }) {
    return (
        <div className="personal-info-container">
            <input 
                type="text" 
                placeholder="name" 
                value={formData.name}
                onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
                }
            />
            <input 
                type="text" 
                placeholder="email" 
                value={formData.email}
                onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                }
            />
            <input 
                type="text" 
                placeholder="phone" 
                value={formData.phone}
                onChange={(event) =>
                    setFormData({ ...formData, phone: event.target.value })
                }
            />
            <input 
                type="text" 
                placeholder="date_of_birth" 
                value={formData.date_of_birth}
                onChange={(event) =>
                    setFormData({ ...formData, date_of_birth: event.target.value })
                }
            />
        </div>
    )
}

export default Info;