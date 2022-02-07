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
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
        </Head>
        <Navbar/>
        <Component {...pageProps} />
    </>
    )
}