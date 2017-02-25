var expect = require('expect');
var TodoAPI = require('TodoAPI');
describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      // toEqual compares values of arrays, toBe checks for exact same array
      expect(actualTodos).toEqual(todos);
    })

    it('should not set invalid todos array', () => {
      var badTodos = { b: 'a' } ;
      TodoAPI.setTodos(badTodos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      // toEqual compares values of arrays, toBe checks for exact same array
      expect(actualTodos).toBe(null);
    })
  })

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    })

    it('should return todos for valid array in localstorage', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    })
  })
})
