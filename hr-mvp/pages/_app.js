import '../styles/globals.css'
import HRMVPProvider from '../context'

function MyApp({ Component, pageProps }) {
  return(<HRMVPProvider>
  <Component {...pageProps} />
  </HRMVPProvider>) 
}

export default MyApp
