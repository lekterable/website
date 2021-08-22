import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssString, globalStyles } from '../css'

class Document extends NextDocument {
  render() {
    globalStyles()

    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap"
            rel="stylesheet"
          />
          <style dangerouslySetInnerHTML={{ __html: getCssString() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
