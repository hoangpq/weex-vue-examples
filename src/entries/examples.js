import Examples from '../pages/Examples.vue'
import sharedMixin from '../shared/mixin'

// use shared mixins
Vue.mixin(sharedMixin)

Examples.el = '#root'
new Vue(Examples)
