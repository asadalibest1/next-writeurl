import Script from "next/script"

export default function Head() {
  return (
    <>
      {/* <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png" />
      <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
      <link rel="mask-icon" href="%PUBLIC_URL%/safari-pinned-tab.svg" color="#5bbad5" /> */}

      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="WriteURL is a free online text editor for writing. Collaborate in real-time, simple sharing, work offline, no registration, no password, always free." />
      <meta name="keywords" content="writeurl, text editor, word processor, collaborative, real-time, free, online, offline, share, write, read, publish, url, version history, writing" />


      <title>online text editor - WriteURL</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" precedence="default" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Roboto" precedence="default" rel="stylesheet" />

      <Script async src="https://api.writeurl.com/script.js" defer></Script>
      <Script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" defer></Script>

    </>
  )
}
