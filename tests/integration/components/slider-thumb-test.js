import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slider-thumb', 'Integration | Component | slider thumb', {
  integration: true
});

test('it renders an img element', function(assert) {
  this.render(hbs`{{slider-thumb}}`);
  assert.equal(this.$('img').length, 1);
});

test('it should have a thumb classname', function(assert) {
  this.render(hbs`{{slider-thumb}}`);
  assert.equal(this.$('.thumb').length, 1);
});

test('it should have a min classname', function(assert) {
  this.render(hbs`{{slider-thumb min=true}}`);
  assert.equal(this.$('.min').length, 1);
});

test('it should have a max classname', function(assert) {
  this.render(hbs`{{slider-thumb }}`);
  assert.equal(this.$('.max').length, 1);
});

test('it should have a role=slider', function(assert) {
  this.render(hbs`{{slider-thumb }}`);
  assert.equal(this.$('[role="slider"]').length, 1);
});

test('it should have a tabindex=0', function(assert) {
  this.render(hbs`{{slider-thumb }}`);
  assert.equal(this.$('[tabindex="0"]').length, 1);
});

test('it should have a aria-valuemin', function(assert) {
  this.render(hbs`{{slider-thumb minValue=100}}`);
  assert.equal(this.$('[aria-valuemin="100"]').length, 1);
});

test('it should have a aria-valuemax', function(assert) {
  this.render(hbs`{{slider-thumb maxValue=100}}`);
  assert.equal(this.$('[aria-valuemax="100"]').length, 1);
});

test('it should have a aria-valuenow', function(assert) {
  this.render(hbs`{{slider-thumb currentValue=100}}`);
  assert.equal(this.$('[aria-valuenow="100"]').length, 1);
});

test('it should have a aria-label', function(assert) {
  this.render(hbs`{{slider-thumb label="Hello World"}}`);
  assert.equal(this.$('[aria-label="Hello World"]').length, 1);
});

test('it should have a aria-valuetext', function(assert) {
  this.render(hbs`
{{aria-multi-thumb-slider
  title="Select a hotel between $0 and $500"
  label="Hotel Price"
  minValue=0
  maxValue=500
  currentMin=50
  currentMax=200
  units="$"
}}`);
  assert.equal(this.$('[aria-valuetext="$200"]').length, 1);
  assert.equal(this.$('[aria-valuetext="$50"]').length, 1);
});

test('it should have a aria-valuetext with unitPrefix set to false', function(assert) {
  this.render(hbs`
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
  assert.equal(this.$('[aria-valuetext="200$"]').length, 1);
  assert.equal(this.$('[aria-valuetext="50$"]').length, 1);
});
