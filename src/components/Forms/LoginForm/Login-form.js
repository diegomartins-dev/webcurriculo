import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import { withRouter } from "react-router-dom";

import "./Login-form.css";
import { authenticate } from "../../../helpers/Auth";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

class LoginForm extends Component {
  componentDidMount() {
    this.props.form.validateFields();
  }

  handleGuestSubmit = (e) => {
    e.preventDefault();
    authenticate();
    this.props.history.push("/intro");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        authenticate();
        this.props.history.push("/intro");
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } =
      this.props.form;

    const usernameError =
      isFieldTouched("username") && getFieldError("username");
    const passwordError =
      isFieldTouched("password") && getFieldError("password");

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item
          validateStatus={usernameError ? "error" : ""}
          help={usernameError || ""}
        >
          {getFieldDecorator("username", {
            rules: [
              { required: true, message: "Por favor informe o usuário!" },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Usuário"
            />
          )}
        </Form.Item>
        <Form.Item
          validateStatus={passwordError ? "error" : ""}
          help={passwordError || ""}
        >
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Por favor informe a senha!" }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Senha"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            disabled={hasErrors(getFieldsError())}
            size={"large"}
          >
            Entrar
            <Icon type="login" />
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            type="default"
            htmlType="button"
            className="login-form-button"
            size={"large"}
            onClick={this.handleGuestSubmit}
          >
            Visitante
            <Icon type="user" />
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default withRouter(Form.create({ name: "LoginForm" })(LoginForm));
