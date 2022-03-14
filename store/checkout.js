
export const state = () => ({
  additionalData: null,
  shipmentPrice: 0,
  shippingProvider: 'Еконт',
  providerMethod: 'До Офис на Еконт',
  cartItems: null,
  lines: null,
  shipmentTrackingCode: '',
  totalPrice: {},
  subtotalPrice: {},
  createCheckoutResponse: null,
  checkout: { id: 1 },

  // selectedCountry: false, // 'България',
  selectedCity: false,
  selectedOffice: false,
  selectedQuarter: false,
  selectedStreet: false,
  selectedStreetNumber: null,
  selectedOther: '',
  addCheckoutInvoice: false,
  billingAddress: {
    firstName: '',
    lastName: '',
    city: '',
    phone: '',
    streetAddress1: '',
    country: 'BG',
    countryArea: 'BG',
  },
  // invoiceCompanyBillingAddress: {
  //   country: 'България',
  //   companyName: '',
  //   mol: '',
  //   bulstat: '',
  //   dds: '',
  //   city: '',
  //   address: '',
  //   phone: '',
  // },
  addressData: false,
  fullAddress: false,
  paymentResult: { id: 1 },
  shipping: { id: 1 },
  checkoutStep: 1,
  status: { id: 1 },
  officeName: false,
  totalShipmentPrice: false,
  expectedDeliveryDate: false,
  orderPhone: null,
  orderName: null,
  orderEmail: null,
  loadedAddressId: null,
  voucher: 0,
  voucherApplied: false,
  voucherErrors: [],
  // invoiceType: 'Физическо лице',
  checkoutError: false,
  loaderNextStep: false,
  checkingOut: false,
})

export const mutations = {
  SET_CHECKING_OUT(state, payload) {
    state.checkingOut = payload
  },
  SET_ORDER_SHIPPMENT_PRICE(state, payload) {
    state.shipmentPrice = payload
  },
  SET_ADDITIONAL_DATA(state, payload) {
    state.additionalData = payload
  },
  SET_SHIPPING_PROVIDER_METHOD(state, payload) {
    state.providerMethod = payload
  },
  SET_SHIPPING_PROVIDER(state, payload) {
    state.shippingProvider = payload
  },
  CHANGE_STEP(state, payload) {
    state.checkoutStep = payload
    window.scrollTo({ top: 0 })
  },
  CREATE_CHECKOUT(state, payload) {
    state.checkout = payload
  },
  SELECT_PAYMENT(state, payload) {
    state.paymentResult = payload
  },
  SET_SHIPMENT_TRACKING_CODE(state, payload) {
    state.shipmentTrackingCode = payload
  },
  SET_CREATE_CHECKOUT_RESPONSE(state, payload) {
    state.createCheckoutResponse = payload
  },

  COMPLETE_CHECKOUT(state, payload) {
    state.status = payload
  },
  SET_CART_ITEMS(state, payload) {
    state.lines = payload
  },

  // SET_SELECTED_COUNTRY(state, payload) {
  //   state.selectedCountry = payload
  // },
  SET_SELECTED_CITY(state, payload) {
    state.selectedCity = payload
  },
  SET_SELECTED_OFFICE(state, payload) {
    state.selectedOffice = payload
  },
  SET_SELECTED_QUARTER(state, payload) {
    state.selectedQuarter = payload
  },
  SET_SELECTED_STREET(state, payload) {
    state.selectedStreet = payload
  },
  SET_SELECTED_STREET_NUMBER(state, payload) {
    state.selectedStreetNumber = payload
  },
  SET_FULL_ADDRESS(state, payload) {
    state.fullAddress = payload
  },
  SET_ADDRESS_DATA(state, payload) {
    state.addressData = payload
  },
  SET_SELECTED_OTHER(state, payload) {
    state.selectedOther = payload
  },
  SET_ORDER_PHONE(state, payload) {
    state.orderPhone = payload
  },
  SET_ORDER_NAME(state, payload) {
    state.orderName = payload
  },
  SET_LOADED_ADDRESS(state, payload) {
    state.loadedAddressId = payload
  },
  SET_VOUCHER(state, payload) {
    state.voucher = payload
  },
  SET_VOUCHER_ERR(state, payload) {
    state.voucherErrors = payload
  },
  SET_VOUCHER_APPLIED(state, payload) {
    state.voucherApplied = payload
  },
  SET_PRICES(state, payload) {
    console.log(payload)
    // state.checkout.totalPrice = payload.totalPrice
    // state.checkout.subtotalPrice = payload.subtotalPrice
  },
  // SET_CHECKOUT_TOTAL_PRICE(state, payload) {
  //   state.checkout.totalPrice = payload
  // },
  SET_BILLING_ADDRESS_PROP(state, payload) {
    Object.assign(state.billingAddress, payload)
  },
  SET_ADD_CHECKOUT_INVOICE(state) {
    state.addCheckoutInvoice = !state.addCheckoutInvoice
  },
  // SET_INVOICE_TYPE(state, payload) {
  //   state.invoiceType = payload
  // },

  // SET_INVOICE_COMPANY_ADDRESS(state, payload) {
  //   state.invoiceCompanyBillingAddress = payload
  // },
  SET_ORDER_EMAIL(state, payload) {
    state.orderEmail = payload
  },
  SET_CHECKOUT_ERROR(state, payload) {
    state.checkoutError = payload
    state.loaderNextStep = false
  },
  SET_STEP_LOADER(state, payload) {
    state.loaderNextStep = payload
  },
}
export const actions = {
  async actFinalizeOrder({ dispatch, commit, rootState }, payload) {
    // await dispatch(payload.providerStore + '/actLabelCalculate', payload.label, { root: true })
    await dispatch('actSelectPayment', payload.selectPayment)
    await dispatch('actCompleteCheckout', payload)
    await commit('CHANGE_STEP', 3)
  },
  // actResetSelectedData({ commit }) {
  //   commit('SET_SELECTED_COUNTRY', null)
  //   commit('SET_SELECTED_CITY', null)
  //   commit('SET_SELECTED_OFFICE', null)
  //   commit('SET_SELECTED_QUARTER', null)
  //   commit('SET_SELECTED_STREET', null)
  //   commit('SET_SELECTED_STREET_NUMBER', '')
  //   commit('SET_SELECTED_OTHER', '')
  //   commit('SET_VOUCHER', 0)
  //   commit('SET_VOUCHER_APPLIED', false)
  //   commit('SET_VOUCHER_ERR', [])
  // },
  actFetchCheckout({ commit }, token) {
    const query = gql`
      query ($token: UUID!) {
        checkout(token: $token) {
          id
          token
          lines {
            variant {
              sku
              product {
                thumbnail {
                  url
                }
                name
                slug
              }
            }
            quantity
            totalPrice {
              gross {
                amount
              }
            }
          }
          voucherCode
          subtotalPrice {
            gross {
              amount
              currency
            }
          }
          totalPrice {
            gross {
              amount
              currency
            }
          }
        }
      }
    `
    const variables = {
      token,
    }

    return this.$graphql.default.request(query, variables).then((response) => {
      // if (response.checkout.errors.length) {
      //   commit('SET_CHECKOUT_ERROR', response.checkout.errors)
      // } else {
      //   commit('SET_CHECKOUT_ERROR', false)
      const { checkout } = response
      if (checkout.voucherCode) {
        commit('SET_VOUCHER_APPLIED', true)
        // commit('SET_CHECKOUT_TOTAL_PRICE', subtotalPrice)
      }

      commit('CREATE_CHECKOUT', checkout)
      return checkout
      //   return checkout
      // }
    })
  },
  actCreateCheckout({ commit }, variables) {
    const query = gql`
      mutation checkoutCreate(
        $channel: String!
        $email: String
        $lines: [CheckoutLineInput]!
        $shippingAddress: AddressInput
        $billingAddress: AddressInput
      ) {
        checkoutCreate(
          input: {
            channel: $channel
            email: $email
            lines: $lines
            shippingAddress: $shippingAddress
            billingAddress: $billingAddress
          }
        ) {
          checkout {
            id
            token
            lines {
              quantity
            }
            voucherCode
            subtotalPrice {
              gross {
                amount
                currency
              }
            }
            totalPrice {
              gross {
                amount
                currency
              }
            }
          }
          errors {
            message
            field
            variants
            code
          }
        }
      }
    `

    return this.$graphql.default.request(query, variables).then((response) => {
      if (response.checkoutCreate.errors.length) {
        commit('SET_CHECKOUT_ERROR', response.checkoutCreate.errors[0].message)
        return 'ERROR'
      } else {
        commit('SET_CHECKOUT_ERROR', false)
        const { checkout } = response.checkoutCreate
        commit('CREATE_CHECKOUT', checkout)
        return checkout
      }
    })
  },
  actSelectShipping({ commit, state }, payload) {
    const variables = payload || {
      checkoutId: state.checkout.id,
      shippingMethodId: 'U2hpcHBpbmdNZXRob2Q6MTI=',
    }
    const query = gql`
      mutation selectShipping($checkoutId: ID, $shippingMethodId: ID!) {
        checkoutShippingMethodUpdate(checkoutId: $checkoutId, shippingMethodId: $shippingMethodId) {
          checkout {
            id
            voucherCode
            shippingMethod {
              name
            }
            lines {
              variant {
                sku
                product {
                  thumbnail {
                    url
                  }
                  name
                  slug
                }
              }
              quantity
              totalPrice {
                gross {
                  amount
                }
              }
            }
            totalPrice {
              gross {
                amount
                currency
              }
            }
          }
          errors {
            field
            message
          }
        }
      }
    `
    return this.$graphql.default.request(query, variables).then((response) => {
      if (response.checkoutShippingMethodUpdate.errors.length) {
        commit('SET_CHECKOUT_ERROR', response.errors)
        return response.errors
      } else {
        commit('SET_CHECKOUT_ERROR', false)
        return response
      }
    })
  },
  actSelectPayment({ commit }, variables) {
    const query = gql`
      mutation selectPayment($amount: PositiveDecimal, $checkoutId: ID!) {
        checkoutPaymentCreate(
          input: { amount: $amount, gateway: "mirumee.payments.dummy", token: "4111111111111112" }
          checkoutId: $checkoutId
        ) {
          payment {
            id
            gateway
            token
          }
          errors {
            field
            message
          }
        }
      }
    `
    return this.$graphql.default.request(query, variables).then((response) => {
      commit('SELECT_PAYMENT', response.checkoutPaymentCreate)
    })
  },
  actCompleteCheckout(context, variables) {
    // const shipmentNumber =
    //   context.rootState[payload.providerStore].label[
    //     payload.providerStore === 'econt' ? 'shipmentNumber' : 'id'
    //   ]
    // let labelUrl = ''
    // if (payload.providerStore === 'speedy') {
    //   const printRequest = await this.$http.post(this.$config.apiSpeedy, {
    //     data: {
    //       paperSize: 'A4',
    //       parcels: [
    //         {
    //           parcelId: {
    //             id: shipmentNumber,
    //           },
    //         },
    //       ],
    //       additionalWaybillSenderCopy: 'NONE',
    //     },
    //     url: '/print',
    //   })
    //   labelUrl = this.$config.apiSpeedy + printRequest.data.url
    // } else if (payload.providerStore === 'econt') {
    //   labelUrl = context.rootState.econt.label.pdfURL
    // }

    const query = gql`
      mutation completeCheckout($checkoutId: ID!) {
        checkoutComplete(checkoutId: $checkoutId) {
          order {
            id
            status
          }
          errors {
            field
            message
          }
        }
      }
    `

    return this.$graphql.default.request(query, variables).then((response) => {
      const orderStatus = response.checkoutComplete

      context.commit('COMPLETE_CHECKOUT', orderStatus)
      return orderStatus
    })
    // const meta = {
    //   id: orderStatus.order.id,
    //   input: [
    //     // {
    //     //   key: 'shipmentNumber',
    //     //   value: shipmentNumber,
    //     // },
    //     // {
    //     //   key: 'labelUrl',
    //     //   value: labelUrl,
    //     // },
    //     {
    //       key: 'voucher',
    //       value: context.state.voucher,
    //     },
    //     {
    //       key: 'shippingProvider',
    //       value: context.state.shippingProvider,
    //     },
    //     {
    //       key: 'shippingProviderMethod',
    //       value: context.state.providerMethod,
    //     },
    //   ],
    //   keysToDelete: [],
    // }
    // if (context.state.invoiceCompanyBillingAddress) {
    //   meta.input.push({
    //     key: 'invoice',
    //     value: context.state.invoiceCompanyBillingAddress,
    //   })
    // }

    // const queryMeta = gql`
    //   fragment MetadataItem on MetadataItem {
    //     key
    //     value
    //     __typename
    //   }

    //   fragment MetadataFragment on ObjectWithMetadata {
    //     metadata {
    //       ...MetadataItem
    //       __typename
    //     }
    //     __typename
    //   }

    //   fragment MetadataErrorFragment on MetadataError {
    //     code
    //     field
    //     __typename
    //   }

    //   mutation UpdateMetadata($id: ID!, $input: [MetadataInput!]!, $keysToDelete: [String!]!) {
    //     updateMetadata(id: $id, input: $input) {
    //       errors {
    //         ...MetadataErrorFragment
    //         __typename
    //       }
    //       __typename
    //     }
    //     deleteMetadata(id: $id, keys: $keysToDelete) {
    //       errors {
    //         ...MetadataErrorFragment
    //         __typename
    //       }
    //       item {
    //         ...MetadataFragment
    //         ... on Node {
    //           id
    //           __typename
    //         }
    //         __typename
    //       }
    //       __typename
    //     }
    //   }
    // `

    // await this.$graphql.default.request(queryMeta, meta)
  },
  actResetCheckout({ commit }, payload) {
    this.checkout = { id: 1 }
  },
  async actAddPromoCode({ commit, state }, payload) {
    const variables = payload
    const query = gql`
      mutation checkoutAddPromoCode($checkoutId: ID!, $promoCode: String!) {
        checkoutAddPromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
          checkout {
            id
            token
            voucherCode
            shippingPrice {
              gross {
                amount
              }
            }
            shippingMethod {
              name
            }
            lines {
              quantity
              id
              variant {
                sku
                name
              }
            }
            voucherCode
            subtotalPrice {
              gross {
                amount
              }
            }
            totalPrice {
              gross {
                amount
              }
            }
          }
          errors {
            field
            message
            code
          }
        }
      }
    `
    const pCodeApply = await this.$graphql.default.request(query, variables)

    // 'Cena: ' +
    // ' Sega: ' + pCodeApply.checkoutAddPromoCode.checkout.totalPrice.gross.amount
    // ' Namalena s kod:' + pCodeApply.checkoutAddPromoCode.checkout.voucherCode
    if (pCodeApply.checkoutAddPromoCode.errors)
      commit('SET_VOUCHER_ERR', pCodeApply.checkoutAddPromoCode.errors)

    // const { subtotalPrice, totalPrice } = podeApply.checkoutAddPromoCode.checkout

    // commit('SET_PRICES', pCodeApply.checkoutAddPromoCode.checkout )
    // commit('SET_VOUCHER_APPLIED', true)

    // commit('SET_CHECKOUT_TOTAL_PRICE', subtotalPrice)
    return pCodeApply.checkoutAddPromoCode
  },
}
