import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />

          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />

          <link
            rel="shortcut icon"
            href="https://res.cloudinary.com/dgdniqfi9/image/upload/v1550594730/nick-blog/moon-black.png"
          />

          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"
          />

          <link rel="manifest" href="/static/manifest.json" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>
        <body
          className="custom_class"
          style={{
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
            overflowX: 'hidden',
            fontFamily: 'Roboto',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
