import React from 'react'
import Search from "../Search/search"
import "./header.css"

export default function Header() {
    return (
        <div className="jumbotron">
            <div className="filter">
                <h1 className="display-4 text-center">Employee Directory</h1>
                <p className="lead text-center">Great employees do great things!</p>
            </div>
                <hr className="my-4"/>
                    <Search /> 
        </div>
    )}
