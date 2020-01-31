import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slider thumb', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an img element', async function(assert) {
    await render(hbs`{{slider-thumb}}`);
    assert.equal(findAll('img').length, 1);
  });

  test('it should have a thumb classname', async function(assert) {
    await render(hbs`{{slider-thumb}}`);
    assert.equal(findAll('.thumb').length, 1);
  });

  test('it should have a min classname', async function(assert) {
    await render(hbs`{{slider-thumb min=true}}`);
    assert.equal(findAll('.min').length, 1);
  });

  test('it should have a max classname', async function(assert) {
    await render(hbs`{{slider-thumb }}`);
    assert.equal(findAll('.max').length, 1);
  });

  test('it should have a role=slider', async function(assert) {
    await render(hbs`{{slider-thumb }}`);
    assert.equal(findAll('[role="slider"]').length, 1);
  });

  test('it should have a tabindex=0', async function(assert) {
    await render(hbs`{{slider-thumb }}`);
    assert.equal(findAll('[tabindex="0"]').length, 1);
  });

  test('it should have a aria-valuemin', async function(assert) {
    await render(hbs`{{slider-thumb minValue=100}}`);
    assert.equal(findAll('[aria-valuemin="100"]').length, 1);
  });

  test('it should have a aria-valuemax', async function(assert) {
    await render(hbs`{{slider-thumb maxValue=100}}`);
    assert.equal(findAll('[aria-valuemax="100"]').length, 1);
  });

  test('it should have a aria-valuenow', async function(assert) {
    await render(hbs`{{slider-thumb currentValue=100}}`);
    assert.equal(findAll('[aria-valuenow="100"]').length, 1);
  });

  test('it should have a aria-label', async function(assert) {
    await render(hbs`{{slider-thumb label="Hello World"}}`);
    assert.equal(findAll('[aria-label="Hello World"]').length, 1);
  });

  test('it should have a aria-valuetext', async function(assert) {
    await render(hbs`
  {{aria-multi-thumb-slider
    title="Select a hotel between $0 and $500"
    label="Hotel Price"
    minValue=0
    maxValue=500
    currentMin=50
    currentMax=200
    units="$"
  }}`);
    assert.equal(findAll('[aria-valuetext="$200"]').length, 1);
    assert.equal(findAll('[aria-valuetext="$50"]').length, 1);
  });

  test('it should have a aria-valuetext with unitPrefix set to false', async function(assert) {
    await render(hbs`
  {{aria-multi-thumb-slider
    title="Select a hotel between $0 and $500"
    label="Hotel Price"
    minValue=0
    maxValue=500
    currentMin=50
    currentMax=200
    units="$"
    unitPrefix=false
  }}`);
    assert.equal(findAll('[aria-valuetext="200$"]').length, 1);
    assert.equal(findAll('[aria-valuetext="50$"]').length, 1);
  });
});
