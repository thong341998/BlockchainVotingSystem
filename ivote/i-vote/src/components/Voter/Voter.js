import React, { Component } from "react";
import Nav from "../Nav";
import NavVoter from "./NavVoter";
class Voter extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Nav />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="container">
                                <NavVoter />
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="container mt-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Voter;
