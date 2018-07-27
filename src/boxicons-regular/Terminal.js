import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 14h6v2h-6zm-4.293 1.707l3-3a.999.999 0 0 0 0-1.414l-3-3-1.414 1.414L8.586 12l-2.293 2.293 1.414 1.414z" key="k0" />
,
<path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 14H4V6h16v12z" key="k1" />
]


const Terminal = ({ title, ...restProps }) => {
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
          ? [<title key="Terminal-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Terminal',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Terminal.displayName = 'Terminal'

Terminal.defaultProps = { height: 24, width: 24}

export default Terminal