import React, { Component } from "react";
import Admin from "../components/Admin/Admin";
import Login from "../components/Login";
import { Route, Switch } from "react-router-dom";
import Voter from "../components/Voter/Voter";
class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/voter" component={Voter} />
                <Route path="/admin" component={Admin} />
            </Switch>
        );
    }
}
export default Routes;
