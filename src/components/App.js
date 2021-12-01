import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import '../scss/app.scss'
import * as Files from "./index";
import { Provider } from 'react-redux'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.menuRef = React.createRef();
    }
    componentDidMount() {
        // var menuCount = ReactDOM.findDOMNode(this.menuRef);
        // for (let i = 0; i < menuCount.length; i++) {
        //     console.log(i)
        // }
    }
    render() {
        return (
            <React.Fragment>
                <Provider store={Files.store}>
                    <Router>
                        <div className="root-content">
                            <header>
                                <div className="headerLeft">
                                    <h1>React Examples</h1>
                                </div>
                                <div className="headerRight"></div>
                            </header>
                            <div className="contentBody">
                                <div className="sideBar">
                                    <h1>Menu</h1>
                                    <ul>
                                        <li><div ref={this.menuRef}>Redux</div>
                                            <ul>
                                                <li><div className="menuList"><NavLink to="/ReduxClass">Redux Class</NavLink></div></li>
                                                <li><div className="menuList"><NavLink to="/ReduxFunction">Redux Function</NavLink></div></li>
                                            </ul>
                                        </li>
                                        <li><div ref={this.menuRef}>Api Connection</div>
                                            <ul>
                                                <li><div className="menuList"><NavLink to="/FetchClass">Fetch Class</NavLink></div></li>
                                                <li><div className="menuList"><NavLink to="/FetchFunction">Fetch Function</NavLink></div></li>
                                                <li><div className="menuList"><NavLink to="/AxiosClass">Axios Class</NavLink></div></li>
                                                <li><div className="menuList"><NavLink to="/AxiosFunction">Axios Function</NavLink></div></li>
                                            </ul>
                                        </li>
                                        <li><div className="menuList"><NavLink to="/ChildtoParent">Child to Parent</NavLink></div></li>
                                    </ul>
                                </div>
                                <div className="contentBodyInner">
                                    <Route path="/ReduxClass" component={Files.ReduxClass} />
                                    <Route path="/ReduxFunction" component={Files.ReduxFunctionPage} />
                                    <Route path="/FetchClass" component={Files.FetchClass} />
                                    <Route path="/FetchFunction" component={Files.FetchFunction} />
                                    <Route path="/AxiosClass" component={Files.AxiosClass} />
                                    <Route path="/AxiosFunction" component={Files.AxiosFunction} />
                                </div>

                            </div>
                            <footer>
                            </footer>
                        </div>
                    </Router>
                </Provider>
            </React.Fragment>
        )
    }
}
export default App;