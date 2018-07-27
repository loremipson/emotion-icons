import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 0C5.37 0 0 5.373 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12c0-6.627-5.37-12-12-12zm-.618 8.907v4.949c0 1.854-1.692 3.251-3.45 3.251-1.644 0-3.18-.776-3.354-2.634V11.37h2.475v2.475c0 .615.436.716.878.716.439 0 .975-.099.975-.717v-4.95c.05-1.843 1.58-3.014 3.29-3.014 1.744 0 2.899 1.319 2.899 3.016v1.05l-1.228.585-1.248-.585V8.289s-.164-.18-.42-.18c-.424 0-.816.18-.817.798zm8.04 4.949c0 1.854-1.59 3.111-3.353 3.111-1.761 0-3.45-1.257-3.45-3.112V11.38h2.476v2.475c0 .618.535.717.975.717.44 0 .879-.099.879-.717V11.38h2.461v2.475l.012.001z" key="k0" />
]

export const hex='#EB4924'
const StumbleUpon = ({ title, ...restProps }) => {
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
          ? [<title key="StumbleUpon-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-StumbleUpon',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

StumbleUpon.displayName = 'StumbleUpon'

StumbleUpon.defaultProps = { height: 24, width: 24}

export default StumbleUpon