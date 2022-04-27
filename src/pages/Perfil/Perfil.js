import React from "react";

import { Row, Col } from "antd";

import SideMenu from "../../components/Side-Menu/Side-menu";
import Content from "../../components/Layout/Content/Content";
import Template from "../../components/Layout/Template/Template";
import Title from "../../components/Layout/Title/Title";
import PerfilForm from "../../components/Forms/PerfilForm/Perfil-form";

function Perfil(props) {
  return (
    <Content>
      <SideMenu {...props} />
      <Template>
        <Row>
          <Col>
            <Title tag="h1">Perfil</Title>
          </Col>
        </Row>       
        <Row>
          <Col>
            <Title tag="h3">Informações do perfil</Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <PerfilForm></PerfilForm>
          </Col>
        </Row>
      </Template>
    </Content>
  );
}

export default Perfil;
