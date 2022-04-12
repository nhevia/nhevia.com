import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="My personal blog. Listing all my projects, technical posts and random stuff."
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400&display=swap"
            rel="preload"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400&display=swap"
            rel="stylesheet"
            type="text/css"
          ></link>
          <link rel="icon" href="/favicon.ico" />
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
