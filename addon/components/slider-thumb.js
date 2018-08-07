import { not } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/slider-thumb';

const RAIL_BORDER_WIDTH = 1;
const RAIL_WIDTH = 300;

const THUMB_WIDTH = 20;

const KEYCODES = {
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'pageUp': 33,
  'pageDown': 34,
  'end': 35,
  'home': 36
};

export default Component.extend({
  layout,
  tagName: 'img',
  classNames: ['thumb'],
  classNameBindings: ['focusClass:focus', 'max', 'min'],
  attributeBindings: [
    'currentValue:aria-valuenow',
    'label:aria-label',
    'maxValue:aria-valuemax',
    'minValue:aria-valuemin',
    'role',
    'src',
    'tabindex',
    'valueText:aria-valuetext'
  ],
  role: 'slider',
  tabindex: 0,
  min: false,
  max: not('min'),
  focusClass: false,
  valueText: computed('currentValue', function() {
    let _valueText = `${this.get('currentValue')}${this.get('units')}`;
    if(this.get('unitPrefix')){
      _valueText = `${this.get('units')}${this.get('currentValue')}`;
    }
    return _valueText;
  }),

  keyDown(event) {
    var flag = false;

    let currentVal = this.get('currentValue');
    switch (event.keyCode) {
      case KEYCODES.left:
      case KEYCODES.down:
        this.moveSliderTo(currentVal - 1);
        flag = true;
        break;

      case KEYCODES.right:
      case KEYCODES.up:
        this.moveSliderTo(currentVal + 1);
        flag = true;
        break;

      case KEYCODES.pageDown:
        this.moveSliderTo(currentVal - 10);
        flag = true;
        break;

      case KEYCODES.pageUp:
        this.moveSliderTo(currentVal + 10);
        flag = true;
        break;

      case KEYCODES.home:
        this.moveSliderTo(this.get('minValue'));
        flag = true;
        break;

      case KEYCODES.end:
        this.moveSliderTo(this.get('maxValue'));
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.preventDefault();
      event.stopPropagation();
    }
  },

  mouseDown(e) {

    let parentNode = e.target.parentNode;
    let minValue = this.get('minValue');
    let maxValue = this.get('maxValue');

    let handleMouseMove = (event) => {

      let diffX = event.pageX - parentNode.offsetLeft;
      let valueNow = minValue + parseInt(((maxValue - minValue) * diffX) / RAIL_WIDTH);
      this.moveSliderTo(valueNow);
      this.get('onSlide')(valueNow);

      event.preventDefault();
      event.stopPropagation();
    };

    var handleMouseUp = function() {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    // bind a mousemove event handler to move pointer
    document.addEventListener('mousemove', handleMouseMove);

    // bind a mouseup event handler to stop tracking mouse movements
    document.addEventListener('mouseup', handleMouseUp);

    e.preventDefault();
    e.stopPropagation();

    // Set focus to the clicked handle
    e.target.focus();
  },

  focus() {
    this.set('focusClass', true);
  },

  blur() {
    this.set('focusClass', false);
  },

  init() {
    this._super(...arguments);
  },

  didRender() {
    this.moveSliderTo(this.get('currentValue'));
  },

  moveSliderTo(value) {
    let minValue = this.get('minValue');
    let maxValue = this.get('maxValue');
    let railMin = this.get('railMin');
    let railMax = this.get('railMax');
    let _value = value;

    if (value < minValue) {
      _value = minValue;
    }

    if ( value > maxValue) {
      _value = maxValue;
    }

    this.set('currentValue', _value);

    // if(value < minValue || value > maxValue) {
    //   return;
    // }

    let pos = Math.round(((_value - railMin) * (RAIL_WIDTH - 2 * (THUMB_WIDTH - RAIL_BORDER_WIDTH))) / (railMax - railMin));
    let left = '';

    if (this.get('min')) {
      left = (pos + RAIL_BORDER_WIDTH) + 'px';
    } else {
      left = (pos + THUMB_WIDTH - RAIL_BORDER_WIDTH) + 'px';
    }

    this.$().css('left', left);

  }
});
