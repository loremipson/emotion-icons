import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 7h-2.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.689 0-2.803 1.434-3.5 2.882C11.303 3.434 10.19 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5C7 4.673 7.673 4 8.5 4zM11 18H6v-5h5v5zm0-7H4V9h7v2zm4.5-7c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.694c.451-1.368 1.251-3 2.194-3zM18 18h-5v-5h5v5zm2-7h-7V9h7v2z" key="k0" />
]


const Gift = ({ title, ...restProps }) => {
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
          ? [<title key="Gift-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Gift',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Gift.displayName = 'Gift'

Gift.defaultProps = { height: 24, width: 24}

export default Gift