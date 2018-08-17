import { module, test } from 'qunit';
import { click, visit, fillIn, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

import OPERATORS from 'webapp/mirage/fixtures/operators';

const SELECTORS = {
  chargeAmountField: '#chargeAmountField',
  chargePhoneField: '#chargePhoneField',
  chargeSubmitButton: '#chargeSubmitButton',

  chargeAmountFieldErrorLabel: '.form-label--error > #chargePhoneField',
  chargePhoneFieldErrorLabel: '.form-label--error > #chargePhoneField'
};


module('Acceptance | charge fail scenarios', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('charge empty fields scenario', async function(assert) {
    assert.expect(4);

    const operator = OPERATORS[0];

    await visit('/');

    await click(this.element.querySelector(`#${operator.code}`));

    assert.equal(currentURL(), `/operators/${operator.id}/pay`, 'visit charge page');

    await fillIn(SELECTORS.chargePhoneField, '');
    await fillIn(SELECTORS.chargeAmountField, '');

    await click(SELECTORS.chargeSubmitButton);

    assert.ok(this.element.querySelector(SELECTORS.chargePhoneFieldErrorLabel), 'phone input highlighted as error');
    assert.ok(this.element.querySelector(SELECTORS.chargeAmountFieldErrorLabel), 'amount input highlighted as error');

    assert.equal(currentURL(), `/operators/${operator.id}/pay`, 'stayed on the charge page');
  });
});
