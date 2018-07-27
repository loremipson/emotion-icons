import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7.993 12c0 2.209 1.798 4.007 4.007 4.007s4.007-1.798 4.007-4.007S14.209 7.993 12 7.993 7.993 9.791 7.993 12zM12 9.993c1.106 0 2.007.9 2.007 2.007s-.9 2.007-2.007 2.007S9.993 13.106 9.993 12 10.894 9.993 12 9.993zm5.293 8.714l-2-2 1.414-1.414 2 2zm-10-10l-2-2 1.414-1.414 2 2zM3.513 11h2.829v2H3.513zm14.142 0h2.828v2h-2.828zm-6.657-7.485h2v2.829h-2zm0 14.142h2v2.828h-2zm5.707-8.949l-1.414-1.415 2.001-2 1.414 1.414zm-9.999 9.999l-1.414-1.414 1.999-2 1.414 1.415z" key="k0" />
]


const Sun = ({ title, ...restProps }) => {
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
          ? [<title key="Sun-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Sun',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Sun.displayName = 'Sun'

Sun.defaultProps = { height: 24, width: 24}

export default Sun