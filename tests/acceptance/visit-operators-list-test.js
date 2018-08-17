import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import OPERATORS from 'webapp/mirage/fixtures/operators';

const SELECTORS = {
  operatorItem: '.operators-list__item'
};

module('Acceptance | operators list', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visit operators list', async function(assert) {
    assert.expect(2);

    await visit('/');

    assert.equal(currentURL(), '/operators', 'visit root page');

    assert.equal(this.element.querySelectorAll(SELECTORS.operatorItem).length, OPERATORS.length, 'actual operators count');
  });

  test('go to charge page from operators list', async function(assert) {
    assert.expect(1);

    await visit('/');

    const operator = OPERATORS[0];

    await click(this.element.querySelector(`#${operator.code}`));

    assert.equal(currentURL(), `/operators/${operator.id}/pay`, 'visit charge page');
  });
});
