import React from 'react';
import Link from 'next/link';
import { request } from 'utils/cms';
import Layout from 'components/layout/Layout';
import { Post } from './[id]';

type Props = {
  data: {
    allPosts: Post[];
  };
};

export default function Blog({ data: { allPosts: posts } }: Props) {
  return (
    <Layout>
      <div>
        {posts.map((p) => (
          <div key={p.title}>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            <span>{p.createdDate}</span>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

const POSTS_QUERY = `
  query MyQuery {
    allPosts(orderBy: _createdAt_ASC) {
      id
      title
      description
      content
      createdDate
      image {
        url
      }
      slug
    }
  }
`;

export async function getStaticProps(context: any) {
  const data = await request({
    query: POSTS_QUERY,
    preview: context.preview,
  });
  return {
    props: { data },
  };
}
