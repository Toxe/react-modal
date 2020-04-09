import React from "react";

export default function TextField(props) {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">{props.title}</span>
            </div>
            <input
                type="text"
                className="form-control"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    );
}
