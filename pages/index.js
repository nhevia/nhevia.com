import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My site</title>
        <meta name="description" content="my personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <p>Github: <a href="https://github.com/nhevia"> github.com/nhevia</a></p>
          <p>Twitter: <a href="https://twitter.com/n_hevia"> twitter.com/n_hevia</a></p>
        </div>
      </main>

      <footer>
        Nicolas Hevia @ 2021
      </footer>
    </div>
  )
}
