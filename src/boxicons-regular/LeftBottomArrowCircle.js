import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2.006A9.926 9.926 0 0 0 4.929 4.93c-3.898 3.898-3.898 10.242 0 14.142 1.885 1.885 4.396 2.923 7.071 2.923s5.187-1.038 7.071-2.923c3.898-3.899 3.898-10.243 0-14.142A9.926 9.926 0 0 0 12 2.006zm5.657 15.651c-1.507 1.507-3.516 2.337-5.657 2.337s-4.15-.83-5.657-2.337c-3.118-3.119-3.118-8.194 0-11.313C7.851 4.836 9.859 4.006 12 4.006s4.149.83 5.657 2.338c3.118 3.119 3.118 8.194 0 11.313z" key="k0" />
,
<path d="M14.293 8.293l-3.168 3.168L9 9.336V15h5.663l-2.124-2.125 3.168-3.168z" key="k1" />
]


const LeftBottomArrowCircle = ({ title, ...restProps }) => {
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
          ? [<title key="LeftBottomArrowCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LeftBottomArrowCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LeftBottomArrowCircle.displayName = 'LeftBottomArrowCircle'

LeftBottomArrowCircle.defaultProps = { height: 24, width: 24}

export default LeftBottomArrowCircle