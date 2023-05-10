/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

import "./Side-menu.css";

import { disconnect } from "../../helpers/Auth";

const { SubMenu } = Menu;

class SideMenu extends Component {
  logout = (e) => {
    e.preventDefault();
    disconnect();
    this.props.history.push("/login");
  };

  render() {
    const { activeKey, openKey } =
      this.props.location.state && this.props.location.state.menu
        ? this.props.location.state.menu
        : "";

    return (
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={[openKey ? openKey : ""]}
        selectedKeys={[activeKey ? activeKey : "1"]}
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
                  openKey: "",
                },
              },
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
                  openKey: "",
                },
              },
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
          <Menu.Item key="11">
            <a href="#" onClick={this.logout}>
              Sair
            </a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default SideMenu;
