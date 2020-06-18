import React, { Component } from "react";
import { Route } from "react-router-dom";
import AddVoting from "../containers/AddVoting";
import VotingList from "../components/Admin/VotingList";
class AdRoutes extends Component {
    render() {
        return (
            <div>
                <Route path="/admin/addvoting" component={AddVoting} />
                <Route path="/admin/votinglist" component={VotingList} />
            </div>
        );
    }
}
export default AdRoutes;
