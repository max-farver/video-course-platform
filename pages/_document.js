import React from "react"
import NextDocument, { Head, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Alegreya+SC:ital,wght@0,400;0,700;1,400&family=Cabin:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
