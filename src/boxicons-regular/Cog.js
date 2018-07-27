import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z" key="k0" />
,
<path d="M2.244 14.512c-.068.256-.032.529.1.759l2 3.46c.276.477.889.641 1.366.366l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806a1.003 1.003 0 0 0 1.366-.366l2-3.46c.132-.229.168-.502.1-.759s-.236-.475-.466-.607l-1.371-.792a7.683 7.683 0 0 0-.002-2.224l1.371-.792a1.002 1.002 0 0 0 .366-1.366l-2-3.46a1.001 1.001 0 0 0-1.366-.366l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a1 1 0 0 0-1.366.366l-2 3.46c-.132.229-.168.502-.1.759s.236.474.466.607l1.371.792a7.683 7.683 0 0 0 0 2.224l-1.371.792a1 1 0 0 0-.466.608zm3.926-1.134C6.058 12.925 6 12.461 6 12s.058-.925.17-1.378a.999.999 0 0 0-.47-1.108l-1.124-.65.999-1.729 1.145.661a.998.998 0 0 0 1.188-.141 6.047 6.047 0 0 1 2.384-1.399A.998.998 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.957 6.047 6.047 0 0 1 2.384 1.399 1 1 0 0 0 1.188.141l1.145-.661.999 1.729-1.124.649a.999.999 0 0 0-.47 1.108c.112.453.17.917.17 1.378s-.058.925-.17 1.378a.999.999 0 0 0 .47 1.108l1.124.65-.999 1.729-1.145-.661a.998.998 0 0 0-1.188.141 6.047 6.047 0 0 1-2.384 1.399.998.998 0 0 0-.708.956V20h-2v-1.3a1 1 0 0 0-.708-.957 6.047 6.047 0 0 1-2.384-1.399 1 1 0 0 0-1.188-.141l-1.145.661-.999-1.729 1.124-.65a.997.997 0 0 0 .47-1.107z" key="k1" />
]


const Cog = ({ title, ...restProps }) => {
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
          ? [<title key="Cog-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Cog',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Cog.displayName = 'Cog'

Cog.defaultProps = { height: 24, width: 24}

export default Cog