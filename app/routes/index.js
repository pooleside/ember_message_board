import Ember from 'ember';

var questions = [{
  author: "Nevada Nelly",
  title: "Best places to gamble",
  body: "My favorite game is roulette.  Where can I find a place to play in Oregon?"
}, {

  author: "Bruce Williams",
  title: "Pizza places in Cannon Beach",
  body: "Where can I find deep-dish pizza on the coast?"

}, {

  author: "Gertie Small",
  title: "Lawn mower repair",
  body: "I have an old 1980 Honda mower.  Where can I get it serviced?"
}];

export default Ember.Route.extend({
  model () {
    return questions;
  }
});
