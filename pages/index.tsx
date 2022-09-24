import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Layout from 'components/layout/Layout';
import List from 'components/ui/List/List';
import {
  ProjectFeaturedCard,
  ProjectCard,
  ProjectListFetch,
} from 'components/items';
import { StackoverflowCard, Skills } from 'components/activity';
import { ProjectFeatured } from 'types/items';
import s from './index.module.css';

interface Props {
  featuredRepoData: ProjectFeatured[];
  repoIds: number[];
}

export default function Home({ featuredRepoData, repoIds }: Props) {
  return (
    <Layout>
      <Head>
        <title>Nico Hevia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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
          <h3 className={s.label}>Featured projects</h3>

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
            <ProjectListFetch items={repoIds} renderItem={ProjectCard} />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const dataDirectory = path.join(process.cwd(), 'src/data');

  const featuredRepoData = JSON.parse(
    fs.readFileSync(`${dataDirectory}/reposfeatured.json`).toString()
  );
  const repoIds = JSON.parse(
    fs.readFileSync(`${dataDirectory}/repos.json`).toString()
  );

  return {
    props: { featuredRepoData, repoIds },
  };
};
