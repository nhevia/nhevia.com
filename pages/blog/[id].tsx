import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import React, { Suspense } from 'react';
import Layout from 'components/layout/Layout';
const SyntaxHighlighter = React.lazy(
  () => import('components/CodeHighlighter')
);

export type Post = {
  data: {
    title: string;
    description: string;
    created_at: string;
  };
  content: string;
};

type Props = {
  htmlString: string;
  data: Post['data'];
};

export default function Post({ htmlString, data }: Props) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <SyntaxHighlighter htmlString={htmlString} />
      </Suspense>
    </Layout>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'src/data/posts');
  const files = fs.readdirSync(postsDirectory);

  const paths = files.map((fileName) => ({
    params: {
      id: fileName.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// @ts-ignore
export async function getStaticProps({ params: { id } }) {
  const postsDirectory = path.join(process.cwd(), 'src/data/posts');
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8').toString();

  // Use gray-matter to parse the post metadata section
  const parsedMarkdown = matter(fileContents);

  return {
    props: {
      htmlString: parsedMarkdown.content,
      data: parsedMarkdown.data,
    },
  };
}
