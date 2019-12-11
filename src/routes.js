import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { isAuthenticated } from "./helpers/Auth";
import Intro from "./pages/Intro/Intro";
import Perfil from "./pages/Perfil/Perfil";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props}></Component>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location, flashMessage: "Você não está logado!" } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/intro" component={Intro} />
        <PrivateRoute exact path="/perfil" component={Perfil} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
