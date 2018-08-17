import RSVP from 'rsvp';
import Route from '@ember/routing/route';
import { get, setProperties } from '@ember/object';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';

const { hash } = RSVP;

export default Route.extend({
  store: service(),

  model(params) {
    const store = get(this, 'store');

    const operator = store.peekRecord('operator', params.operator_id);
    const operators = store.peekAll('operator');

    return hash({
      operators,
      charge: store.createRecord('charge', { operator })
    });
  },

  resetController(controller, isExiting) {
    const store = get(this, 'store');
    const charge = get(controller, 'charge');

    if (isExiting && isPresent(charge) && !isPresent(get(charge, 'id'))) {
      store.unloadRecord(charge);
    }
  },

  setupController(controller, model) {
    setProperties(controller, model);
  }
});
