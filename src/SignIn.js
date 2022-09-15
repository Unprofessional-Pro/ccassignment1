import React, { Component } from "react";
import './App.css'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        var searchQuery = this.state.searchQuery;

        window.location.href = ""
    }
    render() {
        return(
            <div>
                <div>
                    <header className="App-header">
                        Welcome back!
                    </header>
                </div>
                <div>
                    <body className="App-body">
                        <form>
                            <label>
                                Username:
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <label>
                                Password
                                <input type="text" password="password"/>
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                        <p>Forgot password?</p>
                    </body>
                </div>
            </div>
        );
    }
};