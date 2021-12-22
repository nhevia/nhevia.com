import Head from 'next/head';
import Header from '../components/Header';
import RepoList from '../components/RepoList';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Nico&apos;s Blog</title>
        <meta
          name="description"
          content="My personal blog. Listing all my projects, technical posts and random stuff."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>
      <main>
        <article className="projects">
          <h3>Github projects</h3>
          <div className="repo-list">
            <RepoList repos={data} />
          </div>
        </article>

        <article className="posts">
          <h3>Posts</h3>
          <p>...</p>
        </article>
      </main>

      <footer>Nicolas Hevia @ 2021</footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/nhevia/repos');
  const data = await response.json();

  return {
    props: { data },
  };
};
