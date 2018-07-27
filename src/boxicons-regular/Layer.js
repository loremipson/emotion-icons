import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 17c-.205 0-.411-.063-.586-.189l-9-6.5a1.001 1.001 0 0 1 0-1.622l9-6.5c.35-.252.822-.252 1.172 0l9 6.5a1.001 1.001 0 0 1 0 1.622l-9 6.5A1.003 1.003 0 0 1 12 17zM4.708 9.5L12 14.767 19.292 9.5 12 4.233 4.708 9.5z" key="k0" />
,
<path d="M19.925 14L12 19.764 4.075 14l-1.7 1.236 9.037 6.572a.995.995 0 0 0 1.176.001l9.037-6.572-1.7-1.237z" key="k1" />
]


const Layer = ({ title, ...restProps }) => {
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
          ? [<title key="Layer-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Layer',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Layer.displayName = 'Layer'

Layer.defaultProps = { height: 24, width: 24}

export default Layer