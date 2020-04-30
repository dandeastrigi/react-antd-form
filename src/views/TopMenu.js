import React from 'react'
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import '../css/index.css'

export class TopMenu extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };
    
    render() {
        return (
            <div className="TopMenu">
            <Menu onClick={this.handleClick} mode="horizontal">
                <Menu.Item key="signup" icon={<SettingOutlined />}>
                Signup
                </Menu.Item>
            </Menu>
            </div>
        );
    }
}

export default TopMenu;