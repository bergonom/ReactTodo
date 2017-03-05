var React = require('react');
var Todo = require ('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos, onToggle} = this.props;
    var renderTodos = () => {
      if(todos.length) {
        return todos.map((todo) => {
          return <Todo key={todo.id} {...todo} onToggle={onToggle} />
        })
      } else {
        return (
          <p className="container__message">Nothing to do</p>
        )
      }
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
})

module.exports = TodoList;
