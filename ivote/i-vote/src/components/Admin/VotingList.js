import React from "react";

const goToVotingScreen = () =>{
    console.log('Go to voting Screen');
}

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
                        <a style = {{color:'white'}} href="../Voter/VotingScreen" className = "btn btn-default" onClick = {goToVotingScreen} className="btn btn-primary btn-sm">
                            Start voting
                        </a>
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
