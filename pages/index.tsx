import fs from 'fs';
import path from 'path';
import React, { useState } from 'react';
import Head from 'next/head';
import Header from 'components/ui/Header';
import List from 'components/ui/List/List';
import {
  BlogpostCard,
  ProjectFeaturedCard,
  ProjectCard,
  ProjectListFetch,
} from 'components/items';
import { StackoverflowCard, Skills } from 'components/activity';
import { ProjectFeatured, Repository, Post } from 'types/items';
import s from './index.module.css';

interface Props {
  featuredRepoData: ProjectFeatured[];
  repoData: Repository[];
  postData: Post[];
}

export default function Home({ featuredRepoData, repoData, postData }: Props) {
  const [theme, setTheme] = useState('theme-dark');

  return (
    <div id="layout" className={`${s.root} ${theme}`}>
      <Head>
        <title>Nico Hevia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header theme={theme} setTheme={setTheme} />

      <main>
        <section className={s.about}>
          <div className={s.introduction}>
            Hi. I&apos;m
            <span className={s['name-container']}>
              <span className={s.name}>Nicolas Hevia</span>
            </span>
            , a web developer.
          </div>

          <div className={s.activity}>
            <StackoverflowCard />
            <Skills />
          </div>
        </section>

        <section className={s.fprojects}>
          <div className={s['label-container']}>
            <h3 className={s.label}>Featured projects</h3>
          </div>

          <List
            items={featuredRepoData}
            renderItem={ProjectFeaturedCard}
          ></List>
        </section>

        <section className={s.projects}>
          <div className={s['label-container']}>
            <h3 className={s.label}>Other projects</h3>
          </div>
          <div>
            <ProjectListFetch items={repoData} renderItem={ProjectCard} />
          </div>
        </section>

        <section className={s.posts}>
          <div className={s['label-container']}>
            <h3 className={s.label}>Blog Posts</h3>
          </div>

          <div>
            <List
              items={postData}
              renderItem={BlogpostCard}
              className={s.contentList}
            />
          </div>
        </section>
      </main>

      <footer>
        <span>Nicolas Hevia @ 2022</span>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const dataDirectory = path.join(process.cwd(), 'src/data');
  let postData;
  if (process.env.NODE_ENV === 'development') {
    postData = JSON.parse(
      fs.readFileSync('src/__mocks__/posts.json').toString()
    );
  } else {
    // TODO need standarized data to combine different sources (markdown, dev.to, etc)
    const postResponse = await fetch(
      'https://dev.to/api/articles?username=nicoh'
    );
    postData = await postResponse.json();
  }

  const featuredRepoData = JSON.parse(
    fs.readFileSync(`${dataDirectory}/reposfeatured.json`).toString()
  );
  const repoData = JSON.parse(
    fs.readFileSync(`${dataDirectory}/repos.json`).toString()
  );

  return {
    props: { featuredRepoData, repoData, postData },
  };
};
