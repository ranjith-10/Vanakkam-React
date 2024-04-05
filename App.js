import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return <h2>Component Composition is Done</h2>
}

const HeadingComponent = () =>  (
    <div id="container">
        <h1 id="heading">Vanakkam React Functional Component</h1>
        <Title/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
