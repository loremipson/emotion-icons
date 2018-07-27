import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22 9h-1V6.021c.003-.146-.007-1.465-1.3-2.735C18.427 2.036 17.143 2 17 2H6.996c-.239 0-1.493.063-2.708 1.302C3.036 4.578 3 5.859 3 6v3H2v3h1v7a1 1 0 0 0 1 1h1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h6v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-7h1V9zM5 8h6v4H5V8zm8 0h6v4h-6V8zM7 4h9.975c.026.001.64.042 1.324.713.672.66.7 1.266.701 1.287H5.002c.012-.115.1-.672.714-1.298C6.375 4.03 6.981 4.001 7 4zm11 14H5v-4h14v4h-1z" key="k0" />
,
<path d="M6 15h2v1.991H6zm10 0h2v1.991h-2z" key="k1" />
]


const Bus = ({ title, ...restProps }) => {
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
          ? [<title key="Bus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bus.displayName = 'Bus'

Bus.defaultProps = { height: 24, width: 24}

export default Bus