import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M378 218c-33.5 0-62.1 23.8-68.6 56.1-10.3-.5-18.4-2.7-39.2-10.8-30.5-11.9-71.8-33.2-111.5-95.8 27.1-10.1 45.4-36 45.4-65.5 0-38.6-31.4-70-70-70s-70 31.4-70 70c0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3v171.3c-14.5 3.2-27.8 11-37.7 22.3C70.2 376.7 64 393 64 410c0 38.6 31.4 70 70 70s70-31.4 70-70c0-17.4-6.4-34-18-46.9-10.3-11.4-24-19.1-39-21.9V200.3c40.8 56.8 82 77 113 89.1 25.2 9.8 37.1 12.3 49.5 12.8 6.6 32.2 35.2 55.8 68.5 55.8 38.6 0 70-31.4 70-70s-31.4-70-70-70zM176 410c0 23.2-18.8 42-42 42s-42-18.8-42-42 18.8-42 42-42 42 18.8 42 42zm-42-266c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zm244 186c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z" key="k0" />
]


const GitMerge = ({ title, ...restProps }) => {
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
          ? [<title key="GitMerge-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GitMerge',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GitMerge.displayName = 'GitMerge'

GitMerge.defaultProps = { height: undefined, width: undefined}

export default GitMerge