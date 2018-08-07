import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onSlide(value) {
      return value + " $";
    }
  }
});
