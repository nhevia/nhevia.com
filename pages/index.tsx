import fs from 'fs';
import React, { useState } from 'react';
import Head from 'next/head';
import Header from 'components/ui/Header';
import List from 'components/ui/List/List';
import { RepositoryCard } from 'components/items/repository';
import { BlogpostCard } from 'components/items/blogpost';
import { CardStackoverflow } from 'components/activity';
import { Repository, Post } from 'types/items';
import s from './index.module.css';

interface Props {
  repoData: Array<Repository>;
  postData: Array<Post>;
}

export default function Home({ repoData, postData }: Props) {
  const [theme, setTheme] = useState('theme-dark');

  return (
    <div id="layout" className={`${s.root} ${theme}`}>
      <Head>
        <title>Nico Hevia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header theme={theme} setTheme={setTheme} />

      <main>
        <article className={s.about}>
          <div className={s.me}>
            Hi. I&apos;m
            <span className={s['name-container']}>
              <span className={s.name}>Nicolas Hevia</span>
            </span>
            , a web developer.
          </div>

          <div>
            <CardStackoverflow />
          </div>
        </article>
        <article className={s.projects}>
          <h3 className={s.label}>Projects Repos</h3>

          <div>
            <List
              items={repoData.sort((a: Repository, b: Repository) => {
                if (typeof a.stargazers_count === 'undefined')
                  a.stargazers_count = 0;

                if (typeof b.stargazers_count === 'undefined')
                  b.stargazers_count = 0;

                return a.stargazers_count > b.stargazers_count ? -1 : 1;
              })}
              renderItem={RepositoryCard}
              className={s.contentList}
            />
          </div>
        </article>

        <article className={s.posts}>
          <h3 className={s.label}>Blog Posts</h3>

          <div>
            <List
              items={postData}
              renderItem={BlogpostCard}
              className={s.contentList}
            />
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
  // TODO reduce endpoint hits on DEV
  let repoData, postData;
  if (process.env.NODE_ENV === 'development') {
    repoData = JSON.parse(
      fs.readFileSync('src/__mocks__/repos.json').toString()
    );
    postData = JSON.parse(
      fs.readFileSync('src/__mocks__/posts.json').toString()
    );
  } else {
    const repoResponse = await fetch(
      'https://api.github.com/users/nhevia/repos'
    );
    repoData = await repoResponse.json();

    // TODO need standarized data to combine different sources (markdown, dev.to, etc)
    const postResponse = await fetch(
      'https://dev.to/api/articles?username=nicoh'
    );
    postData = await postResponse.json();
  }

  return {
    props: { repoData, postData },
  };
};
