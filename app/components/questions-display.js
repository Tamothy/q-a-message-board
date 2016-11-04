import Ember from 'ember';

export default Ember.Component.extend({
  voteCount: ['votes:desc'],
  rankQuestions: Ember.computed.sort('model.questions', 'voteCount'),

  actions: {
    upVote(question) {
      this.sendAction('upVote', question);
    },

    downVote(question) {
      this.sendAction('downVote', question);
    }
  }
});
