import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('operators', { path: '/operators' }, function() {
    this.route('charge', { path: '/:operator_id/pay' });
  })
});

export default Router;
