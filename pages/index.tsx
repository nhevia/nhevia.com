import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import ContentList from '../components/ContentList';
import RepoCard from '../components/RepoCard';
import PostCard from '../components/PostCard';
import fs from 'fs';
import { Repository, Post } from '../types/types';

interface AppProps {
  repoData: Array<Repository>;
  postData: Array<Post>;
}

export default function Home({ repoData, postData }: AppProps) {
  const [theme, setTheme] = useState('theme-light');

  return (
    <div id="layout" className={`layout ${theme}`}>
      <Head>
        <title>Nico Hevia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="My personal blog. Listing all my projects, technical posts and random stuff."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header theme={theme} setTheme={setTheme} />

      <main>
        <article className="projects">
          <h3>Github projects</h3>
          <div>
            <ContentList
              data={repoData.sort((a: Repository, b: Repository) => {
                if (typeof a.stargazers_count === 'undefined')
                  a.stargazers_count = 0;

                if (typeof b.stargazers_count === 'undefined')
                  b.stargazers_count = 0;

                return a.stargazers_count > b.stargazers_count ? -1 : 1;
              })}
              item={RepoCard}
              type="project"
            />
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
        <span>Nicolas Hevia @ 2022</span>
      </footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  // TODO remove local data later, just to reduce load in dev for now
  let repoData, postData;
  if (process.env.NODE_ENV === 'development') {
    repoData = JSON.parse(fs.readFileSync('__mocks__/repos.json').toString());
    postData = JSON.parse(fs.readFileSync('__mocks__/posts.json').toString());
  } else {
    const repoResponse = await fetch(
      'https://api.github.com/users/nhevia/repos'
    );
    repoData = await repoResponse.json();

    // TODO will need to combine different sources later (md files, dev.to, etc)
    // need standarized props and parse data into same object
    const postResponse = await fetch(
      'https://dev.to/api/articles?username=nicoh'
    );
    postData = await postResponse.json();
  }

  return {
    props: { repoData, postData },
  };
};
