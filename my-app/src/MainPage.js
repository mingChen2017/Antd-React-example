import React from 'react';
import { Layout,Menu, Icon } from 'antd';
import './MainPage.css';

import  Introduce from './paging/Introduce.js'
import  DesignTenet from './paging/DesignTenet.js'
import  DesignRule from './paging/DesignRule.js'
import ModuleDescribe from './paging/ModuleDescribe.js'
import ChangeModule from './paging/ChangeModule.js'
const SubMenu = Menu.SubMenu;
const {  Content, Footer, Sider } = Layout;


class MainPage extends React.Component {


    //点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];
    contentPage=[<Introduce />, <DesignTenet />,<DesignRule />, <ModuleDescribe >love</ModuleDescribe>, <ChangeModule />];
    state = {
        openKeys: ['sub1'],
        content:[1]
    };
    onOpenChange = (openKeys) => {

        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    }
    handleClick = (e) => {
        this.setState({
            content: e.key
        });
    }
    render() {
        return (

            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >

                        <Menu
                            // style={{ width: 240
                            // }}
                            onClick={this.handleClick}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            style={{width: 200 }}
                            theme={"dark"}
                            openKeys={this.state.openKeys}
                            onOpenChange={this.onOpenChange}
                        >
                        <SubMenu key="sub1" style={{backgroundColor: '#26e6e6' }}
                                 title={<span><Icon type="flag" /><span  >Ant Design</span></span>}>
                            <Menu.Item key="1">前言</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>设计</span></span>}>
                            <Menu.Item key="2">设计原则</Menu.Item>
                            <Menu.Item key="3">设计规范</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>组件</span></span>}>
                            <Menu.Item key="4">组件介绍</Menu.Item>
                            <Menu.Item key="5">更改组件样式</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>动画</span></span>}>
                        </SubMenu>
                    </Menu>
                </Sider>
            <Layout>
                <Content style={{ margin: '30px 30px'}}>
                    {this.contentPage[this.state.content-1]}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    by ChenMing
                </Footer>
            </Layout>
            </Layout>

        );

    }
}

export default MainPage;
