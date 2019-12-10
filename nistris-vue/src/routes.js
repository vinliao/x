import LandingPage from '@/pages/LandingPage'
import AppHomePage from '@/pages/AppHomePage'
import AppChooseUploadPage from '@/pages/AppChooseUploadPage'

export const routes = [
  { path: '/', component: LandingPage, name: 'landingPage' },
  { path: '/app', component: AppHomePage, name: 'appHomePage' },
  { path: '/app/upload', component: AppChooseUploadPage, name: 'appChooseUploadPage' },
]