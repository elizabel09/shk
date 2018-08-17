import Route from '@ember/routing/route';
import { setProperties } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model() {
    return this.modelFor('operators')
  },

  setupController(controller, model) {
    setProperties(controller, model);
  }
});
