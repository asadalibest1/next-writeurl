import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
// import './css/homePage.css'
// import './css/globals.css'
// import './css/editor.css'
// import './css/homePage.css';
// import './css/static.css';
// import './css/styles.css';
// import './css/Features.css';
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" precedence="default" crossOrigin="anonymous" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto" precedence="default" rel="stylesheet" />

                    <Script async src="https://api.writeurl.com/script.js" defer></Script>
                    <Script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" defer></Script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;