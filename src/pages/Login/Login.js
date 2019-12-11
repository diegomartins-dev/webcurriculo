import React from "react";
import { Row, Col, Alert } from "antd";

import Template from "../../components/Layout/Template/Template";
import LoginForm from "../../components/Forms/LoginForm/Login-form";

function Login(props) {
  return (
    <Template>
      <Row justify="center">
        <Col>          
          <h1 style={{ textAlign: "center" }}>Login</h1>
          {props.location.state && props.location.state.flashMessage && <Alert message={props.location.state.flashMessage} type="error" showIcon closable />}
          <LoginForm/>
        </Col>
      </Row>
    </Template>
  );
}

export default Login;
