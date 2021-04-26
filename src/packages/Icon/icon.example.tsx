import React, { FC, useCallback, useState, memo, useMemo } from 'react'
import Icon from './icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Markdown from '../../components/Markdown/markdown'
import useDebounce from '../../hooks/useDebounce'

library.add(fas)

const describe = `
# 图标组件

常用图标集合 基于 react-fontawesome。

支持 react-fontawesome的所有属性，属性查询地址 [react-fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)

支持 fontawesome 所有 free-solid-icons，图标查询地址 [fontawesome](https://fontawesome.com/icons?d=gallery&p=2)

## 引用方法

### 单个图标引入

~~~js
import { Icon } from 'cvui'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <Icon icon={faCoffee} />
~~~

### 全部图标引入
~~~js
import { Icon } from 'cvui'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const element = <Icon icon="coffee" />
~~~
`

const iconDatas = Object.values(fas).map((item) => item.iconName)

const Icons: FC<{ value: string }> = memo(({ value }) => {
  const data = useMemo(() => {
    return iconDatas.filter((iconname) => iconname.includes(value))
  }, [value])

  return (
    <>
      {data.map((iconName) => (
        <div className="cv-example-icon" key={iconName}>
          <Icon
            theme="primary"
            size="lg"
            spin={['fan', 'spinner', 'undo'].includes(iconName)}
            transform={{ flipY: iconName === "undo" }}
            icon={iconName}
          />
          <p>{iconName}</p>
        </div>
      ))}
    </>
  )
})

const Example = () => {
  const [searchVal, setSearchVal] = useState('fan')

  const handleChange = useCallback((event) => {
    const value = (event.target as HTMLInputElement).value.trim()
    setSearchVal(() => value)
  }, [])

  const value = useDebounce(searchVal, 500)

  return (
    <>
      <Markdown>{describe}</Markdown>

      <input
        type="sarch"
        className="cv-example-input"
        placeholder="🔍 输入图标搜索"
        value={searchVal}
        onChange={handleChange}
      />

      <div className="cv-example">
        <Icons value={value} />
      </div>
    </>
  )
}

Example.defaultProps = [
  {
    属性: 'theme',
    类型:
      '"success" | "danger" | "warning" | "info" | "primary" | "secondary" | "light" | "dark"',
    required: '-',
    默认值: '-',
    描述: '支持框架主题 根据主题显示不同的颜色',
  },
  {
    属性: 'icon',
    类型: 'IconProp | string',
    required: 'true',
    默认值: '-',
    描述: '图标样式',
  },
  {
    属性: 'inverse',
    类型: 'boolean',
    required: 'false',
    默认值: '-',
    描述: '反色',
  },
  {
    属性: 'spin',
    类型: 'boolean',
    required: '-',
    默认值: 'false',
    描述: '图标动画',
  },
  {
    属性: 'flip',
    类型: `"horizontal" | "vertical" | "both"`,
    required: '-',
    默认值: '-',
    描述: '动画方向',
  },
  {
    属性: 'pull',
    类型: `"left" | "right"`,
    required: '-',
    默认值: '-',
    描述: '左右方向',
  },
  {
    属性: 'rotation',
    类型: `90 | 180 | 270`,
    required: '-',
    默认值: '-',
    描述: '旋转角度',
  },
  {
    属性: 'Transform',
    类型: `size?:number | x?: number | y?: number | rotate?: number | flipX?: boolean | flipY: boolean`,
    required: '-',
    默认值: '-',
    描述: '转换',
  },
  {
    属性: 'size',
    类型: `"xs" | "lg" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x"`,
    required: '-',
    默认值: '-',
    描述: '图标大小',
  },
]

export default Example
