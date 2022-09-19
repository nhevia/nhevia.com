import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Head from 'next/head';
// @ts-ignore
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type CodeProps = {
  [key: string]: string;
};

const CodeBlock = ({ children, inline, className, ...props }: CodeProps) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter language={match[1]} style={oneDark}>
      {children}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

type Props = {
  htmlString: string;
  data: {
    [key: string]: string;
  };
};

export default function Post({ htmlString, data }: Props) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      {/* @ts-ignore */}
      <ReactMarkdown className="markdown-body" components={{ code: CodeBlock }}>
        {htmlString}
      </ReactMarkdown>
    </div>
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
