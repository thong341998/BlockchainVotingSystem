import React, { Component } from "react";
class Login extends Component {
    render() {
        return (
            <div className="col-sm-4 offset-4" style={{ marginTop: "100px" }}>
                <div className="card">
                    <article className="card-body">
                        <a
                            href="/"
                            className="float-right btn btn-outline-primary"
                        >
                            Sign up
                        </a>
                        <h4 className="card-title mb-4 mt-1">Sign in</h4>
                        <form>
                            <div className="form-group">
                                <label>Your email</label>
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                />
                            </div>{" "}
                            <div className="form-group">
                                <a className="float-right" href="/">
                                    Forgot?
                                </a>
                                <label>Your password</label>
                                <input
                                    className="form-control"
                                    placeholder="******"
                                    type="password"
                                />
                            </div>{" "}
                            <div className="form-group mt-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                >
                                    {" "}
                                    Login
                                </button>
                            </div>{" "}
                        </form>
                    </article>
                </div>
            </div>
        );
    }
}

export default Login;
