import React from "react";
import Input from "./Input";

function Info({ formData, setFormData }) {
    const checkValue = (event) => {
        setFormData({ ...formData, name: event.target.value })
        const a = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(redberry)\.ge$/;
        console.log(a.test(event.target.value));
    }

    return (
        <div className="personal-info-container">
            <Input 
                type="text" 
                placeholder="name" 
                pattern={'^[a-zA-Z0-9_.+-]*(?:[a-zA-Z][a-zA-Z0-9_.+-]*){2,}$'}
                value={formData.name}
                required
                onChange={(event) => 
                    checkValue(event)
                }
            />
            <Input
                type="text" 
                placeholder="email" 
                value={formData.email}
                pattern={"^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(redberry)\.ge$"}
                required
                onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                }
            />
            <Input
                type="text" 
                placeholder="phone" 
                value={formData.phone}
                required
                onChange={(event) =>
                    setFormData({ ...formData, phone: event.target.value })
                }
            />
            <Input
                type="text" 
                placeholder="date_of_birth" 
                value={formData.date_of_birth}
                required
                onChange={(event) =>
                    setFormData({ ...formData, date_of_birth: event.target.value })
                }
            />
        </div>
    )
}

export default Info;