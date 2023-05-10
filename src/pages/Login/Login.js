import React from "react";
import { Row, Col, Alert } from "antd";

import LoginForm from "../../components/Forms/LoginForm/Login-form";
import Title from "../../components/Layout/Title/Title";
// import Content from "../../components/Layout/Content/Content";
import Template from "../../components/Layout/Template/Template";

function Login(props) {
  return (
    <Template>
      <Row justify="center">
        <Col>
          <Title tag="h1" style={{ textAlign: "center" }}>
            Entrar no gerenciador
          </Title>
          {props.location.state && props.location.state.flashMessage && (
            <Alert
              message={props.location.state.flashMessage}
              type="error"
              showIcon
              closable
            />
          )}
          <LoginForm />
        </Col>
      </Row>
    </Template>
  );
}

export default Login;
