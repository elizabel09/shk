import DS from 'ember-data';
import config from 'webapp/config/environment';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
  host: config.APP.api.host,
  namespace: config.APP.api.namespace
});
