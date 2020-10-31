import LandingPage from '@/pages/LandingPage'
import AppHomePage from '@/pages/AppHomePage'

export const routes = [
  { path: '/', component: LandingPage, name: 'landingPage' },
  { path: '/app', component: AppHomePage, name: 'appHomePage' },
]