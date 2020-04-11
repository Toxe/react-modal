import React from "react";
import Content from "./Content";

export default function App() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">React Modal Example</h1>
            <p className="lead">A simple Modal using React and Bootstrap.</p>
            <hr className="my-4" />
            <Content />
        </div>
    );
}
