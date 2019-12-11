import React from "react";
import SideMenu from "../../components/Side-Menu/Side-menu";
import { Row, Col } from "antd";
import Content from "../../components/Layout/Content/Content";
import Template from "../../components/Layout/Template/Template";

function Intro(props) {
  return (
    <Content>
      <SideMenu {...props} />
      <Template>
        <Row>
          <Col>
            <h1>Intro</h1>
          </Col>
        </Row>
      </Template>
    </Content>
  );
}

export default Intro;
