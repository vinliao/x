import LandingPage from '@/pages/LandingPage'
import AppHomePage from '@/pages/AppHomePage'
import AppChooseMarketplacePage from '@/pages/AppChooseMarketplacePage'

export const routes = [
  { path: '/', component: LandingPage, name: 'landingPage' },
  { path: '/app', component: AppHomePage, name: 'appHomePage' },
  { path: '/app/choose', component: AppChooseMarketplacePage, name: 'appChooseMarketplacePage' },
]