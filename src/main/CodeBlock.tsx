import { Ace } from 'ace-builds'
import React, { useState } from 'react'
import AceEditor from 'react-ace'

export const CodeBlock = (props: {
  children: string
  onChange?: (value: string) => void
  editable?: boolean
}) => {
  const [height, setHeight] = useState(70)

  return (
    <AceEditor
      mode="typescript"
      theme="monokai"
      name="codeblock"
      fontSize={14}
      height={`${height}px`}
      onLoad={(editor: Ace.Editor) => {
        if (props.editable !== true) {
          editor.setReadOnly(true)
        }
        const newHeight =
          (editor.getSession().getScreenLength() + 1.5) * // + 1.5 for horizontal scrollbar
          (editor.renderer as any).lineHeight
        setHeight(newHeight >= 70 ? newHeight : 70)
      }}
      onChange={props.onChange}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={props.children}
      width="100%"
      setOptions={{
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  )
}
