var expect = require('expect');
var reducers = require('reducers');
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
});
