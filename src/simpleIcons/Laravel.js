import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6.462 13.274l13.7-3.282c-.758-1.077-4.205-5.963-4.537-6.427-.375-.524.008-.769.617-.87.608-.104 5.85-.984 6.298-1.049.377-.055.69-.177 1.212.307A3.18 3.18 0 0 0 20.819.008H3.197A3.176 3.176 0 0 0 .074 2.59l6.388 10.684z" key="k0" />
,
<path d="M22.737 2.882c-.206.044-4.765.869-5.045.907-.28.037-.188.194-.074.355l4.011 5.502L24 9.063V3.932c-.33-.42-.569-.729-.626-.811-.255-.344-.432-.287-.637-.239M24 15.129c-1.165-1.598-2.436-3.336-2.557-3.508-.166-.24-.255-.285-.648-.159L7.439 14.939s4.1 7.104 4.414 7.554c.315.456.508.418.753.314.181-.08 7.796-2.654 11.393-3.872v-3.803l.001-.003zm0-2.35v-2.008l-1.25.334L24 12.779m-8.199 11.213h5.019a3.18 3.18 0 0 0 3.171-2.936 1970.6 1970.6 0 0 1-8.191 2.936M5.547 15.43L0 16.875v3.936c.017 1.757 1.441 3.182 3.195 3.182h7.194c-.941-1.537-3.503-6.153-4.833-8.563m-1.12-2.069L.017 5.729v9.098l4.328-1.033c.353-.082.269-.128.095-.432" key="k1" />
,
<path d="M22.645 10.959L24 10.591v.63l-.929.311-.426-.573z" key="k2" />
]

export const hex='#E74430'
const Laravel = ({ title, ...restProps }) => {
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
          ? [<title key="Laravel-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Laravel',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Laravel.displayName = 'Laravel'

Laravel.defaultProps = { height: 24, width: 24}

export default Laravel