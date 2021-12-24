import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import ContentList from '../components/ContentList';
import RepoCard from '../components/RepoCard';
import PostCard from '../components/PostCard';

export default function Home({ repoData, postData }) {
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
          <div>
            <ContentList data={repoData} item={RepoCard} type="project" />
          </div>
        </article>

        <article className="posts">
          <h3>Posts</h3>
          <div>
            <ContentList data={postData} item={PostCard} type="post" />
          </div>
        </article>
      </main>

      <footer>
        <span>Nicolas Hevia @ 2021</span>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const repoResponse = await fetch('https://api.github.com/users/nhevia/repos');
  const repoData = await repoResponse.json();

  // TODO will need to combine different sources later (md files, dev.to, etc)
  // need standarized props and parse data into same object
  const postResponse = await fetch(
    'https://dev.to/api/articles?username=nicoh'
  );
  const postData = await postResponse.json();

  return {
    props: { repoData, postData },
  };
};
