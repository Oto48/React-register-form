import React, { useState } from "react";

function Input(props) {
    const [focus, setFocus] = useState(false)
    const handleFocus = (e) => {
        setFocus(true);
    }

    return (
        <div className="formInput">
            <input {...props} onBlur={handleFocus} focus={focus.toString()} />
        </div>
    )
}

export default Input;