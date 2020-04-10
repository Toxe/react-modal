import React from "react";

export default function FieldList(props) {
    return (
        <>
            {React.Children.map(props.fields, (el) =>
                React.cloneElement(el, {
                    value: props.formValues[el.props.name],
                    onChangeFormValue: props.onChangeFormValue,
                })
            )}
        </>
    );
}
