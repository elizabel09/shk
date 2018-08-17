import RSVP from 'rsvp';
import Route from '@ember/routing/route';
import { get, setProperties } from '@ember/object';
import { inject as service } from '@ember/service';

const { hash } = RSVP;

export default Route.extend({
  store: service(),

  model() {
    return hash({
      operators: get(this, 'store').findAll('operator')
    });
  },

  setupController(controller, model) {
    setProperties(controller, model);
  }
});
