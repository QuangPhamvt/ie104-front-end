import { RecoilRoot } from 'recoil'
import { Router } from './router'
import './i18n'

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  )
}

export default App
