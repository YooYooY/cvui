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

// Example.defaultProps = []

export default Example
