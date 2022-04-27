import React from "react";
import SideMenu from "../../components/Side-Menu/Side-menu";
import { Row, Col } from "antd";
import Content from "../../components/Layout/Content/Content";
import Template from "../../components/Layout/Template/Template";
import Title from "../../components/Layout/Title/Title";

function Intro(props) {
  return (
    <Content>
      <SideMenu {...props} />
      <Template>
        <Row>
          <Col>
            <Title tag="h1">Intro</Title>
          </Col>
        </Row>
        <Row>
          <Col><p>Bem vindo, colé de mermo meu parceiro!</p></Col>
        </Row>
      </Template>
    </Content>
  );
}

export default Intro;
