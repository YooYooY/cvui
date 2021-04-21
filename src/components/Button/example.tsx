import React from 'react'
import Button from "./button";
import Card from '../Card/card'

export default function example() {
    return (
      <div>
        <Card title="默认的 Button">
          <Button onClick={()=>alert('clicked')}> default button </Button>
        </Card>

        <Card title="不同尺寸的 Button">
          <Button size="lg"> large button </Button>
          <Button size="sm"> small button </Button>
        </Card>

        <Card title="不同类型的 Button">
          <Button btnType="primary"> primary button </Button>
          <Button btnType="danger"> danger button </Button>
          <Button btnType="link" href="https://google.com">
            link button
          </Button>
        </Card>
      </div>
    )
}
