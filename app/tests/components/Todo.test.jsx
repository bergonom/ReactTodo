var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  })

  it('should call onToggle prop with id on click', () => {
    var todoId = 199
    var todoData = {
      id: todoId,
      text: 'this is some text text',
      completed: true
    }

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />)
    var $el = $(ReactDOM.findDOMNode(todo));

    // I think $el is a jQuery object but $el[0] is a dom element
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(todoId);
  })
})

// describe('formatSeconds', () => {
//   it('should format seconds', () => {
//
//   })
// })
