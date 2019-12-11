import React from "react";
import { Layout } from "antd";

import "./Template.css";

const Template = (props) => {
  return <Layout className="layout">{props.children}</Layout>;
};

export default Template;
