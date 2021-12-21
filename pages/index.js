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
          <p>Github: <a target="_blank" href="https://github.com/nhevia" rel="noreferrer"> github.com/nhevia</a></p>
          <p>Twitter: <a target="_blank" href="https://twitter.com/n_hevia" rel="noreferrer"> twitter.com/n_hevia</a></p>
        </div>
      </main>

      <footer>
        Nicolas Hevia @ 2021
      </footer>
    </div>
  )
}
