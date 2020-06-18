import React from "react";

const VotingList = () => (
    <div className="container">
        <table class="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Operation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>
                        <button className="btn btn-primary btn-sm">
                            Start voting
                        </button>
                        <button className="btn btn-success btn-sm ml-2">
                            Info
                        </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>
                        <button className="btn btn-primary btn-sm">
                            Start voting
                        </button>
                        <button className="btn btn-success btn-sm ml-2">
                            Info
                        </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>
                        <button className="btn btn-primary btn-sm">
                            Start voting
                        </button>
                        <button className="btn btn-success btn-sm ml-2">
                            Info
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default VotingList;
