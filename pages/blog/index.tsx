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
      <div
        style={{
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '2rem 1.2rem',
        }}
      >
        {posts.map((p) => (
          <article key={p.id} style={{ padding: '0px 10px 10px 10px' }}>
            <header>
              <h2
                style={{
                  marginBottom: 2,
                  fontSize: '1.8em',
                  fontFamily: 'Open Sans',
                  letterSpacing: '1px',
                }}
              >
                <Link href={`/blog/${p.slug}`}>
                  <a>{p.title}</a>
                </Link>
              </h2>
              <small>
                <span>{p.createdDate}</span> -{' '}
                <span>{p.readingDuration} min read</span>
              </small>
            </header>

            <p style={{ marginTop: 5 }}>{p.description}</p>
          </article>
        ))}
      </div>
    </Layout>
  );
}

const POSTS_QUERY = `
  query allPosts {
    allPosts(orderBy: _createdAt_DESC) {
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

export async function getStaticProps(context: any) {
  const data = await request({
    query: POSTS_QUERY,
    preview: context.preview,
  });
  return {
    props: { data },
  };
}
