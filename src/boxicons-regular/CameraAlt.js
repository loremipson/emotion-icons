import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 4h-2V3h-3v1H9V2H5v2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 14H4v-6h4c0 2.168 1.832 4 4 4s4-1.832 4-4h4v6zm-10-6c0-1.065.935-2 2-2s2 .935 2 2-.935 2-2 2-2-.935-2-2zm10-2h-4.573C14.722 8.819 13.442 8 12 8s-2.722.819-3.427 2H4V6h16v4z" key="k0" />
,
<path d="M19 9V7h-2l.01 2z" key="k1" />
]


const CameraAlt = ({ title, ...restProps }) => {
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
          ? [<title key="CameraAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CameraAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CameraAlt.displayName = 'CameraAlt'

CameraAlt.defaultProps = { height: 24, width: 24}

export default CameraAlt