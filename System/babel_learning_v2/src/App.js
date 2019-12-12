import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/shards-dashboards.1.1.0.min.css";
import "antd/dist/antd.css";
import 'material-design-icons/iconfont/material-icons.css'
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";

export default () => (
<AuthContext.Provider value={false}>
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
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
</AuthContext.Provider>
);
