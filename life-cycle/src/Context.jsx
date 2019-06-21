import React from 'react';
import propTypes from 'prop-types'
class MyButton extends React.Component {
    render() {
        return (
            <button style={{backgroundColor: this.context.color}}>
                { this.props.children }  
                {/* this.props.children 就是父组件中 调用这个组件的内容 */}
            </button>
        )
    }
}
MyButton.contextTypes = {
    color: propTypes.string
}
class Message extends React.Component {
    // shouldComponentUpdate() {
    //     // return false
    // }
    render() {
        return (
            <div>
                { this.props.text }
                <MyButton>delete</MyButton>
            </div>
        )
    }
}
class Context extends React.Component {
    state = {
        msgs: ['msg1','msg2','msg3'],
        theme: 'purple'
    }
    getChildContext() {
        return { color: this.state.theme }
    }
    handleToggeleTheme = () => {
        this.setState({
            theme: 'red'
        })
    }
    handleToggeleThemeq = () => {
        this.setState({
            theme: 'black'
        })
    }
    render() {
        const msgNodes = this.state.msgs
        .map((msg,i) => {
            return (<Message text={msg} />)
        })
        return(
            <div>
                <button onClick={this.handleToggeleTheme}>切换主题</button>
                <button onClick={this.handleToggeleThemeq}>切换主题q</button>
                { this.props.children }
                { msgNodes }
            </div>
        );
    }
}
//给Context 添加属性
Context.childContextTypes = {
    color: propTypes.string
}
// react 提供了一个类型的 npm 包

// MyButton 和 Context 跨了层级
export default Context;