import Script from "next/script";
import Head from "next/head";
import './css/globals.css'
import './css/editor.css'
import './css/homePage.css';
import './css/static.css';
import './css/faqs.css';
import './css/styles.css';
import './css/Features.css';
import './css/Demo.css';
import './css/contentBox.css';
import './css/editNavbar.css';
import './css/footer.css';
import './css/Navbar.css';
import './css/WriteUrl.css';



export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" precedence="default" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Roboto" precedence="default" rel="stylesheet" />

                <Script async src="http://localhost:9000/script.js" defer></Script>
                <Script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" defer></Script>
            </Head>
            <Component {...pageProps} />
        </>);
}