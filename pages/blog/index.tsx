import fs from 'fs';
import path from 'path';
import React from 'react';
import matter from 'gray-matter';
import { Post } from './[id]';
import Link from 'next/link';
import Layout from 'components/layout/Layout';

type Props = {
  posts: (Post & { slug: string })[];
};

export default function Blog({ posts }: Props) {
  return (
    <Layout>
      <div>
        {posts.map((p) => (
          <div key={p.data.title}>
            <Link href={`/blog/${p.slug}`}>{p.data.title}</Link>
            <span>{p.data.created_at}</span>
            <p>{p.data.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  // read all files names
  const postsDirectory = path.join(process.cwd(), 'src/data/posts');
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {
    // read file content
    const fullPath = path.join(postsDirectory, `${fileName}`);
    const fileContent = fs.readFileSync(fullPath, 'utf8').toString();

    // get file metadata
    const parsedMarkdown = matter(fileContent);

    return {
      data: parsedMarkdown.data,
      content: parsedMarkdown.content,
      slug: fileName.replace('.md', ''),
    };
  });

  return {
    props: {
      posts,
    },
  };
}
