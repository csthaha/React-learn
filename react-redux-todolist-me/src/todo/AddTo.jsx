import React, { Component } from 'react';
import { connect } from 'react-redux'
class AddTo extends Component {
  state = {}
  render() {
    const { dispatch } = this.props;
    console.log(this.props)
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          if (this.inputNode.value.trim()) {
            // 添加
            dispatch({
              type: 'ADD_TODO',
              text: this.inputNode.value.trim()
            })
          }
        }}>
          <input type="text" ref={node => this.inputNode = node} />
          <button type="submit">addToDo</button>
        </form>
      </div>
    );
  }
}
// 1. mapStatetoprops 将状态映射为 props
// 2. mapDispatchToprops 将dispatch 映射为 props
// export default connect((state) => {
//   console.log('connect:', state)
//   return { a: 1 }
// }, (dispatch) => {
//   return {
//     b: () => { console.log('b') }
//   }
// })(AddTo);

export default connect()(AddTo)
