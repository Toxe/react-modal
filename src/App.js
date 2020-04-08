import React from "react";

export default function App() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">React Modal Example</h1>
            <p className="lead">A simple Modal using React.</p>
            <hr className="my-4" />
            <p>Click "Show Modal" to show a Modal and enter some values.</p>
            <dl className="row p-4">
            <dt className="col-sm-1">First name</dt>
                <dd className="col-sm-11"><em>Test</em></dd>
                <dt className="col-sm-1">Last name</dt>
                <dd className="col-sm-11"><em>Test</em></dd>
                <dt className="col-sm-1">Counter</dt>
                <dd className="col-sm-11"><em>10</em></dd>
            </dl>
            <button type="button" className="btn btn-primary">Show Modal</button>
        </div>
    );
}
