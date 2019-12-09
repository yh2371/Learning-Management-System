import React from 'react'
import Head from 'next/head'

const Account = props => (
  <React.Fragment>
    <Head>
      <title>Babel Learning</title>
    </Head>
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
      .container {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding-left: 0;
        padding-right: 0;
        background-color: #FAF4EF;
      }
    `}</style>

    <main>
      <div className="container">{props.children}</div>
    </main>
  </React.Fragment>
)

export default Account
