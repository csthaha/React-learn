import React from 'react';

class Child extends React.Component {
    state = {
        childCount: 0
    }
    handleChildCountChange = () => {
        let { childCount } = this.state;
        childCount ++ ;
        this.setState({
            childCount
        })
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.interval)
    }
    componentWillMount() {
        console.log('componentwillMount')
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.interval = setInterval(() => {
            console.log('child setInterval');
        },1000)
    }
    // props 跟新的
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps,nextState) {
        //返回 true 更新 或 false
        //控制组件要不要更新
        // 组件性能优化的时候需要的 控制不必要的更新
        console.log('shouldComponentUpdate')
        if(nextProps.count !== this.props.count) {
            return true
        }
        return false
    }
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    render() {
        const { count } = this.props
        const { childCount } = this.state
        console.log('render')
        return (
            <div>
                <button onClick={this.handleChildCountChange}>Child Count Change</button>
                child Component 
                count: { count }
                childCount: { childCount }
            </div>
        )
    }
}

export default Child;