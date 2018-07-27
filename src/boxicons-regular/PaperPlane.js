import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.001 13.204a.996.996 0 0 0 .599.879L8 16.445v4.722a1.001 1.001 0 0 0 1.447.895l5.314-2.657 3.838 1.679a1 1 0 0 0 1.399-.853l1-16a1 1 0 0 0-1.466-.946l-17 9a.993.993 0 0 0-.531.919zM10 19.548V17.32l2.377 1.04L10 19.548zm8.891-13.663l-.8 12.792-5.789-2.532L16 10.167l-7.193 4.449-3.508-1.535 13.592-7.196z" key="k0" />
]


const PaperPlane = ({ title, ...restProps }) => {
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
          ? [<title key="PaperPlane-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PaperPlane',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PaperPlane.displayName = 'PaperPlane'

PaperPlane.defaultProps = { height: 24, width: 24}

export default PaperPlane