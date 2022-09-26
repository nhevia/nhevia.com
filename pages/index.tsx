import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { motion } from 'framer-motion';
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
          <motion.div
            className={s.introduction}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ opacity: { duration: 0.5 }, x: { duration: 1 } }}
          >
            Hi. I&apos;m
            <span className={s['name-container']}>
              <span className={s.name}>Nicolas Hevia</span>
            </span>
            , a web developer.
          </motion.div>

          <motion.div
            className={s.activity}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ opacity: { duration: 0.5 }, x: { duration: 1 } }}
          >
            <StackoverflowCard />
            <Skills />
          </motion.div>
        </section>

        <section className={s.fprojects}>
          <h3 className={s.label}>Featured projects</h3>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ opacity: { duration: 0.5 }, x: { duration: 1 } }}
          >
            <List
              items={featuredRepoData}
              renderItem={ProjectFeaturedCard}
            ></List>
          </motion.div>
        </section>

        <section className={s.projects}>
          <div className={s['label-container']}>
            <h3 className={s.label}>Other projects</h3>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div
              variants={{
                offscreen: {
                  y: 300,
                },
                onscreen: {
                  y: 0,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 0.5,
                  },
                },
              }}
            >
              <ProjectListFetch items={repoIds} renderItem={ProjectCard} />
            </motion.div>
          </motion.div>
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
