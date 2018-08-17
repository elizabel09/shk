import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const SELECTORS = {
  chargeAmountField: '#chargeAmountField',
  chargeOperatorField: '#chargeOperatorField',
  chargePhoneField: '#chargePhoneField',
  chargeBackButton: '#chargeBackButton',
  chargeSubmitButton: '#chargeSubmitButton',
};

module('Integration | Component | charge-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(5);

    await render(hbs`
      {{#charge-form}}
        charge-form text
      {{/charge-form}}
    `);

    assert.equal(this.element.querySelectorAll(SELECTORS.chargeOperatorField).length, 1, 'charge-form contains one operator field');
    assert.equal(this.element.querySelectorAll(SELECTORS.chargePhoneField).length, 1, 'charge-form contains one phone field');
    assert.equal(this.element.querySelectorAll(SELECTORS.chargeAmountField).length, 1, 'charge-form contains one amount field');

    assert.equal(this.element.querySelectorAll(SELECTORS.chargeBackButton).length, 1, 'charge-form contains one back button');
    assert.equal(this.element.querySelectorAll(SELECTORS.chargeSubmitButton).length, 1, 'charge-form contains one submit button');
  });
});
