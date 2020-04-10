import React from "react";

export default function TextField(props) {
    const onChange = (e) => {
        props.onChangeFormValue(props.name, e.target.value);
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">{props.title}</span>
            </div>
            <input type="text" className="form-control" name={props.name} value={props.value} onChange={onChange} />
        </div>
    );
}
