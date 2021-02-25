import React, { useState } from "react";
import "./app.scss"
import history from "../../history";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Login from '../pages/Login';
import SignUp from "../pages/SignUp";

function App() {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
