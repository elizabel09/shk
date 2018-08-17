import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['error:form-label--error'],
  classNames: ['form-label'],
  tagName: 'label',

  text: ''
});
