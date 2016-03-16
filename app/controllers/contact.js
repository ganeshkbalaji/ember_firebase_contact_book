import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: true,

  emailAddress2: '',
  message: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageLongEnough: Ember.computed.gte('message.length', 5),

   isDisabled2: Ember.computed.and('isValid', 'isMessageLongEnough')


   actions: {
    saveInvitation2() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}')
    }
   }
});
