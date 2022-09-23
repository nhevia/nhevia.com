import ReactMarkdown from 'react-markdown';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import { dark } from 'utils/onedarkTheme';
import s from './CodeHighlighter.module.css';

SyntaxHighlighter.registerLanguage('jsx', jsx);

type CodeProps = {
  [key: string]: string;
};

const CodeBlock = ({ children, inline, className, ...props }: CodeProps) => {
  return className?.includes('language') ? (
    // @ts-ignore
    <SyntaxHighlighter language="jsx" style={dark}>
      {children}
    </SyntaxHighlighter>
  ) : (
    <code>{children}</code>
  );
};

type Props = {
  htmlString: string;
};

export default function CodeHighlighter({ htmlString }: Props) {
  return (
    <ReactMarkdown
      className={s['markdown-body']}
      // @ts-ignore
      components={{ code: CodeBlock }}
    >
      {htmlString}
    </ReactMarkdown>
  );
}
