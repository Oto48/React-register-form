import React, { useState } from "react";

function Form() {
    const [page, setPage] = useState(0);

    return (
        <div className="form">
            <input type="name" />
        </div>
    )
}

export default Form;