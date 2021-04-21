import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Highlight from 'react-highlight'

interface IMarkdownProps {}

const components = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '')

    const isHighlighter = !inline && match

    return isHighlighter ? (
      <Highlight className={match![1]} {...props}>
        {children}
      </Highlight>
    ) : (
      <code className={className} {...props} />
    )
  },
}

const Markdown: FC<IMarkdownProps> = ({ children }) => {
  return (
    <>
      {typeof children === 'string' ? (
        <ReactMarkdown
          remarkPlugins={[gfm]}
          components={components}
          children={children}
        />
      ) : null}
    </>
  )
}

export default Markdown
