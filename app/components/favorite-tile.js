import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service('favorite-questions'),

  actions: {
    remove(index) {
      this.get('favoriteQuestions').remove(index);
    }
  }
});
