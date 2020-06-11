import { createStyles, makeStyles, Paper, Tab, Tabs } from '@material-ui/core'
import { readFileSync } from 'fs'
import React, { useState } from 'react'

import Snip01 from '../snippets/snip01'
import { CodeBlock } from './CodeBlock'

// a little bit of magic from parcel
const SNIPPETS = {
  snip01: {
    text: readFileSync(__dirname + '/../snippets/snip01.tsx', 'utf-8'),
    component: Snip01,
  },
  snip02: {
    text: readFileSync(__dirname + '/../snippets/snip01.tsx', 'utf-8'),
    component: CodeBlock,
  },
} as const

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      padding: theme.spacing(2),
    },
  }),
)

export const SnippetPreview = (props: {
  file: keyof typeof SNIPPETS
  title?: string
  initProps: Record<string, unknown>
}) => {
  const classes = useStyles()
  const [tabValue, setTabValue] = useState(0)
  const [previewProps, setPreviewProps] = useState({
    obj: props.initProps,
    str: JSON.stringify(props.initProps, undefined, 2),
  })

  return (
    <Paper className={classes.container}>
      {props.title ? <h2>{props.title}</h2> : null}
      <CodeBlock>{SNIPPETS[props.file].text}</CodeBlock>
      <Tabs
        variant="fullWidth"
        value={tabValue}
        onChange={(_, value) => setTabValue(value)}
      >
        <Tab label="Preview" />
        <Tab label="Props" />
      </Tabs>
      {tabValue === 0 ? (
        SNIPPETS[props.file].component(previewProps.obj as any)
      ) : (
        <CodeBlock
          editable
          onChange={str => {
            try {
              const obj = JSON.parse(str)
              if (typeof obj === 'object') {
                setPreviewProps({
                  obj,
                  str,
                })
              } else {
                setPreviewProps({
                  obj: previewProps.obj,
                  str,
                })
              }
            } catch (error) {
              console.warn('error while parsing previewProps failed to parse')
            }
          }}
        >
          {previewProps.str}
        </CodeBlock>
      )}
    </Paper>
  )
}
