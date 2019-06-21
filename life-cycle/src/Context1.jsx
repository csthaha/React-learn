import React from 'react'

// 返回一个对象
//下面这个对象上有两个属性
const ThemeContext = React.createContext({
    theme: 'aqua',
    toggleTheme: () => {

    }
})
class Context1 extends React.Component {
    constructor() {
        super();
        this.handleToggleBlue = () => {
            this.setState(state => {
                return {
                    theme: 'blue'
                }
            })
        }
        this.state = {
            theme: 'aqua',
            handleToggleBlue: this.handleToggleBlue
        }
    }
    // state = {}放外面  是 static(静态) 属性    则下面不能用this访问
    handleToggleTheme = () => {
        this.setState({
            theme: 'red'
        })
    }
    // handleToggleBlue = () => {
    //     this.setState({
    //         theme: 'blue'
    //     })
    // }
    render() {
        const msgs = ['msg1','msg2','msg3']
        return (
            <ThemeContext.Provider value={ this.state }> 
                <button onClick={this.handleToggleTheme}>切换主题</button>

                <button onClick={this.handleToggleBule}>切换蓝色主题</button>

                {
                    msgs.map((msg,i) => {
                        return <Message key={i} text={msg} />
                    })
                }
            </ThemeContext.Provider>
        )
    }
}

class Message extends React.Component {
    shouldComponentUpdate() {
        return false
    }
    render() {
        return (
            <div>
                { this.props.text }
                <MyButton>delete？</MyButton>
            </div>
        )
    }
}

class MyButton extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => {
                        return (
                            <button style={ {backgroundColor: value.theme} } onClick={ value.handleToggleBlue }>
                                { this.props.children }
                            </button>
                        )
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}

export default Context1