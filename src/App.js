import React from 'react';
import Form from './component/Form';
import Search from './component/Search';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class App extends React.Component {

    render () {
        return (
            <Router>
                <div className="Router">
                    <ul>
                        <li>Sunday Mobility</li>
                        <li>
                            <Link to="/">Store</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>

                    </ul>

                    <hr />
                    <Route exact path="/" component={Form} />
                    <Route path="/Search" component={Search} />

                </div>
            </Router>
        );
    }
}

export default App;