import Ember from 'ember';

export default Ember.Component.extend({
  addQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addQuestion', true);
    },

    saveQuestion1() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('addQuestion', false),
      this.sendAction('saveQuestion2', params);
    }
  }
});
