import { Menu, Row } from "antd";
import * as Icon from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

class Nav extends React.Component {
  state = {
    current: "Home",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <Row
          justify="center"
          style={{ backgroundColor: "#fff", paddingTop: "1rem" }}
        >
          <img src={Logo} width={200} />
        </Row>
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
      </>
    );
  }
}

export default Nav;
