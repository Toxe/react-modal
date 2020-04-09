import React, { useState, useEffect, useRef } from "react";
import jQuery from "jquery";

export default function Modal(props) {
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [counter, setCounter] = useState(props.counter);
    const modalRef = useRef(null);

    const submit = () => {
        console.log("Modal.submit()");
        props.onSubmit({
            firstName,
            lastName,
            counter,
        });
    };

    const shown = () => {
        console.log("Modal.shown()");
    };

    const hidden = () => {
        console.log("Modal.hidden()");
        props.onHidden();
    };

    useEffect(() => {
        console.log("Modal.setup()");
        const modal = modalRef.current;

        jQuery(modal).on("shown.bs.modal", shown);
        jQuery(modal).on("hidden.bs.modal", hidden);
        jQuery(modal).modal("show");

        return () => {
            console.log("Modal.cleanup()");
            jQuery(modal).modal("hide");
        };
    }, []);

    return (
        <div
            ref={modalRef}
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Modal title
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">First name</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Last name</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Counter</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                value={counter}
                                onChange={(e) => setCounter(Number.parseInt(e.target.value))}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={() => setCounter(counter - 1)}>
                                    -
                                </button>
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={() => setCounter(counter + 1)}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={submit}>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
