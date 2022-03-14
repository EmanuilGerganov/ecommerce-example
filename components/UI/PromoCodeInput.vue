<template>
  <div>
    <div v-if="voucherApplied" class="flex items-center justify-center">
      <div class="text-colors-green-500 text-xl font-medium text-center">
        Вашият промо код
        <div class="btn btn-primary">
          {{ checkout.voucherCode }}
          <div class="badge ml-2">-10%</div>
        </div>
        беше приложен успешно!
      </div>
    </div>
    <div v-else class="flex items-end gap-4">
      <div class="form-control">
        <input
          v-model="vaucherInput"
          type="text"
          placeholder="Промо Код"
          class="input input-bordered"
        />
      </div>
      <!-- <input class="input" :disabled="voucherApplied" v-model="voucher" /> -->
      <button data-cy="promoCode" class="btn" @click.stop="addPromoCode">Добави Промо Код</button>
    </div>
    <div v-if="Object.keys(voucherErrors).length" class="flex items-center justify-center">
      <div v-for="err in voucherErrors" :key="err.field">
        <p class="text-colors-red-600 text-xl font-medium text-center mt-4">
          {{ myMessage(err.message) }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'PromoCodeInput',
  data: () => ({
    discount: 0,
    disabled: false,
    orderPriceCurrency: 'BGN',
    vaucherInput: '',
  }),
  computed: {
    ...mapState({
      checkout: (state) => state.checkout.checkout,
      voucherErrors: (state) => state.checkout.voucherErrors,
      voucherApplied: (state) => state.checkout.voucherApplied,
    }),
  },

  methods: {
    myMessage(errMsg) {
      if (errMsg === 'Promo code is invalid') return 'Промо кода е невалиден!'
      else return errMsg
    },
    addPromoCode() {
      this.$emit('promo', this.vaucherInput)
      this.vaucherInput = ''
    },
  },
}
</script>
