import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  answers: DS.belongsTo('question', {async:true})
});
