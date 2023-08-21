import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <SpeechProvider
            appId="c13d7182-7994-46f6-8d41-5249ebbab4d3"
            language="en-US"
        >
            <Provider>
                <App />
            </Provider>
        </SpeechProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
