import React from 'react';
import './Search.css';

class Search extends React.Component {
    constructor () {
        super();
        this.state = {
            data: !localStorage.getItem("employedata") ? '' : JSON.parse(localStorage.getItem("employedata")).sort(function (a, b) { return a.salary - b.salary }),
            showResult: false,
            filter: 'filter',
            salary: '',
            errorMsg: false


        }
    }

    sortData = () => {
        let { salary, filter, data } = this.state;
        if (filter === "less") {
            this.setState({
                showResult: data.filter(x => parseInt(x.salary) < salary),
                filter: 'filter',
                salary: ''
            })
        }
        else {
            this.setState({
                showResult: data.filter(x => parseInt(x.salary) > salary),
                filter: 'filter',
                salary: ''
            })
        }
    }


    showResult = () => {
        let { filter, salary } = this.state;
        if (salary.length < 1) {
            this.setState({
                errorMsg: "please fill salary feild!"

            })
        }
        else if (filter === "filter") {
            this.setState({
                errorMsg: "choose filter!"

            })
        }
        else if (!localStorage.getItem("employedata")) {
            this.setState({
                errorMsg: "No data is available",
                filter: 'filter',
                salary: ''

            })
        }
        else {
            this.sortData();
        }
    }

    salary (e) {
        if (!isNaN(e) && (e > 0)) {
            this.setState({
                salary: e,
                errorMsg: ''
            })
        }
        else {
            this.setState({
                salary: '',
                errorMsg: ''
            })
        }
    }

    filter = (e) => {
        if (e === "less") {
            this.setState({
                filter: "less",
                errorMsg: ''
            })
        }
        else {
            this.setState({
                filter: "greater",
                errorMsg: ''
            })

        }
    }

    render () {
        let { filter, showResult, errorMsg } = this.state;
        return (
            <div >
                {errorMsg && (<span className="errorMsg">{errorMsg}</span>)}
                <div className="searchFormHolder">
                    <div className="searchInputHolder">
                        <div className="searchBlock">
                            <div className="filter">
                                <div className="button"> <span>{filter}</span>
                                    <div className="dropdown-content">
                                        <p onClick={() => this.filter("less")}>less </p>
                                        <p onClick={() => this.filter("greater")} >greater </p>
                                    </div>
                                </div>
                            </div>
                            <input className="filterInput" type="text" value={this.state.salary} placeholder="Salary" onChange={(e) => this.salary(e.target.value)} />
                            <input className="searchSubmit" type="submit" onClick={this.showResult} value="Search" />
                        </div>
                    </div>
                </div>
                <div className="resultContainer">
                    <div className="resultIteam">

                        {showResult && <table id="customers">
                            <tr>
                                <th>Employ Name</th>
                                <th>Salary</th>

                            </tr>
                            {showResult && showResult.map(r =>
                                <tr>
                                    <td>{r.name}</td>
                                    <td>{r.salary}</td>
                                </tr>)}

                        </table>}

                    </div>
                </div>
            </div >

        );
    }
}

export default Search