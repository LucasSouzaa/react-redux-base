import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HomeContainer = lazy(() => import('../Home/container/HomeContainer'));

function Index() {
    return <h2>Home</h2>;
}

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
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
                </Suspense>
            </Router>
        );
    }
}

export default Navigation;
