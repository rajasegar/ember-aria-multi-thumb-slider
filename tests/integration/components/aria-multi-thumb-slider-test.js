import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | aria multi thumb slider', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{aria-multi-thumb-slider}}`);
    assert.equal(findAll('.aria-widget-slider').length, 1);
  });

  test('it should have two labels', async function(assert) {
    await render(hbs`{{aria-multi-thumb-slider}}`);
    assert.equal(findAll('.rail-label').length, 2);
  });

  test('it should have a min label', async function(assert) {
    await render(hbs`{{aria-multi-thumb-slider}}`);
    assert.equal(findAll('.rail-label.min').length, 1);
  });

  test('it should have a max label', async function(assert) {
    await render(hbs`{{aria-multi-thumb-slider}}`);
    assert.equal(findAll('.rail-label.max').length, 1);
  });

  test('it should have a rail element', async function(assert) {
    await render(hbs`{{aria-multi-thumb-slider}}`);
    assert.equal(findAll('.rail').length, 1);
  });

  test('it should have two slider elements', async function(assert) {
    await render(hbs`{{aria-multi-thumb-slider}}`);
    assert.equal(findAll('img').length, 2);
  });
});
