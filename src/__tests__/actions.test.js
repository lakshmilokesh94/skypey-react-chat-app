import {setActiveUser,removeUser,sendMessage,setUserTyping} from "../actors/index";

describe('setActiveUser', function () {
    it('should have a type of "SET_ACTIVE_USER"', function() {
      expect(setActiveUser().type).toEqual('SET_ACTIVE_USER');
    });

    it('should return the passed payload of UserId"', function() {
        expect(setActiveUser('xhjh234').payload).toEqual('xhjh234');
      });
  });

  describe('removeUser', function () {
    it('should have a type of "REMOVE_USER"', function() {
      expect(removeUser().type).toEqual('REMOVE_USER');
    });

    it('should return the passed payload of UserId"', function() {
        expect(removeUser('xhjh234').payload).toEqual('xhjh234');
      });
  });


  describe('SEND_MESSAGE', function () {
    it('should have a type of "SEND_MESSAGE"', function() {
      expect(sendMessage().type).toEqual('SEND_MESSAGE');
    });

    it('should return the passed payload of UserId"', function() {
        expect(sendMessage('','xhjh234').activeUserId).toEqual('xhjh234');
      });

      it('should return the passed message"', function() {
        expect(sendMessage('message','xhjh234').message).toEqual('message');
      });
  });

  describe('setUserTyping', function () {
    it('should have a type of "SET_TYPING"', function() {
      expect(setUserTyping().type).toEqual('SET_TYPING');
    });

    it('should return the passed message"', function() {
        expect(setUserTyping('typing a message').message).toEqual('typing a message');
      });
  });


