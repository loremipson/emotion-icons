import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.993 7.945a1.109 1.109 0 0 0-.029-.208c-.01-.036-.028-.068-.042-.103-.019-.046-.033-.094-.058-.136-.022-.038-.053-.07-.08-.105-.026-.033-.048-.069-.078-.1-.032-.032-.071-.057-.107-.084-.031-.023-.059-.052-.093-.072l-.01-.004-.012-.009-9.021-4.99a1.002 1.002 0 0 0-.97.001l-8.979 4.99c-.002.003-.004.006-.008.007-.004.003-.009.003-.013.006-.045.026-.081.062-.12.094-.025.02-.055.038-.078.06-.039.039-.069.085-.102.13-.018.026-.041.048-.056.075a.962.962 0 0 0-.07.165c-.009.025-.023.049-.03.074a.913.913 0 0 0-.03.214c-.001.017-.007.031-.007.048V16c0 .363.197.698.515.874l8.978 4.987.001.001.002.001.02.011c.043.024.09.037.135.054.032.013.063.03.097.039a1.013 1.013 0 0 0 .506 0c.033-.009.064-.026.097-.039.045-.017.092-.029.135-.054l.02-.011.002-.001.001-.001 8.978-4.987c.316-.176.513-.511.513-.874V7.998c0-.019-.006-.035-.007-.053zm-9.965 3.927l-2.854-1.586 6.938-3.848 2.83 1.566-6.914 3.868zm-.048-7.719l1.821 1.007-6.883 3.873L5.059 8l6.921-3.847zM4 9.706l2 1.119V12.9L8 14v-2.056l2.998 1.678.002 5.679-7-3.89V9.706zm9 9.595v-5.68l7-3.916v5.706l-7 3.89z" key="k0" />
]


const Package = ({ title, ...restProps }) => {
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
          ? [<title key="Package-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Package',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Package.displayName = 'Package'

Package.defaultProps = { height: 24, width: 24}

export default Package