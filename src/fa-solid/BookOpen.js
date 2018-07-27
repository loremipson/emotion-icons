import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M542.2.1c-54.8 3.1-163.7 14.4-231 55.6-4.6 2.8-7.3 7.9-7.3 13.2v363.9c0 11.5 12.6 18.8 23.3 13.5 69.2-34.8 169.2-44.3 218.7-46.9 16.9-.9 30-14.4 30-30.7v-338C576 13 560.6-1 542.2.1zM264.7 55.6C197.5 14.5 88.6 3.2 33.8.1 15.4-1 0 13 0 30.7v337.8c0 16.2 13.1 29.8 30 30.7 49.5 2.6 149.6 12.1 218.8 47 10.6 5.4 23.2-1.9 23.2-13.5V68.6c0-5.3-2.6-10.1-7.3-13z" key="k0" />
]


const BookOpen = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="BookOpen-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 576 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BookOpen',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BookOpen.displayName = 'BookOpen'

BookOpen.defaultProps = { height: undefined, width: undefined}

export default BookOpen