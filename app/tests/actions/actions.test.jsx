var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    };

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'thing to do'
    };

    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  })


  it('should generate toggle completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = {
      id: 1,
      type: 'TOGGLE_TODO'
    };

    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });

});
