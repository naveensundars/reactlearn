import React from "react";
import ReactDOM from 'react-dom';
import { NavLink, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../scss/app.scss'
import * as Files from "./index";
import { Provider } from 'react-redux'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.menuRef = React.createRef();
    }
    componentDidMount() {
        var menuCount = document.querySelectorAll(".ParentMenu> li");
        for (let i = 0; i < menuCount.length; i++) {
            var childValue = menuCount[i].lastElementChild;
            if (childValue.classList.contains("childMenu")) {
                menuCount[i].classList.add('parent');
            }
        }
    }
    menuClick(e) {
        if (e.target.parentNode.classList.contains("parent")) {
            e.target.parentNode.classList.add('active')
        }

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
                                    <ul className="ParentMenu">
                                        <li onClick={(e) => this.menuClick(e)}><div>Redux</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                                            <ul className="childMenu">
                                                <li><div className="menuList"><NavLink to="/ReduxClass">Redux Class</NavLink></div></li>
                                                <li><div className="menuList"><NavLink to="/ReduxFunction">Redux Function</NavLink></div></li>
                                            </ul>
                                        </li>
                                        <li onClick={(e) => this.menuClick(e)}><div>Api Connection</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                                            <ul className="childMenu">
                                                <li><div className="menuList"><NavLink to="/FetchClass">Fetch Class</NavLink></div></li>
                                                <li><div className="menuList"><NavLink to="/FetchFunction">Fetch Function</NavLink></div></li>
                                                <li><div className="menuList"><NavLink to="/AxiosClass">Axios Class</NavLink></div></li>
                                                <li><div className="menuList"><NavLink to="/AxiosFunction">Axios Function</NavLink></div></li>
                                            </ul>
                                        </li>
                                        <li onClick={(e) => this.menuClick(e)}><div>Context Api</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                                            <ul className="childMenu">
                                                <li><div className="menuList"><NavLink to="/ContextApiClass">Class</NavLink></div></li>
                                                <li><div className="menuList"><NavLink to="/ContextApiFunction">Function</NavLink></div></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                                            <div className="menuList"><NavLink to="/ChildtoParent">Child to Parent</NavLink></div></li>
                                    </ul>
                                </div>
                                <div className="contentBodyInner">
                                    <Switch>
                                        <Route exact path="/" component={Files.HomePage} />
                                        <Route path="/ReduxClass" component={Files.ReduxClass} />
                                        <Route path="/ReduxFunction" component={Files.ReduxFunctionPage} />
                                        <Route path="/FetchClass" component={Files.FetchClass} />
                                        <Route path="/FetchFunction" component={Files.FetchFunction} />
                                        <Route path="/AxiosClass" component={Files.AxiosClass} />
                                        <Route path="/AxiosFunction" component={Files.AxiosFunction} />
                                        <Route path="/ContextApiClass" component={Files.ContextClass} />
                                        <Route path="/ContextApiFunction" component={Files.ContextFunction} />
                                        <Route component={Files.PageFound} />
                                    </Switch>
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