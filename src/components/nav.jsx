import { Menu } from "antd";
import * as Icon from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

class Nav extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        style={{ textAlign: "center" }}
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="light"
      >
        <Menu.Item key="Home" icon={<Icon.HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="Portfolio" icon={<Icon.AppstoreOutlined />}>
          <Link to="/portfolio">Portfolio</Link>
        </Menu.Item>
        <Menu.Item key="Cooperation" icon={<Icon.TeamOutlined />}>
          <Link to="/cooperation">Cooperation</Link>
        </Menu.Item>
        <Menu.Item key="Contact" icon={<Icon.MessageOutlined />}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;
