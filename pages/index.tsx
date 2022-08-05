import fs from 'fs';
import React, { useState } from 'react';
import Head from 'next/head';
import Header from 'components/ui/Header';
import List from 'components/ui/List/List';
import { RepositoryCard } from 'components/items/repository';
import { BlogpostCard } from 'components/items/blogpost';
import { StackoverflowCard } from 'components/items/stackoverflow';
import { Repository, Post, So } from 'types/items';
import s from './index.module.css';

interface Props {
  repoData: Array<Repository>;
  postData: Array<Post>;
  soData: Array<So>;
}

export default function Home({ repoData, postData, soData }: Props) {
  const [theme, setTheme] = useState('theme-dark');

  return (
    <div id="layout" className={`${s.root} ${theme}`}>
      <Head>
        <title>Nico Hevia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header theme={theme} setTheme={setTheme} />

      <main>
        <article className={s.projects}>
          <h3 className={s.label}>Github repos</h3>

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

        <article className={s.stackoverflow}>
          <h3 className={s.label}>StackOverflow activity</h3>

          <div>
            <List
              items={soData}
              renderItem={StackoverflowCard}
              as={React.Fragment}
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
  // TODO remove local data later, just to reduce load in dev for now
  let repoData, postData, normalizedSoData;
  if (process.env.NODE_ENV === 'development') {
    repoData = JSON.parse(
      fs.readFileSync('src/__mocks__/repos.json').toString()
    );
    postData = JSON.parse(
      fs.readFileSync('src/__mocks__/posts.json').toString()
    );
    const soData = JSON.parse(
      fs.readFileSync('src/__mocks__/so.json').toString()
    );
    normalizedSoData = soData.items.map((i: any) => ({
      ...i,
      id: i.post_id,
      carlos: 'dasdsd',
    }));
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

    const soResponse = await fetch(
      'https://api.stackexchange.com/2.3/users/6402990/posts?pagesize=5&order=desc&sort=votes&site=stackoverflow&filter=!nKzQUR.3CQ'
    );
    const soData = await soResponse.json();
    normalizedSoData = soData.items.map((i: any) => ({ ...i, id: i.post_id }));
  }

  return {
    props: { repoData, postData, soData: normalizedSoData },
  };
};
