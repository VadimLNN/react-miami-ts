import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import BaseLayout from "./layouts/BaseLayout";
import store from "./appStore";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BaseLayout />
        </Provider>
    </React.StrictMode>
);
