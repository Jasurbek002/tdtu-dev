import React,{useContext, useEffect, useState,Suspense} from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Loading from '../components/loading/loading'
// import Search from '../components/search/search'



const Router = dynamic(() => import('../router/index'),{
  loading:() => <Loading />
})

import TostMessage from '../components/tost/tostMessage'

export default function Home() {
  
  return (
    <div>
    <Head>
        <title >ILMIY FAOLIYAT</title>
        <meta name="TSTU" content="Islom Karimov nomidagi Toshkent davlat texnika universiteti" />
    <meta name="author" content="Jasurbek Turg'unov" />
        <meta
      name="keywords"
      content="tdtu, tstu, tdtuuz,ilmiy faoliyat,ilmiy-tadqiqot,xalqaro reyting, science, tstuuz, Tdtu ilmiy bo'lmi, tdtu doktarantura,tdtu iqtidorli talabalar, tdtu ilmiy jurnallar"
    />
    <meta name="Resource-type" content="Document" />
    <meta property="og:site_name" content="Ilmiy faoliyat" />
    <meta property="og:title" content="Tdtu ilmiy bo'limi" />
    <meta property="og:description" content="Toshket davlat texnika universiteti ilmiy faoliyati" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://science-tstu.uz" />
    <link rel="canonical" href="/favicon.ico"  />
        <link rel="canonical" href="/favicon.ico" type='image/png'/>
      </Head>
      <main>
        <TostMessage />
        {/* <Loading /> */}
        <Suspense fallback={<Loading />} >
        <Router />
        </Suspense>
      

      </main>
    </div>
  )
}
