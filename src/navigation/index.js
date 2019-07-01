import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomeContainer from '../Home/container/HomeContainer';

function Index() {
    return <h2>Home</h2>;
}

class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/page2'}>Pagina 2</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Index} />
                    <Route path="/page2" exact component={HomeContainer} />
                </div>
            </Router>
        );
    }
}

export default Navigation;
