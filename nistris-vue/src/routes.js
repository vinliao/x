import LandingPage from '@/pages/LandingPage'
import AppHomePage from '@/pages/AppHomePage'
import AppChooseUploadPage from '@/pages/AppChooseUploadPage'
import AppUploadPage from '@/pages/AppUploadPage'

export const routes = [
  { path: '/', component: LandingPage, name: 'landingPage' },
  { path: '/app', component: AppHomePage, name: 'appHomePage' },
  { path: '/app/upload', component: AppChooseUploadPage, name: 'appChooseUploadPage' },
]