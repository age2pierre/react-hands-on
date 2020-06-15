/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import { Alert } from '@material-ui/lab'
import { ComponentDictionary } from '@mdx-js/react'
import React from 'react'

import { CodeBlock } from './CodeBlock'

export const MdxComponentMapping: ComponentDictionary = {
  a: (props: any) => <a {...props} />,
  blockquote: (props: any) => <Alert icon={false} severity="info" {...props} />,
  code: CodeBlock,
  // delete: (props: any) => <delete {...props} />,
  em: (props: any) => <em {...props} />,
  h1: (props: any) => <h1 {...props} />,
  h2: (props: any) => <h2 {...props} />,
  h3: (props: any) => <h3 {...props} />,
  h4: (props: any) => <h4 {...props} />,
  h5: (props: any) => <h5 {...props} />,
  h6: (props: any) => <h6 {...props} />,
  hr: (props: any) => <hr {...props} />,
  img: (props: any) => <img {...props} />,
  // inlineCode: (props: any) => <inlineCode {...props} />,
  li: (props: any) => <li {...props} />,
  ol: (props: any) => <ol {...props} />,
  p: (props: any) => <p {...props} />,
  pre: (props: any) => <pre {...props} />,
  strong: (props: any) => <strong {...props} />,
  sup: (props: any) => <sup {...props} />,
  table: (props: any) => <table {...props} />,
  td: (props: any) => <td {...props} />,
  // thematicBreak: (props: any) => <thematicBreak {...props} />,
  tr: (props: any) => <tr {...props} />,
  ul: (props: any) => <ul {...props} />,
}
