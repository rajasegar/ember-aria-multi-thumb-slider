import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onSlide(value) {
      return value + " $";
    }
  }
});
