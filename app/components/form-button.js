import Component from '@ember/component';

export default Component.extend({
  attributeBindings: ['disabled'],
  classNameBindings: ['disabled:form-button--disabled'],
  classNames: ['form-button'],
  disabled: false,
  tagName: 'button',
  type: 'button',

  value: ''
});
