import Home from '~/routes/Home.svelte'
import About from '~/routes/About.svelte'
import User from '~/routes/User.svelte'

export default {
  '/': Home,
  '/about': About,
  '/user':User
}