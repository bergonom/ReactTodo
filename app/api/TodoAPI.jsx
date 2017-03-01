var uuid = require('node-uuid');
var $ = require('jQuery');

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }

    return todos;
  },

  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {
      console.log(e);
    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted status
    filteredTodos = todos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    if(searchText.length) {
      filteredTodos = filteredTodos.filter((todo) => {
        var text = todo.text.toLowerCase();
        return (text.indexOf(searchText) >= 0);
      });
    }

    // Sort todos by non-completed first
    filteredTodos.sort((a,b) => {
      if(!a.completed && b.completed) {
        return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      }
      return 0;
    })
    return filteredTodos;
  }
}
