import React, { Component } from 'react';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less' 引入样式
import { Input, Button, List } from 'antd' // 引入需要的组件

import myStore from './store/store'

class Todolist extends Component {
    state = {
    }
    
    constructor(props) {
        super(props)
        // 通过 store.getState() 方法获取到 store 中的值
        console.log(myStore.getState())
        this.state = myStore.getState()
        this.addInputValue = this.addInputValue.bind(this)
        this.addItem = this.addItem.bind(this)
        this.del = this.del.bind(this)
        this.storeChage = this.storeChage.bind(this)
        myStore.subscribe(this.storeChage);
    }
    storeChage() {
        this.setState(myStore.getState())
    }
    addInputValue = (e) => {
        // console.log(e.target.value)
        const action = {
            type: 'add',
            list: e.target.value
        }
        myStore.dispatch(action)
    }
    addItem() {
        console.log('添加？')
        const action = {
            type: 'addlist'
        }
        myStore.dispatch(action)
    }
    del() {
        console.log('删除？')
        const action = {
            type: 'delete',
            
        }
        myStore.dispatch(action)
    }
    render() {
        // const data = [
        //     '这是一次redux的练习，外加ant',
        //     '祝您福如东海，寿比南山',
        //     '日子过得是真的快呀'
        // ]
        // const   del  = false
        return ( 
            <div style={ {margin: '30px'} }>
                {/* redux-todolist */}
                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={ {width: '250px'} } 
                        value={ this.state.inputValue }
                        onChange = { this.addInputValue }
                    />
                    <Button type="primary" style={ {marginLeft: '10px'} }
                        onClick = { this.addItem }
                    >添加</Button>
                </div>
                <div>
                    <List style={ {margin: '10px', width: '300px'} }
                        bordered //边框
                        dataSource = {this.state.list}
                        renderItem = { (item) => 
                            <List.Item 
                                style={{textDecoration: this.state.del ? 'line-through' : ''}}
                                onClick = { this.del }
                            >
                                {item}
                            </List.Item>
                        }
                    />
                </div>
            </div>    
        );
    }
}

export default Todolist;