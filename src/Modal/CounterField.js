import React from "react";

export default function CounterField(props) {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">{props.title}</span>
            </div>
            <input
                type="text"
                className="form-control"
                value={props.value}
                onChange={(e) => props.onChange(Number.parseInt(e.target.value))}
            />
            <div className="input-group-append">
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => props.onChange(props.value - 1)}>
                    -
                </button>
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => props.onChange(props.value + 1)}>
                    +
                </button>
            </div>
        </div>
    );
}
