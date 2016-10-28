import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    editQuestion() {
      this.set('editQuestion', true);
    },

    editQuestionSave(question) {
      var params = {
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.set('editQuestion', false);
      this.sendAction('editQuestionSave', question, params);
    }
  }
});
