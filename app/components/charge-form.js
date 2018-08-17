import Component from '@ember/component';
import { get, getProperties, set } from '@ember/object';
import { inject as service } from '@ember/service';

import { DEFAULT_CODE } from 'webapp/const/phones';
import { DEFAULT_ERROR } from 'webapp/const/errors';

export default Component.extend({
  i18n: service(),
  notify: service(),
  router: service(),

  classNames: ['charge-form'],

  charge: null,
  saveError: false,

  actions: {
    back() {
      const router = get(this, 'router');

      router.transitionTo('operators');
    },

    save() {
      set(this, 'saveError', false);

      const { charge, router } = getProperties(this, 'charge', 'router');

      charge.validate().then(() => {

        if (!get(charge, 'isValid')) {
          return;
        }

        const { i18n, notify } = getProperties(this, 'i18n', 'notify');

        charge.save().then(() => {
          notify.success(i18n.t('alerts.chargeSuccess'));

          router.transitionTo('operators');
        }).catch((e) => {
          notify.warning(i18n.t('alerts.chargeFail'));

          set(this, 'saveError', get(e, 'errors.firstObject'));
        });

      }).catch(() => {
        set(this, 'saveError', DEFAULT_ERROR);
      });
    },

    setPhone(phone) {
      const charge = get(this, 'charge');

      set(charge, 'phone', `${DEFAULT_CODE}${phone}`);
    }
  }
});
