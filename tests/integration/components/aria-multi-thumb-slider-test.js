import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('aria-multi-thumb-slider', 'Integration | Component | aria multi thumb slider', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{aria-multi-thumb-slider}}`);
  assert.equal(this.$('.aria-widget-slider').length, 1);
});

test('it should have two labels', function(assert) {
  this.render(hbs`{{aria-multi-thumb-slider}}`);
  assert.equal(this.$('.rail-label').length, 2);
});

test('it should have a min label', function(assert) {
  this.render(hbs`{{aria-multi-thumb-slider}}`);
  assert.equal(this.$('.rail-label.min').length, 1);
});

test('it should have a max label', function(assert) {
  this.render(hbs`{{aria-multi-thumb-slider}}`);
  assert.equal(this.$('.rail-label.max').length, 1);
});

test('it should have a rail element', function(assert) {
  this.render(hbs`{{aria-multi-thumb-slider}}`);
  assert.equal(this.$('.rail').length, 1);
});

test('it should have two slider elements', function(assert) {
  this.render(hbs`{{aria-multi-thumb-slider}}`);
  assert.equal(this.$('img').length, 2);
});
