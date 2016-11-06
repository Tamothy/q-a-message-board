import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service('favorite-questions'),
  
  actions: {
    upVote(question) {
      this.sendAction('upVote', question);
    },

    downVote(question) {
      this.sendAction('downVote', question);
    },

    addFavoriteQuestion(question) {
      this.get('favoriteQuestions').addFavoriteQuestion(question);
    }
  }
});
