import React, { useState } from 'react'
import Input from './input'
import Card from '../../components/Card/card'
import Code from '../../components/Code/code'

export default function Example() {
  const [value, setValue] = useState('')

  const handleChange = (e: any) => setValue(e.target.value)

  return (
    <>
      <div className="cv-example">
        <Card title="默认 Input" type="inline">
          <Input
            placeholder="input value"
            value={value}
            onChange={handleChange}
          />
          <span>{value}</span>
          <Code type="jsx" >{`const [value, setValue] = useState('')
const handleChange = (e: any) => setValue(e.target.value)
 
<Input placeholder="input value" value={value} onChange={handleChange} />`}</Code>
        </Card>

        <Card title="disabled Input" type="inline">
          <Input disabled placeholder="disabled input" />
          <Code>{`<Input disabled placeholder="disabled input" />`}</Code>
        </Card>

        <Card title="带图标 Input" type="inline">
          <Input icon="home" placeholder="input value" />
          <Code>{`<Input icon="home" placeholder="input value" />`}</Code>
        </Card>

        <Card title="前缀 Input" type="inline">
          <Input prepend="https://" placeholder="input value" />
          <Code>{`<Input prepend="https://" placeholder="input value" />`}</Code>
        </Card>

        <Card title="后缀 Input" type="inline">
          <Input append={<div>.com</div>} placeholder="input value" />
          <Code>{`<Input append=".com" placeholder="input value" />`}</Code>
        </Card>

        <Card title="不同大小 Input" type="inline">
          <Input
            prepend="prefix"
            append="extendname"
            placeholder="small input"
            size="sm"
          />

          <Input
            prepend="prefix"
            append={<div>extendname</div>}
            placeholder="input value"
          />
          <Input
            prepend="prefix"
            append="extendname"
            placeholder="large input"
            size="lg"
          />
          <Code>{`<Input prepend="prefix" append="extendname" placeholder="small input" size="sm" />

<Input prepend="prefix" append="extendname" placeholder="input value" />

<Input prepend="prefix" append="extendname" placeholder="large input" size="lg" />`}</Code>
        </Card>
      </div>
    </>
  )
}

Example.defaultProps = [
  {
    属性: 'disabled',
    类型: 'boolean',
    required: '-',
    默认值: 'false',
    描述: '禁用',
  },
  {
    属性: 'size',
    类型: `'lg' | 'sm'`,
    required: '-',
    默认值: 'normal',
    描述: 'input尺寸',
  },
  {
    属性: 'icon',
    类型: `IconProp`,
    required: '-',
    默认值: '-',
    描述: '图标',
  },
  {
    属性: 'prepend',
    类型: 'string | ReactElement',
    required: '-',
    默认值: '-',
    描述: '前缀',
  },
  {
    属性: 'append',
    类型: 'string | ReactElement',
    required: '-',
    默认值: '-',
    描述: '前缀',
  },
  {
    属性: 'onChange',
    类型: 'ChangeEventHandler<HTMLInputElement>',
    required: '-',
    默认值: '-',
    描述: 'change触发回调函数',
  },
]
