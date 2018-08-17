import {
  validateLength,
  validateNumber,
  validatePresence,
} from 'ember-changeset-validations/validators';
import RU_LOCALE from 'webapp/locales/ru/translations';

export default {
  operator: validatePresence({
    presence: true,
    description: RU_LOCALE['messages.operator']
  }),
  amount: [
    validateNumber({
      gte: 1,
      integer: true,
      lte: 1000,
      positive: true,
      description: RU_LOCALE['messages.charge.amount']
    }),
    validatePresence(true)
  ],
  phone: [
    validatePresence({
      presence: true,
      description: RU_LOCALE['messages.charge.phone']
    }),
    validateLength({
      is: 12
    })
  ]
};
