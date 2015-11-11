import Ember from 'ember';

const numbers = new Array(10000);
for (let i = 0; i < 10000; i++) {
  numbers[i] = `option-${i}`;
}

export default Ember.Controller.extend({
  numbers: numbers
});