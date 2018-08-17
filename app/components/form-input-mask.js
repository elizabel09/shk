import OneWayInputMaskComponent from 'ember-inputmask/components/one-way-input-mask';

export default OneWayInputMaskComponent.extend({
  attributeBindings: ['disabled', 'type', '_value:value'],
  classNameBindings: ['disabled:form-input-mask--disabled'],

  classNames: ['form-input-mask']
});

