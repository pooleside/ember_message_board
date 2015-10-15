import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        user: this.get('user') ? this.get('user') : "",
        text: this.get('text') ? this.get('text') : "",
        question: this.get('question') ? this.get('question') : "",
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    },
  }
});
