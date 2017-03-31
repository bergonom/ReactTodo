var expect = require('expect');
var reducers = require('reducers');

// Deep Freeze makes sure we don't modify passed objects within reducers
// Reducers are supposed to be pure functions (which don't change passed objects)
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      var action = {
        searchText: 'dog',
        type: 'SET_SEARCH_TEXT'
      };

      var result = reducers.searchTextReducer(df(''), df(action));

      expect(result).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle completed items', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var result = reducers.showCompletedReducer(df(true), df(action));

      expect(result).toEqual(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        text: 'Walk the dog',
        type: 'ADD_TODO'
      };

      var result = reducers.todosReducer(df([]), df(action));

      expect(result.length).toEqual(1);
      expect(result[0].text).toEqual(action.text);
    });

    it('should toggle completed state of todo item', () => {
      var todos = [
        {
          id: 1,
          text: "wake up",
          completed: false,
          completedAt: undefined,
          createdAt: 1490978283
        }
      ];

      var action = {
        id: 1,
        type: 'TOGGLE_TODO'
      };

      var result = reducers.todosReducer(df(todos), df(action));

      expect(result[0].completed).toEqual(true);
      expect(result[0].completedAt).toExist()
    });
    // Define todos array with realistic todo items
    // generate action
    // call reduce action and confirm flip
  });
});
