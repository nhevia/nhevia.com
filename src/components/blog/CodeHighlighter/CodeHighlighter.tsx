import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.5 }, x: { duration: 0.5 } }}
    >
      <ReactMarkdown
        className={s['markdown-body']}
        // @ts-ignore
        components={{ code: CodeBlock }}
      >
        {htmlString}
      </ReactMarkdown>
    </motion.div>
  );
}
