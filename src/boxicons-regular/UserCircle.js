import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.579 2 2 6.579 2 12c0 3.189 1.592 6.078 4 7.924V20h.102C7.77 21.245 9.813 22 12 22s4.23-.755 5.898-2H18v-.076c2.408-1.846 4-4.734 4-7.924 0-5.421-4.579-10-10-10zM8.045 18.909C8.266 16.883 9.606 15 12 15s3.734 1.883 3.955 3.909C14.779 19.597 13.428 20 12 20s-2.779-.403-3.955-1.091zM10 11c0-1.178.822-2 2-2s2 .822 2 2-.822 2-2 2-2-.822-2-2zm7.734 6.508c-.453-1.635-1.461-2.957-2.811-3.736C15.594 13.063 16 12.1 16 11c0-2.28-1.72-4-4-4s-4 1.72-4 4c0 1.1.406 2.063 1.076 2.771-1.35.779-2.357 2.102-2.811 3.736C4.873 16.061 4 14.112 4 12c0-4.337 3.663-8 8-8s8 3.663 8 8c0 2.112-.873 4.061-2.266 5.508z" key="k0" />
]


const UserCircle = ({ title, ...restProps }) => {
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
          ? [<title key="UserCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-UserCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

UserCircle.displayName = 'UserCircle'

UserCircle.defaultProps = { height: 24, width: 24}

export default UserCircle