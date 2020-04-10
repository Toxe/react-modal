import React, { useState, useEffect, useRef } from "react";
import TextField from "./TextField";
import CounterField from "./CounterField";
import jQuery from "jquery";

export default function Modal(props) {
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [counter, setCounter] = useState(props.counter);
    const modalRef = useRef(null);

    const submit = (e) => {
        console.log("Modal.submit()");
        e.preventDefault();
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
        <div ref={modalRef} className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form onSubmit={submit}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {props.title}
                            </h5>
                            <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{props.description}</p>
                            <TextField title="First name" value={firstName} onChange={setFirstName} />
                            <TextField title="Last name" value={lastName} onChange={setLastName} />
                            <CounterField title="Counter" value={counter} onChange={setCounter} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <input type="submit" className="btn btn-primary" value="Save changes" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
