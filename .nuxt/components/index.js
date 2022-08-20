export { default as ReusableModal } from '../../components/ReusableModal.vue'
export { default as Stamps } from '../../components/Stamps.vue'
export { default as YoutubeVideo } from '../../components/YoutubeVideo.vue'
export { default as UIBasicButton } from '../../components/UI/BasicButton.vue'
export { default as UIFeatureStamp } from '../../components/UI/FeatureStamp.vue'
export { default as UIHeaderLink } from '../../components/UI/HeaderLink.vue'
export { default as UIHeroHeader } from '../../components/UI/HeroHeader.vue'
export { default as UIHomeLogo } from '../../components/UI/HomeLogo.vue'
export { default as UIProductTabs } from '../../components/UI/ProductTabs.vue'
export { default as UIProductsView } from '../../components/UI/ProductsView.vue'
export { default as UIPromoCodeInput } from '../../components/UI/PromoCodeInput.vue'
export { default as UIStarRating } from '../../components/UI/StarRating.vue'
export { default as BlogCard } from '../../components/blog/Card.vue'
export { default as CartItems } from '../../components/cart/CartItems.vue'
export { default as CartEmptyCart } from '../../components/cart/EmptyCart.vue'
export { default as NavigationBCrumbs } from '../../components/navigation/BCrumbs.vue'
export { default as NavigationFooterNav } from '../../components/navigation/FooterNav.vue'
export { default as NavigationNavbar } from '../../components/navigation/Navbar.vue'
export { default as NavigationSidebar } from '../../components/navigation/Sidebar.vue'
export { default as ProductsCard } from '../../components/products/Card.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
