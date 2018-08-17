import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import OPERATORS from 'webapp/mirage/fixtures/operators';

const SELECTORS = {
  chargeOperatorField: '#chargeOperatorField'
};

module('Acceptance | charge page', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visit charge page', async function(assert) {
    assert.expect(1);

    const operator = OPERATORS[0];

    await visit(`/operators/${operator.id}/pay`);

    assert.equal(currentURL(), `/operators/${operator.id}/pay`, 'visit charge page');
  });

  test('charge page init operator', async function(assert) {
    assert.expect(1);

    const operator = OPERATORS[0];

    await visit(`/operators/${operator.id}/pay`);

    assert.equal(this.element.querySelector(SELECTORS.chargeOperatorField).textContent.trim(), operator.name, 'actual operator name');
  });
});
