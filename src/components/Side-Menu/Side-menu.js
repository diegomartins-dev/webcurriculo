import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

import "./Side-menu.css";

const { SubMenu } = Menu;

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={[this.props.location.state.menu.openKey]}
        selectedKeys={[this.props.location.state.menu.activeKey]}
        mode="inline"
        theme="dark"
        inlineCollapsed={true}
      >
        <Menu.Item key="1">
          <Icon type="desktop" />
          <span>Home</span>
          <Link
            to={{
              pathname: "/intro",
              state: {
                menu: {
                  activeKey: "1",
                  openKey: ""
                }
              }
            }}
          ></Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="inbox" />
          <span>Perfil Profissional</span>
          <Link
            to={{
              pathname: "/perfil",
              state: {
                menu: {
                  activeKey: "2",
                  openKey: ""
                }
              }
            }}
          ></Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="inbox" />
          <span>Formação Academica</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="appstore" />
              <span>Conhecimentos Profissionais</span>
            </span>
          }
        >
          <Menu.Item key="4">
            {" "}
            <Icon type="inbox" />
            Conhecimentos Profissionais
          </Menu.Item>
          <Menu.Item key="5">
            {" "}
            <Icon type="inbox" />
            Tecnologias
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Experiências Profissionais</span>
            </span>
          }
        >
          <Menu.Item key="6">
            {" "}
            <Icon type="inbox" />
            Experiências Profissionais
          </Menu.Item>
          <Menu.Item key="7">
            {" "}
            <Icon type="inbox" />
            Tecnologias
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="8">
          <Icon type="inbox" />
          <span>Informações Pessoais</span>
        </Menu.Item>
        <Menu.Item key="9">
          <Icon type="inbox" />
          <span>Tecnologias</span>
        </Menu.Item>
        <SubMenu
          key="sub3"
          className="ant-menu-item-login"
          title={
            <span>
              <Icon type="user" />
              <span>Login</span>
            </span>
          }
        >
          <Menu.Item key="10">Diego Guimarães</Menu.Item>
          <Menu.Item key="11">Sair</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default SideMenu;
