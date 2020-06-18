import React, { Component } from "react";
import Nav from "../Nav";
import NavAd from "./NavAd";
import AdRoutes from "../../routers/AdRoutes";
class Admin extends Component {
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
                                <NavAd />
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="container mt-4">
                                <AdRoutes />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
