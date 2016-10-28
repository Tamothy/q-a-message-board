import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete question?')) {
        question.destroyRecord();
        this.transitionTo('index');
      }
    },

    editQuestionSave(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },

    saveAnswer3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var postAnswer = params.postAnswer;
      postAnswer.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return postAnswer.save();
      });
      this.transitionTo('postAnswer', params.postAnswer);
    }
  }
});
