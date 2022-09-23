import React, { Suspense } from 'react';
import Head from 'next/head';
import { request } from 'utils/cms';
import Layout from 'components/layout/Layout';
const CodeHighlighter = React.lazy(
  () => import('components/blog/CodeHighlighter')
);
import s from './id.module.css';

export type Post = {
  id: string;
  title: string;
  description: string;
  content: string;
  createdDate: string;
  readingDuration: string;
  image: {
    url: string;
  };
  slug: string;
};

type Props = {
  data: {
    post: Post;
  };
};

export default function Post({ data: { post } }: Props) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className={s.root}>
        <div className={s.header}>
          <h2 className={s.title}>{post.title}</h2>
          <small>
            <span>{post.createdDate}</span> -{' '}
            <span>{post.readingDuration} min read</span>
          </small>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <CodeHighlighter htmlString={post.content} />
        </Suspense>
      </div>
    </Layout>
  );
}

const PATHS_QUERY = `
  query AllSlugs {
    allPosts {
      slug
    }
  }
`;

export const getStaticPaths = async (context: any) => {
  const slugQuery = await request({
    query: PATHS_QUERY,
    preview: context.preview,
  });

  let paths: string[] = [];

  slugQuery.allPosts.map((p: { slug: string }) =>
    paths.push(`/blog/${p.slug}`)
  );

  return {
    paths,
    fallback: 'blocking',
  };
};

const POST_QUERY = `
  query onePost($slug: String ) {
    post(filter:{slug: {eq: $slug}}) {
      id
      title
      description
      content
      createdDate
      readingDuration
      image {
        url
      }
      slug
    }
  }
`;

export const getStaticProps = async ({ params, preview }: any) => {
  const data = await request({
    query: POST_QUERY,
    preview: preview,
    variables: { slug: params.id },
  });

  return {
    props: { data },
  };
};
