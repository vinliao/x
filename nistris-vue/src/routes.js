import LandingPage from '@/pages/LandingPage'
import AppHomePage from '@/pages/AppHomePage'
import TestComponent from '@/components/TestComponent'

export const routes = [
  { path: '/', component: LandingPage, name: 'landingPage' },
  { path: '/app', component: AppHomePage, name: 'appHomePage' },
  { path: '/test', component: TestComponent, name: 'testComponent' },
]