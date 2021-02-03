import { Menu } from 'antd';
import * as Icon from '@ant-design/icons';
import React from 'react'


const { SubMenu } = Menu;

class Nav extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu style={{ textAlign: 'center'}} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
        <Menu.Item key="Home" icon={<Icon.HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="Portfolio" icon={<Icon.AppstoreOutlined />}>
          Portfolio
        </Menu.Item>
        <Menu.Item key="Cooperation" icon={<Icon.TeamOutlined />}>
          Cooperation
        </Menu.Item>
        <Menu.Item key="Contact" icon={<Icon.MessageOutlined />}>
          Contact
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav