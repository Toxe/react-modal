import React, { useState } from "react";
import Modal from "./Modal";

export default function App() {
    const [firstName, setFirstName] = useState("Test");
    const [lastName, setLastName] = useState("Test");
    const [counter, setCounter] = useState(10);
    const [modalVisible, setModalVisible] = useState(false);

    const onSubmit = (values) => {
        console.log("App.onSubmit()");
        setFirstName(values.firstName);
        setLastName(values.lastName);
        setCounter(values.counter);
        setModalVisible(false);
    };

    const onHidden = () => {
        console.log("App.onHidden()");
        setModalVisible(false);
    };

    return (
        <div className="jumbotron">
            <h1 className="display-4">React Modal Example</h1>
            <p className="lead">A simple Modal using React.</p>
            <hr className="my-4" />
            <p>Click "Show Modal" to show a Modal and enter some values.</p>
            <dl className="row p-4">
                <dt className="col-sm-1">First name</dt>
                <dd className="col-sm-11">
                    <em>{firstName}</em>
                </dd>
                <dt className="col-sm-1">Last name</dt>
                <dd className="col-sm-11">
                    <em>{lastName}</em>
                </dd>
                <dt className="col-sm-1">Counter</dt>
                <dd className="col-sm-11">
                    <em>{counter}</em>
                </dd>
            </dl>
            <button type="button" className="btn btn-primary" onClick={() => setModalVisible(true)}>
                Show Modal
            </button>
            {modalVisible && (
                <Modal
                    onSubmit={onSubmit}
                    onHidden={onHidden}
                    firstName={firstName}
                    lastName={lastName}
                    counter={counter}
                />
            )}
        </div>
    );
}
