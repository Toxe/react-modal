import React, { useState } from "react";
import useModal from "./useModal";
import TextField from "./TextField";
import CounterField from "./CounterField";

export default function Modal(props) {
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [counter, setCounter] = useState(props.counter);
    const [modalRef, handleSubmit] = useModal(props.onSubmit, props.onHidden, props.hideModal, {
        firstName,
        lastName,
        counter,
    });

    return (
        <div ref={modalRef} className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
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
