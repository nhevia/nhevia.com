import Head from 'next/head';
import RepoList from '../components/RepoList';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>My site</title>
        <meta name="description" content="my personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <article className="links">
          <p>
            Github:
            <a
              target="_blank"
              href="https://github.com/nhevia"
              rel="noreferrer"
            >
              github.com/nhevia
            </a>
          </p>
          <p>
            Twitter:
            <a
              target="_blank"
              href="https://twitter.com/n_hevia"
              rel="noreferrer"
            >
              twitter.com/n_hevia
            </a>
          </p>
        </article>

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
