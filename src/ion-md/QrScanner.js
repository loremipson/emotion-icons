import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M96 124.2c0-6.9 5.2-12.2 12.2-12.2H176V64h-66.8C75.7 64 48 90.7 48 124.2V192h48v-67.8zM403.6 64H336v48h67.2c6.9 0 12.8 5.2 12.8 12.2V192h48v-67.8c0-33.5-27-60.2-60.4-60.2zM416 386.8c0 6.9-5.2 12.2-12.2 12.2H336v49h67.8c33.5 0 60.2-27.7 60.2-61.2V320h-48v66.8zM108.2 399c-6.9 0-12.2-5.2-12.2-12.2V320H48v66.8c0 33.5 27.7 61.2 61.2 61.2H176v-49h-67.8z" key="k0" />
]


const QrScanner = ({ title, ...restProps }) => {
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
          ? [<title key="QrScanner-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-QrScanner',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

QrScanner.displayName = 'QrScanner'

QrScanner.defaultProps = { height: undefined, width: undefined}

export default QrScanner