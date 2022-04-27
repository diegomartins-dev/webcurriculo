import React, { Component } from "react";
import { Form, Input, Icon, Button, Select } from "antd";

import "./Dynamic-list-default-form.css";

const { Option } = Select;
let id = 0;

class DynamicListDefaultForm extends Component {
  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { keys, names } = values;
        console.log("Received values of form: ", values);
        console.log(
          "Merged values:",
          keys.map(key => names[key])
        );
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    getFieldDecorator("keys", { initialValue: [] });
    const keys = getFieldValue("keys");
    const formItems = keys.map((k, index) => (
      <React.Fragment key={k}>
        <Form.Item
          label={index === 0 ? "Lista de detalhes" : ""}
          hasFeedback
          required={false}
          key={k}
        >
          {getFieldDecorator(`content[${k}]`, {
            validateTrigger: ["onChange", "onBlur"],
            rules: [
              {
                required: true,
                whitespace: true,
                message: "Informe o item da lista"
              }
            ]
          })(<Input placeholder="Item da lista" />)}
        </Form.Item>
        <Form.Item key={Math.random()} hasFeedback>
          {getFieldDecorator(`type[${k}]`, {
            validateTrigger: ["onChange", "onBlur"],
            rules: [
              {
                required: true,
                whitespace: true,
                message: "Por favor selecione o tipo de lista"
              }
            ]
          })(
            <Select placeholder="Selecione o tipo de lista">
              <Option value="text">Text</Option>
              <Option value="link">Link</Option>
            </Select>
          )}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              onClick={() => this.remove(k)}
            />
          ) : null}
        </Form.Item>
      </React.Fragment>
    ));
    return (
      <Form layout={"horizontal"} onSubmit={this.handleSubmit}>
        {formItems}
        <Form.Item>
          <Button type="dashed" onClick={this.add}>
            <Icon type="plus" /> Adicione novo item da lista
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "DynamicListDefaultForm" })(
  DynamicListDefaultForm
);
