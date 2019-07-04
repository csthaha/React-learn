import React, { Component } from 'react';
import { connect } from 'react-redux'
class TodoList extends Component {
  render() {
    const { todos } = this.props
    return (
      <div>
        {
          todos.map((todo, i) => {
            return (
              <li key={i}>{todo.text}</li>
            )
          })
        }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps)(TodoList);
