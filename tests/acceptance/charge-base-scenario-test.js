import Service from '@ember/service';
import { module, test } from 'qunit';
import { click, visit, fillIn, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

import OPERATORS from 'webapp/mirage/fixtures/operators';

const SELECTORS = {
  chargeAmountField: '#chargeAmountField',
  chargePhoneField: '#chargePhoneField',
  chargeSubmitButton: '#chargeSubmitButton'
};


module('Acceptance | charge base scenario', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('charge base scenario', async function(assert) {

    const notifyMock = Service.extend({
      setTarget() {
        return null;
      },
      success() {
        assert.ok('success', 'success message was shown');
      }
    });

    this.owner.register('service:notify', notifyMock);

    assert.expect(3);

    const operator = OPERATORS[0];

    await visit('/');

    await click(this.element.querySelector(`#${operator.code}`));

    assert.equal(currentURL(), `/operators/${operator.id}/pay`, 'visit charge page');

    await fillIn(SELECTORS.chargePhoneField, '1234567890');
    await fillIn(SELECTORS.chargeAmountField, '500');

    await click(SELECTORS.chargeSubmitButton);

    assert.equal(currentURL(), '/operators', 'redirected to the root page');
  });
});
