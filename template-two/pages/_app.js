//? This file is the equivilent to App.js in React. Add anything global (rendered on each page) here.

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
// Custom SCSS
import '../styles/master.scss'
// NextJS Head component
import Head from 'next/head'
// Navbar
import Navbar from '../components/navbar'

export default function MyApp({ Component, pageProps }) {
    return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Navbar/>
        <Component {...pageProps} />
    </>
    )
}