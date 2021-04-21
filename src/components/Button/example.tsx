import React from 'react'
import Button from './button'
import Card from '../Card/card'
import Code from '../Code/code'

export default function Example() {
  return (
    <div className="cv-exapmle">
      <Card title="默认的 Button" type="inline">
        <Button onClick={() => alert('clicked')}> default button </Button>
        <Code>{`<Button onClick={() => alert('clicked')}> default button </Button>`}</Code>
      </Card>

      <Card title="不同尺寸的 Button" type="inline">
        <Button size="lg"> large button </Button>&nbsp;
        <Button> normal button </Button>&nbsp;
        <Button size="sm"> small button </Button>
        <Code>
          {`<Button size="lg"> large button </Button>
<Button> normal button </Button>
<Button size="sm"> small button </Button>`}
        </Code>
      </Card>

      <Card title="不同类型的 Button" type="inline">
        &nbsp;
        <Button btnType="primary"> primary button </Button>&nbsp;
        <Button btnType="danger"> danger button </Button>
        <Button btnType="link" href="https://google.com">
          link button
        </Button>
        <Code>
          {`<Button btnType="primary"> primary button </Button>
<Button btnType="danger"> danger button </Button>
<Button btnType="link" href="https://google.com">link button</Button>`}
        </Code>
      </Card>
    </div>
  )
}
