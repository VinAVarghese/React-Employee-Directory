import React, { Component } from 'react'
import Card from "../Card/card"
import Search from "../Search/search"
import Employees from "../../utils/API"


export default class DirectoryContainer extends Component {
    state = {
        search: "",
        results: []
    }

    // When this component mounts, search the API for all employees
    componentDidMount() {
        this.allEmployees();
    }

    allEmployees = () => {
        API.search()
            .then(res => this.setState({ results: res.data.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the Employees API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

    render() {
        return (
            <div>

            </div>
        )
    }
}