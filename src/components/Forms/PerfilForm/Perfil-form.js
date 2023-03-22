import React, { Component } from "react";

import { Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import DynamicListDefaultForm from "../DynamicListDefaultForm/Dynamic-list-default-form";

class PerfilForm extends Component {
  state = {
    validateStatus: "",
    description: {
      value: ""
    }
  };

  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    const { form } = this.props;
    this.setState({ validateStatus: "validating" });
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        setTimeout(() => {
          //   console.log("Received values of form: ", values);
          this.setState({ validateStatus: "success" });
        }, 3000);
      } else {
        this.setState({ validateStatus: "error" });
      }
    });
  };

  handleBlur = (e, attr) => {
    const { form } = this.props;

    form.setFieldsValue({ [attr]: e.target.value });

    form.validateFields([attr], err => {
      if (err) {
        this.setState({ validateStatus: "error" });
      } else {
        this.handleSubmit(e);
      }
    });
  };

  handleOnChange = (e, attr) => {
    const { form } = this.props;

    form.setFieldsValue({ [attr]: e.target.value });

    form.validateFields([attr], err => {
      if (err) {
        this.setState({ validateStatus: "error" });
      } else {
        this.setState({ validateStatus: "" });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      layout: "horizontal"
    };

    return (
    <React.Fragment>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label="Descrição do perfil"
          hasFeedback
          validateStatus={this.state.validateStatus}
        >
          {getFieldDecorator("description", {
            rules: [
              {
                min: 5,
                message: "A descrição não deve ser menor que cinco letras"
              },
              {
                required: true,
                message: "A descrição é obrigatória"
              }
            ]
          })(
            <TextArea
              onBlur={e => this.handleBlur(e, "description")}
              onChange={e => this.handleOnChange(e, "description")}
            />
          )}
        </Form.Item>
      </Form>
      <DynamicListDefaultForm></DynamicListDefaultForm>
      </React.Fragment>
    );
  }
}

export default Form.create({ name: "PerfilForm" })(PerfilForm);
