import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 4.8c.4-.2.6-.4.9-.4.5 0 .8.3.9.5.2.3.9.5 1.2.5.2 0 .5-.7.7-1.3s.2-1.3.1-1.4c-.1-.1-.9-.3-1.1-.3-.1.1-.3.2-.7.2s-.8-.3-1.1-.6c-.5-.5-1.1-.7-1.7-.9-.6-.2-1.3-.2-1.9-.2-.9-.1-1.9-.1-2.8.2-.4.1-.7.2-1.1.4-.1.1-.4.2-.5.2-.1.1-.1.2 0 .2s.5-.1.5-.1-.5.2-.5.4c0 .1.1.1.1.1s.3-.1.5-.1c.4 0 1-.2 1.5-.2.6 0 1.2.2 1.8.8.9 1.1.8 2.5.8 2.8-.2 2.1-4.9 14.9-5.1 15.8-.2.9-.2 1.4.9 1.7s1.5 0 1.7-.4c.1-.7 3.1-16.5 4.9-17.9z" key="k0" />
,
<path d="M16.1 3.8L0 6.3 2.6 23l8.6-1.4c-.1-.7 2.2-6.7 2.6-7.8l-4.4.7.6-1.8 3.1-.5.8 1s.2-.5.2-.7L9.8 7.2c-.2-.3-.2-.7.1-.9l.2-.2c.3-.2.7-.2.9.1l3.8 4.4c.8-2.4 1.5-4.5 1.5-5.2.1-.2.1-.9-.2-1.6zm-12 9.9l2.7-.5-.7 1.8-1.8.3-.2-1.6zm5.8-5.1l.3.1c.4.1.5.5.4.9l-3 8L5.8 20l.2-3 3-8c.1-.4.5-.5.9-.4zm10.8-2.8c-.4.4-.9 1.7-1.9 5.5h.1l.3 1.6-.8.1c-.1.5-.2 1-.4 1.6 1.7.9.8 3.1.7 3.1-.1 0-.1 0-.1-.1s.1-.4-.2-.5c-.2-.1-.6-.2-.9-.4-.3 1.2-.6 2.6-.9 4.1l6.3-1-2.1-14.1-.1.1z" key="k1" />
]

export const hex='#1575F9'
const Xcode = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: 'middle',
        overflow: 'hidden'
      },
      ({ size,height,width,css }) => ({
        height: size ? size : height,
        width: size ? size : width,
        ...css
      }),
    ),
    {
      children: (
        title
          ? [<title key="Xcode-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Xcode',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Xcode.displayName = 'Xcode'

Xcode.defaultProps = { height: 24, width: 24}

export default Xcode