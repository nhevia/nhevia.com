import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import RepoList from '../components/RepoList';

export default function Home({ data }) {
  const [theme, setTheme] = useState('theme-light');

  return (
    <div id="layout" className={`layout ${theme}`}>
      <Head>
        <title>My site idk</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta
          name="description"
          content="My personal blog. Listing all my projects, technical posts and random stuff."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header theme={theme} setTheme={setTheme} />
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
          <div className="post-list">{/* <div>...todo...</div> */}</div>
        </article>
      </main>

      <footer>
        <span>Nicolas Hevia @ 2021</span>
      </footer>
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
