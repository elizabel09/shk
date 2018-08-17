import Response from 'ember-cli-mirage/response';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function() {
  this.logging = true;
  this.namespace = '';
  this.timing = 400;
  this.urlPrefix = '';

  this.namespace = 'api';

  this.resource('charges');
  this.resource('operators');

  this.post('/charges', function({ charges }) {
    const attrs = this.normalizedRequestAttrs();

    // В 60% случаев запрос вернет ошибку
    const failCase = getRandomInt(1, 100);

    if (failCase > 40) {
      return new Response(500, {}, {errors: ['Извините, сервер времено недоступен']});
    }

    return charges.create(attrs);
  });
}

export function testConfig() {
  this.logging = true;
  this.namespace = '';
  this.timing = 400;
  this.urlPrefix = '';

  this.namespace = 'api';

  this.resource('charges');
  this.resource('operators');

  this.post('/charges', function({ charges }) {
    const attrs = this.normalizedRequestAttrs();

    return charges.create(attrs);
  });
}
