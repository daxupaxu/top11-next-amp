import React from 'react'
import { AmpIncludeAmpBind } from './AmpCustomElement'

/**
 * Renders an amp-state element, by either adding local state via `value`
 * or remote state via the `src` property.
 *
 * @param {Props} props
 */
interface Props {
  id: string,
  src: string,
  children: any,
  

}
export default function AmpState(props: Props) {
  return (
    <>
      <AmpIncludeAmpBind />
      <amp-state id={props.id} src={props.src}>
        {props.children && (
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(props.children),
            }}
          />
        )}
      </amp-state>
    </>
  )
}