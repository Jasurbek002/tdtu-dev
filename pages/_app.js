import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Context from '../components/context/context'
import Layout from '../layouts/layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <Context>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </Context>
}

export default MyApp
