import React from "react";

import SideMenu from "../../components/Side-Menu/Side-menu";
import Content from "../../components/Layout/Content/Content";
import Template from "../../components/Layout/Template/Template";
import { Row, Col } from "antd";

function Perfil(props) {
  return (
    <Content>
      <SideMenu {...props} />
      <Template>
        <Row>
          <Col>
            <h1>Perfil</h1>
          </Col>
        </Row>
      </Template>
    </Content>
  );
}

export default Perfil;
