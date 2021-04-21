import React from 'react'
import Button from './button'
import Card from '../../components/Card/card'
import Code from '../../components/Code/code'

const Example = () => {
  return (
    <>
      <div className="cv-exapmle">
        <Card title="默认 Button" type="inline">
          <Button onClick={() => alert('clicked')}> default button </Button>
          <Code>{`<Button onClick={() => alert('clicked')}> default button </Button>`}</Code>
        </Card>

        <Card title="不同尺寸 Button" type="inline">
          <Button size="lg"> large button </Button>&nbsp;
          <Button> normal button </Button>&nbsp;
          <Button size="sm"> small button </Button>
          <Code>
{
`<Button size="lg"> large button </Button>
<Button> normal button </Button>
<Button size="sm"> small button </Button>`
}
          </Code>
        </Card>

        <Card title="不同类型 Button" type="inline">
          &nbsp;
          <Button btnType="primary"> primary button </Button>&nbsp;
          <Button btnType="danger"> danger button </Button>
          <Button btnType="link" href="youyoucuocuo.top">
            link button
          </Button>
          <Code>
{
`<Button btnType="primary"> primary button </Button>
<Button btnType="danger"> danger button </Button>
<Button btnType="link" href="youyoucuocuo.top">link button</Button>`
}
          </Code>
        </Card>
      </div>
    </>
  )
}

Example.defaultProps = [
  {
    属性: 'className',
    类型: 'string',
    required: '-',
    默认值: '-',
    描述: '',
  },
  {
    属性: 'disabled',
    类型: 'boolean',
    required: '-',
    默认值: 'false',
    描述: '设置 Button 禁用',
  },
  {
    属性: 'size',
    类型: '"lg" | "sm"',
    required: '-',
    默认值: '-',
    描述: '设置 Button 尺寸',
  },
  {
    属性: 'btnType',
    类型: '"default" | "danger" | "link" | "primary"',
    required: '-',
    默认值: 'default',
    描述: '设置 Button 的类型',
  },
  {
    属性: 'href',
    类型: 'string',
    required: '-',
    默认值: '-',
    描述: '当 btnType 类型为link时，渲染为a标签添加',
  },
]

export default Example
