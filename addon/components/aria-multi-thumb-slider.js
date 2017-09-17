import Ember from 'ember';
import layout from '../templates/components/aria-multi-thumb-slider';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  layout,
  classNames: ['aria-widget-slider'],
  minLabel: computed('label', function() {
    return `Minimum ${this.get('label')}`;
  }),
  maxLabel: computed('label', function() {
    return `Maximum ${this.get('label')}`;
  }),
  unitPrefix: true,
  minThumb: 'images/min-arrow.png',
  maxThumb: 'images/max-arrow.png'
});
