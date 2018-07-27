import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M382.1 442.7L154.5 55c-4-6.7-12.7-9-19.5-5.1-6.8 3.9-9.1 12.6-5.1 19.3L357.5 457c2.6 4.5 7.4 7 12.3 7 2.4 0 4.9-.6 7.2-1.9 6.7-4 9-12.6 5.1-19.4zm-57.5-129.4l57.9-75.8c3.8-5.6.2-13.4-6.3-13.4h-104l52.4 89.2zm-4.2-276.2c.9-4.5-4.6-7.1-7.2-3.4L227 146.9l42.4 72.3 51-182.1zm-133 161.6l-57.9 75.8c-3.8 5.6-.2 13.4 6.3 13.4h103.9l-52.3-89.2zm4.2 276.2c-.9 4.5 4.6 7.1 7.2 3.4L285 365.1l-42.4-72.3-51 182.1z" key="k0" />
]


const FlashOff = ({ title, ...restProps }) => {
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
          ? [<title key="FlashOff-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FlashOff',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FlashOff.displayName = 'FlashOff'

FlashOff.defaultProps = { height: undefined, width: undefined}

export default FlashOff