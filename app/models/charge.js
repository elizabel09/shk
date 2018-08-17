import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  amount: attr('number'),
  phone: attr('string'),

  operator: belongsTo('operator', { async: false })
});
