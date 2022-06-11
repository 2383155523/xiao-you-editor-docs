import { VPTheme } from '@vue/theme'
import { h } from 'vue'
import Home from './components/Home.vue'

// uncomment to test CSS variables override
// import './override.css'

export default {
  ...VPTheme,
  Layout() {
    return h(VPTheme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.component('Home', Home)
  }
}
