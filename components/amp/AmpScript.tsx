import React from 'react'
import { AmpIncludeAmpScript } from './AmpCustomElement'

interface Props {
  layout: string,
  width: string,
  height: string,
  id: string,
  src: string,
  children: any,
  script: any
}

export default function AmpScript(props: Props) {
  return (
    <>
      <AmpIncludeAmpScript />
      <amp-script
        layout={props.layout}
        width={props.width}
        height={props.height}
        script={props.id}
        src={props.src}
      >
        {props.children}
      </amp-script>
      {props.script && (
        <script
          id={props.id}
          type="text/plain"
          target="amp-script"
          dangerouslySetInnerHTML={{
            __html: generateInlineScript(props.script),
          }}
        />
      )}
    </>
  )
}

function generateInlineScript(script: any) {
  if (typeof script === 'function') {
    return `${script.toString()}()`
  }
  return String(script)
}

