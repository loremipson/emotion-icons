import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.852 6.489a1.225 1.225 0 0 0 .268-1.621 1.232 1.232 0 0 0-1.378-.516l-.14.075c-.813.447-6.306 4.289-5.688 4.723.617.43 4.363-1.258 6.923-2.664m0 11.557c-2.574-1.405-6.321-3.092-6.938-2.664-.617.434 4.86 4.277 5.673 4.723l.137.075a1.21 1.21 0 0 0 1.368-.515 1.226 1.226 0 0 0-.271-1.62m2.257-7.04c-.061-.015-.105-.015-.166-.015-.932 0-7.584.722-7.253 1.4.331.662 4.424.993 7.344.993a1.234 1.234 0 0 0 1.009-1.294 1.22 1.22 0 0 0-.965-1.113M5.426 16.766c-.752 2.151-1.459 3.16-3.084 3.16-.151 0-.708-.029-.738-.046a1.119 1.119 0 0 0-1.144.844 1.135 1.135 0 0 0 .783 1.385c.421.074.873.091 1.264.091 2.98 0 3.973-1.717 4.951-4.229l5.869-14.538a1.25 1.25 0 0 0-.813-1.565 1.265 1.265 0 0 0-1.565.752L6.856 13.455h-.061L2.493 2.546c-.271-.602-.993-.903-1.64-.662a1.308 1.308 0 0 0-.786 1.64l5.427 13.244-.068-.002z" key="k0" />
]

export const hex='#0072C6'
const Yammer = ({ title, ...restProps }) => {
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
          ? [<title key="Yammer-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Yammer',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Yammer.displayName = 'Yammer'

Yammer.defaultProps = { height: 24, width: 24}

export default Yammer