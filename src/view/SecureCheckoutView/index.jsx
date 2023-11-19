import { HeaderSecureCheckoutComponent } from './components'
import { ContentSecureCheckoutComponent } from './components/ContentSecureCheckoutComponent'

const SecureCheckoutView = () => {
  return (
    <main className='container mx-auto mt-28 space-y-12'>
      <HeaderSecureCheckoutComponent />
      <ContentSecureCheckoutComponent />
    </main>
  )
}
export default SecureCheckoutView
