import React, { Suspense } from 'react';
import Head from 'next/head';
import { request } from 'utils/cms';
import Layout from 'components/layout/Layout';
const SyntaxHighlighter = React.lazy(
  () => import('components/CodeHighlighter')
);

export type Post = {
  id: string;
  title: string;
  createdDate: string;
  image: {
    url: string;
  };
  description: string;
  content: string;
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
      <Suspense fallback={<div>Loading...</div>}>
        <SyntaxHighlighter htmlString={post.content} />
      </Suspense>
    </Layout>
  );
}

const PATHS_QUERY = `
  query MyQuery {
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
  query allPosts($slug: String ) {
    post(filter:{slug: {eq: $slug}}) {
      title
      content
      createdDate
      image {
        url
      }
      description
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
