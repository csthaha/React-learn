import React from 'react';

class Child1 extends React.Component {
    state = {
        a: 1
    }
    /**
     * 更新 state ，
     * 根据返回值 {}
     * 必须return 一个东西 可以是null
     */
    /**
     * 15.xxx 做法 WillMount 中 props this.setState
     */
    // 16.xxx 做法
    static getDerivedStateFromProps(props,state) {
        console.log('getDerivedStateFromProps');
        // return null;
        return {
            ...props,
            ...state
        }
    }
    componentDidMount() {
        console.log('componentDidMount');

    }
    // 更新
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
        return 888;

    }
    componentDidUpdate(preProps,preState,a) {
        //15.xxx 时，a 为 undefined
        //16.xxx a === getSnapshotBeforeUpdate()
        //可以拿到上一次的 props，上一次的 state
        console.log('componentDidUpdate',a)
    }
    handleStateChange = () => {
        this.setState({
            a: 10
        })
    }
    render() {
        console.log('渲染时候 state', this.state)
        return (
            <div>
                <button onClick={ this.handleStateChange }>change state</button>
                Child1 Component
                { this.props.count }
            </div>
        )
    }
}

export default Child1