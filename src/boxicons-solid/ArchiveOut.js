import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.867 8.5l-2.875-4.999A1.002 1.002 0 0 0 18.125 3h-12a1 1 0 0 0-.848.47l-3.125 5 .015.009A.97.97 0 0 0 2 9v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a.978.978 0 0 0-.147-.491l.014-.009zM6.68 5h10.867l1.725 3H4.805L6.68 5zM12 18l-4-4h3v-3h2v3h3l-4 4z" key="k0" />
]


const ArchiveOut = ({ title, ...restProps }) => {
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
          ? [<title key="ArchiveOut-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ArchiveOut',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ArchiveOut.displayName = 'ArchiveOut'

ArchiveOut.defaultProps = { height: 24, width: 24}

export default ArchiveOut