import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.8 12.5c0-.512-.043-1.01-.106-1.5h2.246V9h-2.695a9.934 9.934 0 0 0-1.682-3.148l2.145-2.145-1.414-1.414-2.164 2.163C14.931 3.539 13.518 3 12 3s-2.931.539-4.13 1.456L5.707 2.293 4.293 3.707l2.145 2.145A9.934 9.934 0 0 0 4.756 9H2v2h2.307c-.064.49-.107.988-.107 1.5 0 .515.043 1.018.108 1.511H2v2h2.759c.228.693.52 1.346.868 1.948l-2.334 2.334 1.414 1.414 2.118-2.118C8.204 21.083 10.014 22 12 22s3.796-.917 5.175-2.411l2.118 2.118 1.414-1.414-2.334-2.334c.349-.602.641-1.255.868-1.948H22v-2h-2.309c.066-.493.109-.996.109-1.511zM12 5c2.221 0 4.151 1.624 5.126 4H6.874C7.849 6.624 9.779 5 12 5zm1 14.88V13h-2v6.88c-2.723-.615-4.8-3.687-4.8-7.38 0-.514.04-1.015.117-1.5h11.365c.077.485.117.986.117 1.5.001 3.694-2.076 6.765-4.799 7.38z" key="k0" />
]


const Bug = ({ title, ...restProps }) => {
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
          ? [<title key="Bug-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bug',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bug.displayName = 'Bug'

Bug.defaultProps = { height: 24, width: 24}

export default Bug