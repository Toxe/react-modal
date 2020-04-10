import React from "react";

export default function CounterField(props) {
    const onChange = (value) => {
        props.onChangeFormValue(props.name, value);
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">{props.title}</span>
            </div>
            <input
                type="text"
                className="form-control"
                name={props.name}
                value={props.value}
                onChange={(e) => onChange(Number.parseInt(e.target.value))}
            />
            <div className="input-group-append">
                <button type="button" className="btn btn-outline-secondary" onClick={(e) => onChange(props.value - 1)}>-</button>
                <button type="button" className="btn btn-outline-secondary" onClick={(e) => onChange(props.value + 1)}>+</button>
            </div>
        </div>
    );
}
