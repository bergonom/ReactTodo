var React = require('react');

var AddTodo = React.createClass({
  onAddTodo: function(e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if(todoText.length) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
      alert('Please enter some text before submitting');
    }
  },

  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onAddTodo}>
          <input type="text" ref="todoText" placeholder="What do you need to do" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
})

module.exports = AddTodo;
