import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554-1.484-.61-2.496-1.224-3.253-1.86C6.86 10.842 4.595 15.138 0 23.395c3.612-2.086 6.412-3.37 9.02-3.862a6.61 6.61 0 0 1-.17-1.547l.003-.116c.058-2.314 1.261-4.094 2.687-3.972 1.425.12 2.534 2.095 2.478 4.409a6.52 6.52 0 0 1-.146 1.243c2.58.504 5.351 1.787 8.914 3.844-.702-1.293-1.33-2.459-1.929-3.57-.943-.73-1.927-1.682-3.933-2.713 1.38.359 2.367.772 3.136 1.234C13.97 7.011 13.48 5.504 11.39.605zM22.898 21.36v-.623h-.234v-.084h.562v.084h-.235v.623h-.093m.425 0v-.707h.142l.167.5a3.7 3.7 0 0 1 .034.107c.008-.026.02-.064.038-.114l.169-.493H24v.707h-.091v-.593l-.207.593h-.083l-.205-.602v.602h-.091" key="k0" />
]

export const hex='#1793D1'
const ArchLinux = ({ title, ...restProps }) => {
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
          ? [<title key="ArchLinux-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ArchLinux',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ArchLinux.displayName = 'ArchLinux'

ArchLinux.defaultProps = { height: 24, width: 24}

export default ArchLinux