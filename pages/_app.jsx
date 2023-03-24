import '../styles/globals.css'
//import type { AppProps } from 'next/app'
import Navbar from './components/navbar'


function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  
   <Component {...pageProps} />
   </>
}

export default MyApp
