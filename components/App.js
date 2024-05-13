import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import RestaurantContainer from "./Body"

const AppContainer = () => {
    return (
        <div className="app-container">
            <Header />
            <RestaurantContainer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppContainer />);
