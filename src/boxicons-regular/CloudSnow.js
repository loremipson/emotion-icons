import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.944 10.112C18.507 6.67 15.56 4 12 4 9.244 4 6.85 5.611 5.757 8.15 3.609 8.792 2 10.819 2 13c0 2.757 2.243 5 5 5v-2c-1.654 0-3-1.346-3-3 0-1.403 1.199-2.756 2.673-3.015l.581-.103.192-.559C8.149 7.273 9.895 6 12 6c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-1v2h1c2.206 0 4-1.794 4-4a4.008 4.008 0 0 0-3.056-3.888z" key="k0" />
,
<circle cx={15} cy={16} r={1} key="k1" />
,
<circle cx={15} cy={19} r={1} key="k2" />
,
<circle cx={12} cy={18} r={1} key="k3" />
,
<circle cx={12} cy={21} r={1} key="k4" />
,
<circle cx={9} cy={19} r={1} key="k5" />
,
<circle cx={9} cy={16} r={1} key="k6" />
]


const CloudSnow = ({ title, ...restProps }) => {
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
          ? [<title key="CloudSnow-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CloudSnow',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CloudSnow.displayName = 'CloudSnow'

CloudSnow.defaultProps = { height: 24, width: 24}

export default CloudSnow