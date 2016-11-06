import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  addFavoriteQuestion(question) {
    this.get('favorites').pushObject(question);
  },

  remove(index) {
    this.get('favorites').removeAt(index);
  }
});
