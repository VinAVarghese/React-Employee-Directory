import React, { Component } from 'react'
import Card from "../Card/card"
import Header from "../Header/header"
import Search from "../Search/search"
import API from "../../utils/API"


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
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <Header value={this.state.search} handleInputChange={this.handleInputChange}/>
                {this.state.results.filter(item => {return item.name.first.indexOf(this.state.search)>-1}).map(emp => <Card name={emp.name} image={emp.picture.large} phone={emp.phone} cell={emp.cell} email={emp.email}/>)}
            </div>
        )
    }
}