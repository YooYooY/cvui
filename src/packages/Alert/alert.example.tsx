import React from 'react'
import Alert from './alert'
import Card from '../../components/Card/card'
import Code from '../../components/Code/code'

const Example = () => {
  return (
    <>
      <div className="cv-example">
        <Card title="默认 Alert">
          <Alert title="提示标题" />
          <Code>{`<Alert title="this is alert!" />`}</Code>
        </Card>

        <Card title="副标题 Alert">
          <Alert
            title="提示标题"
            type="primary"
            onClose={() => alert('close')}
            description="this is a long description"
          />
          <Code>{`
<Alert
    title="提示标题"
    type="primary"
    onClose={()=> alert('close')}
    description="this is a long description"
/>`}</Code>
        </Card>

        <Card title="状态 Alert">
          <Alert title="提示标题" type="primary" />
          <Alert title="提示标题" type="danger" />
          <Alert title="提示标题" type="success" />
          <Alert title="提示标题" type="warning" />
          <Code>{`
<Alert title="提示标题" type="primary"/>
<Alert title="提示标题" type="danger"/>
<Alert title="提示标题" type="success"/>
<Alert title="提示标题" type="warning"/>
`}</Code>
        </Card>
      </div>
    </>
  )
}

Example.defaultProps = [
  {
    属性: 'title',
    类型: 'string',
    required: '-',
    默认值: '-',
    描述: '标题',
  },
  {
    属性: 'description',
    类型: 'string',
    required: '-',
    默认值: '-',
    描述: '副标题',
  },
  {
    属性: 'type',
    类型: `'success' | 'primary' | 'danger' | 'warning'`,
    required: '-',
    默认值: 'primary',
    描述: '设置 Button 尺寸',
  },
  {
    属性: 'onClose',
    类型: 'Function',
    required: '-',
    默认值: '-',
    描述: '关闭回调函数',
  },
  {
    属性: 'closable',
    类型: 'boolean',
    required: 'true',
    默认值: '-',
    描述: '是否显示关闭按钮',
  },
]

export default Example
