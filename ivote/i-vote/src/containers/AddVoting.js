import React, { Component } from "react";
//import * as actions from "../../actions/index";
import { connect } from "react-redux";

class AddCustomer extends Component {
    handleInput = (e) => {
        e.preventDefault();
    };
    render() {
        return (
            <form onSubmit={this.handleInput}>
                <h4>Add a vote</h4>
                <div className="form-row">
                    <div className="form-group col">
                        <label>Title</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Description</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="input-group mb-2">
                    <input
                        placeholder="Candidate"
                        ref="taskInput"
                        className="form-control"
                    />
                    <button className="btn btn-primary btn-sm ml-3">
                        Add candidate
                    </button>
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                        Add vote
                    </button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onAddCustomer: () => {
        //     dispatch(actions.addCustomer());
        // },
    };
};
export default connect(null, mapDispatchToProps)(AddCustomer);
