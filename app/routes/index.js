import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      data: this.store.findAll('question'),
      question: {}
    }
  },

  actions: {
    createQuestion(info) {
      let newQuestion = this.store.createRecord('question', {
        title: info.title,
        body: info.body,
        author: info.author,

      });

      newQuestion.save();
    }
  }
});
