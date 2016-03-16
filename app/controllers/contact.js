import Ember from 'ember';

export default Ember.Controller.extend({

  inputEmail:   '',
  inputMessage: '',

  isEmailValid:  Ember.computed.match('inputEmail', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('inputMessage.length', 5),

  isValid:    Ember.computed.and('isEmailValid', 'isMessageValid'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendEmail() {
      this.set('confirmationMessage', `Thank you for contacting us, we will get back in touch soon at ${this.get('inputEmail')}`);
      this.set('inputEmail', '');
      this.set('inputMessage', '');
    }
  }

});