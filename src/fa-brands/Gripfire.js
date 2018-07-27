import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M171.8 503.8c0-5.3 4.8-12.2 4.8-22.3 0-15.2-13-39.9-78.1-86.6C64.2 365.8 32 336.4 32 286.6 32 171.9 179.1 110.1 179.1 18c0-3.3-.2-6.7-.6-10 5.1 2.4 39.1 43.3 39.1 90.4 0 80.5-105.1 129.2-105.1 203 0 26.9 16.6 47.2 32.6 69.5 22.5 30.2 44.2 56.9 44.2 86.5-.1 14.5-4.4 29.7-17.5 46.4zm146-241.4c1.5 8.4 2.2 16.6 2.2 24.6 0 51.8-29.4 97.5-67.3 136.8-1 1-2.2 2.4-3.2 2.4-3.6 0-35.5-41.6-35.5-53.2 0 0 41.8-55.7 41.8-96.9 0-10.8-2.7-21.7-9.1-33.4-1.5 32.3-55.7 87.7-58.1 87.7-2.7 0-17.9-22-17.9-42.1 0-5.3 1-10.7 3.2-15.8 2.4-5.5 56.6-72 56.6-116.7 0-6.2-1-12-3.4-17.1l-4-7.2c16.7 6.5 82.6 64.1 94.7 130.9" key="k0" />
]


const Gripfire = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Gripfire-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 384 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Gripfire',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Gripfire.displayName = 'Gripfire'

Gripfire.defaultProps = { height: undefined, width: undefined}

export default Gripfire