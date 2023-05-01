import React, { useState } from "react";

function InputArea(props) {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newItem = event.target.value;
        setInputText(newItem);
    }
    return (
        <div className="form">
            <input onChange={handleChange} type="text" />
            <button onClick={() => {
                props.onClick(inputText)
                setInputText("")
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}
export default InputArea