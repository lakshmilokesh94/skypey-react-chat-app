import user from '../reducers/user';
import typing from '../reducers/typing';
import activeUser from '../reducers/activeUser';

  describe('typingReducer', function() {
    it('should return the initialState for typing property in store', function() {
      expect(typing(undefined, {})).toEqual('');
    });

    it('should return the message on action SET_TYPING', function() {
        expect(typing(undefined, {type:'SET_TYPING',message:'mymessage'})).toEqual('mymessage');
      });
  });

  describe('activeUserReducer', function() {
    it('should return the initialState for activeUser property in store', function() {
      expect(activeUser(undefined, {})).toEqual(null);
    });
  });
