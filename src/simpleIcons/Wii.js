import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.904 6.261a1.318 1.318 0 0 0-1.344 1.293v.018a1.325 1.325 0 0 0 1.344 1.305c.783 0 1.404-.579 1.404-1.305.001-.732-.62-1.311-1.404-1.311zm4.71 0c-.747 0-1.36.58-1.36 1.311 0 .711.613 1.305 1.361 1.305.767 0 1.385-.579 1.385-1.305 0-.732-.618-1.311-1.386-1.311zm-14.84.543c-.748 0-1.252.374-1.514 1.215-.242.857-1.794 6.822-1.794 6.822L2.43 6.897H0s2.334 8.464 2.652 9.456c.241.765.84 1.386 1.7 1.386 1.009 0 1.479-.732 1.684-1.386.225-.676 1.738-6.261 1.738-6.261s1.515 5.589 1.719 6.261c.225.653.69 1.386 1.682 1.386.879 0 1.456-.621 1.72-1.386.315-.99 2.657-9.456 2.657-9.456h-2.45l-2.021 7.944s-1.55-5.965-1.812-6.822c-.242-.844-.77-1.215-1.495-1.215zm9.008 3.363v7.495h2.322v-7.495h-2.322zm4.693 0v7.495h2.317v-7.495h-2.317z" key="k0" />
]

export const hex='#8B8B8B'
const Wii = ({ title, ...restProps }) => {
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
          ? [<title key="Wii-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Wii',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Wii.displayName = 'Wii'

Wii.defaultProps = { height: 24, width: 24}

export default Wii