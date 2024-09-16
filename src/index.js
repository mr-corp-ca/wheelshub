import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LoginContextProvider } from "./Context/LoginContext";
import { RoleContextProvider } from "./Context/RoleContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ContextLayout } from "./Context/ContextLayout";
import { UserProvider } from "./Context/UserProvider";
import { NavigateContextProvider } from "./Context/NavigateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextLayout>
      <UserProvider>
        <LoginContextProvider>
          <NavigateContextProvider>
          <RoleContextProvider>
            <ToastContainer />
            <App />
          </RoleContextProvider>
          </NavigateContextProvider>
        </LoginContextProvider>
      </UserProvider>
    </ContextLayout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
