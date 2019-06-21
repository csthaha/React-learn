import React from 'react';
import Child from './child';
import Child1 from './Child1';
import Context from './Context'
import Context1 from './Context1'
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.objRef = new React.createRef();
  }
  state = {
    count: 0,
    showChild: true
  }
  handleToggleChild = () => {
    let { showChild } = this.state;
    this.setState({
      showChild: !showChild
    })
  }
  handleChildPropsChange = () => {
    let { count } = this.state;
    count++;
    this.setState({
      count
    })
  }
  componentDidMount() {
    this.refs.stringRef.innerHTML = 'new String Ref'
    this.methodRef.innerHTML = 'new method Ref'
    this.objRef.current.innerHTML = 'new Object Ref'
  }
  render() {
    const { count } = this.state;
    const { showChild } = this.state
    return (
      <div>

        <span ref="stringRef">react ref </span>
        <span ref={(ref) => this.methodRef = ref}>method ref</span>
        <span ref={this.objRef}>
          object ref
        </span>
        {/* innerHTML */}

        <div dangerouslySetInnerHTML={{
          __html: `<strong>strong</strong>`
        }}>

        </div>
        <button onClick={this.handleChildPropsChange}>child component props change</button>
        <button onClick={this.handleToggleChild}>toggle Child</button>
        {
          !showChild ? <Child count={count} /> : <Child1 count={count} />
        }

        {/* 小明 的消息 */}
        <Context>
        小明 <p> 姓名 </p> 
          19
          <p>年龄</p>
          男
          <p>
            性别
          </p>
        </Context>

        <Context1>
          <p>react 16.xxx 的 Context</p>
        </Context1>
      </div>
    )
  }
}

export default App;
