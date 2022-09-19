import ReactMarkdown from 'react-markdown';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import { dark } from 'utils/onedarkTheme';

SyntaxHighlighter.registerLanguage('jsx', jsx);

type CodeProps = {
  [key: string]: string;
};

const CodeBlock = ({ children, inline, className, ...props }: CodeProps) => {
  return (
    <SyntaxHighlighter language="jsx" style={dark}>
      {children}
    </SyntaxHighlighter>
  );
};

type Props = {
  htmlString: string;
};

export default function CodeHighlighter({ htmlString }: Props) {
  return (
    // @ts-ignore
    <ReactMarkdown className="markdown-body" components={{ code: CodeBlock }}>
      {htmlString}
    </ReactMarkdown>
  );
}
