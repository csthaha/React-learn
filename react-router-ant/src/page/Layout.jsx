import React from 'react'
import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Icon, Badge } from 'antd';
import {Route, Link } from 'react-router-dom' 
import 'antd/dist/antd.css';
import Table from './table/index'
const { Header, Footer, Sider, Content } = Layout;

// function Table() {
//     return (
//         <div>table</div>
//     )
// }

function Label() {
    return (
        <div>label</div>
    )
}

function DropMenu() {
    return (
        <Menu>
            <Menu.Item>
                <a href="www.baidu.com">item1</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#">item2</a>
            </Menu.Item>
        </Menu>
    )
}

function Post(props) {
    const { match } = props;
    return (
        <div>
            id: {match.params.id}
        </div>
    )
}

class PageLayout extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>
                    <Row>
                        <Col span = {10}>
                            React + Antd 实践
                        </Col>
                        <Col span = {8}>
                            <Input placeholder='你想要的全都有......'></Input>
                        </Col>
                        <Col span = {6}>
                            <Avatar style={{backgroundColor: '#666', marginRight: 20,
                                    icon:'user'}}>
                                        
                            </Avatar>
                            <Dropdown overlay = {DropMenu}>
                                <span>Hi, 
                                    <Icon type="down"></Icon>
                                </span>
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Layout>
                    {/* 左 */}
                    <Sider>
                        <Menu style={{width: 256, height: '90vh', overflow: 'auto', 
                              minWidth: 256}} defaultOpenKeys={['sub1']} mode="inline"
                        >
                            <Menu.SubMenu key='sub1' 
                                          title={ <span><Icon type="smile-0"></Icon>部分UI组件实战</span> }
                            >
                                <Menu.Item key='sub1_1'>
                                    {/* table */}
                                    <Link to={{ pathname: '/table', search:'?type=all&a=1'}}>表格</Link>
                                </Menu.Item>
                                <Menu.Item key='sub1_2'>
                                    {/* table */}
                                    <Link to={'label'}>标签页</Link>
                                </Menu.Item>
                                <Menu.Item key='sub1_3'>
                                    {/* table */}
                                    <Link to='/post/abcdefg'>文章详情</Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Sider>
                    {/* 右 */}
                    <Content style={{ marginLeft: '5%'}}>
                        { this.props.children }
                        <Route path="/table" component = {Table}></Route>
                        <Route path="/label" component = {Label}></Route>
                        <Route path="/post/:id" component = {Post}></Route>
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}

export default PageLayout