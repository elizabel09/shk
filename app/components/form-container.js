import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  attributeBindings: ['autocomplete', 'novalidate'],
  autocomplete: 'off',
  classNames: ['form-container'],
  tagName: 'form',

  submitTask: null,

  submit(event) {
    event.preventDefault();

    const submitAction = get(this, 'submitAction');

    submitAction();
  }
});
