import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') >= 8) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-up trending-answers"></span>');
  }
}

export default Ember.Helper.helper(questionPopularity);
