import React from "react";
import useModal from "./useModal";
import FieldList from "./FieldList";

export default function Modal(props) {
    const [formValues, setFormValues, modalRef, handleSubmit] = useModal(
        props.onSubmit,
        props.onHidden,
        props.hideModal,
        props.initialValues
    );

    const onChangeFormValue = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

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
                            <FieldList
                                fields={props.children}
                                formValues={formValues}
                                onChangeFormValue={onChangeFormValue}
                            />
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
