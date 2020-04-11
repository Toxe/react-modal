import { useState, useEffect, useRef } from "react";
import jQuery from "jquery";

export default function useModal(onSubmit, onHidden, hideModal, initialFormValues) {
    const [formValues, setFormValues] = useState(initialFormValues);
    const modalRef = useRef(null);

    const onChangeFormValue = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    // handle form submit button click or pressing enter
    const handleSubmit = (e) => {
        console.log("useModal.handleSubmit()");
        e.preventDefault();

        if (onSubmit !== undefined) onSubmit(formValues);
        hideModal();
    };

    useEffect(() => {
        const hidden = () => {
            console.log("useModal.hidden()");
            hideModal();
            if (onHidden !== undefined) onHidden();
        };

        const shown = () => {
            console.log("useModal.shown()");
        };

        console.log("useModal.setup()");
        const modal = modalRef.current;

        jQuery(modal).on("shown.bs.modal", shown);
        jQuery(modal).on("hidden.bs.modal", hidden);
        jQuery(modal).modal("show");

        return () => {
            console.log("useModal.cleanup()");
            jQuery(modal).modal("hide");
        };
    }, [hideModal, onHidden]);

    return [formValues, modalRef, handleSubmit, onChangeFormValue];
}
