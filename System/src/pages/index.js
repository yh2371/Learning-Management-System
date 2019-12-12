import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import '../semantic/dist/semantic.min.css'
import '../../node_modules/antd/dist/antd.min.css'
import '../../node_modules/jquery/dist/jquery.min.js'
import BlogPosts from "./HomePage.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style/shards-dashboards.1.1.0.min.css"
import "antd/dist/antd.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import routes from "./routes"
import withTracker from "./withTracker"
import ReactDOM from 'react-dom';
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;

global.document = new JSDOM(html).window.document;

const history = createHistory();
ReactDOM.render(
  <Router history={history} basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>,
  document.getElementById("root")
)
const Home = () => (
  <Router history={history} basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
  //<BlogPosts/>
)

export default Home
