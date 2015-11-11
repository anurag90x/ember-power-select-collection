import Ember from 'ember';
import layout from '../templates/components/power-select-collection';
import { defaultOptions } from 'ember-power-select/components/power-select';

export default Ember.Component.extend(defaultOptions, {
  layout: layout,

  optionsComponent: 'power-select-collection/options'
});
