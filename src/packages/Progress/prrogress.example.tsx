import React, { useState } from 'react'
import Button from '../Button'
import Progress from './progress'
import Card from '../../components/Card/card'
import Code from '../../components/Code/code'

const Example = () => {
  const [precent, setPrecent] = useState(50)
  const [stripeAni, setStripeAni] = useState(false)
  const handleChange = () => setPrecent(Math.round(Math.random() * 100))
  const handleAnimate = () => setStripeAni(!stripeAni)
  return (
    <div>
      <div className="cv-example">
        <Card title="默认 Progress" type="inline">
          <Button onClick={handleChange}>update</Button>
          <Progress precent={precent} />
          <Code>{`<Progress precent={precent} />`}</Code>
        </Card>

        <Card title="theme Progress" type="inline">
          <Progress precent="30" />
          <Progress precent="40" theme="danger" />
          <Progress precent="50" theme="success" />
          <Progress precent="60" theme="warning" />
          <Code>{`<Progress precent="30" />
<Progress precent="40" theme="danger" />
<Progress precent="50" theme="success" />
<Progress precent="60" theme="warning" />`}</Code>
        </Card>

        <Card title="stripe Progress">
          <Button onClick={handleAnimate}>
            {stripeAni ? 'stop' : 'animate'}
          </Button>
          <Progress precent="90" stripe stripeAni={stripeAni}></Progress>
          <Code type="jsx">{`const [stripeAni, setStripeAni] = useState(false)
const handleAnimate = () => setStripeAni(!stripeAni)

<Progress precent="90" stripe stripeAni={stripeAni}></Progress>
`}</Code>
        </Card>
      </div>
    </div>
  )
}

Example.defaultProps = [
  {
    属性: 'precent',
    类型: 'string | number',
    required: 'true',
    默认值: '-',
    描述: '进度条数值',
  },
  {
    属性: 'strokeHeight',
    类型: 'number',
    required: '-',
    默认值: '15',
    描述: '进度条数值高度',
  },
  {
    属性: 'size',
    类型: '"lg" | "sm"',
    required: '-',
    默认值: '-',
    描述: '设置 Button 尺寸',
  },
  {
    属性: 'showText',
    类型: 'boolean',
    required: '-',
    默认值: 'true',
    描述: '显示进度数字',
  },
  {
    属性: 'theme',
    类型: 'ThemeProps',
    required: '-',
    默认值: '-',
    描述: '进度条主题色',
  },
  {
    属性: 'stripe',
    类型: 'boolean',
    required: '-',
    默认值: 'false',
    描述: '条纹',
  },
  {
    属性: 'stripeAni',
    类型: 'boolean',
    required: '-',
    默认值: 'false',
    描述: '条纹动画',
  },
]

export default Example
