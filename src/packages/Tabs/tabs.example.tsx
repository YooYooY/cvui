import React from 'react'
import TabsItem from './tabsItem'
import Tabs from './tabs'
import Card from '../../components/Card/card'
import Icon from '../Icon/icon'
import Code from '../../components/Code/code'
import Table from '../../components/Table/table'

const TabsDefaultProps = [
  {
    属性: 'defaultIndex',
    类型: 'string',
    required: '-',
    默认值: '-',
    描述: '默认选中索引值',
  },
  {
    属性: 'className',
    类型: 'string',
    required: '-',
    默认值: '',
    描述: '类名',
  },
  {
    属性: 'onSelect',
    类型: '(selectIndex: string) => void',
    required: '-',
    默认值: '',
    描述: '选中回调函数',
  },
  {
    属性: 'type',
    类型: `'line' | 'card'`,
    required: '-',
    默认值: '',
    描述: '选项卡样式',
  },
]

const TabsItemDefaultProps = [
  {
    属性: 'label',
    类型: 'any',
    required: '-',
    默认值: '-',
    描述: '标题，可返回字符串或符合的React.Element',
  },
  {
    属性: 'disabled',
    类型: 'boolean',
    required: '-',
    默认值: 'false',
    描述: '禁用',
  },
  {
    属性: 'className',
    类型: 'string',
    required: '-',
    默认值: '-',
    描述: '类名',
  },
]

const Example = () => {
    return (
      <>
        <div className="cv-example">
          <Card title="基础选项卡">
            <Tabs>
              <TabsItem label="tab1">content 1</TabsItem>
              <TabsItem label="tab2">content 2</TabsItem>
              <TabsItem label="tab3" disabled>
                content 3
              </TabsItem>
              <TabsItem label="tab4">content 4</TabsItem>
            </Tabs>
            <Code>
              {`<Tabs>
    <TabsItem label="tab1">content 1</TabsItem>
    <TabsItem label="tab2">content 2</TabsItem>
    <TabsItem label="tab3" disabled>content 3</TabsItem>
    <TabsItem label="tab4">content 4</TabsItem>
</Tabs>
`}
            </Code>
          </Card>

          <Card title="选项卡样式">
            <Tabs type="card">
              <TabsItem label="tab1">content 1</TabsItem>
              <TabsItem label="tab2">content 2</TabsItem>
              <TabsItem label="tab3" disabled>
                content 3
              </TabsItem>
              <TabsItem label="tab4">content 4</TabsItem>
            </Tabs>
            <Code>
              {`<Tabs type="card">
    <TabsItem label="tab1">content 1</TabsItem>
    <TabsItem label="tab2">content 2</TabsItem>
    <TabsItem label="tab3" disabled>content 3</TabsItem>
    <TabsItem label="tab4">content 4</TabsItem>
</Tabs>
`}
            </Code>
          </Card>

          <Card title="自定义选项卡">
            <Tabs type="card">
              <TabsItem
                label={
                  <div>
                    <Icon icon="thumbs-up" /> <span>test</span>
                  </div>
                }
              >
                content 1
              </TabsItem>
              <TabsItem label="tab2">content 2</TabsItem>
              <TabsItem label="tab3" disabled>
                content 3
              </TabsItem>
              <TabsItem label="tab4">content 4</TabsItem>
            </Tabs>
            <Code>
              {`<Tabs type="card">
    <TabsItem label={<div><Icon icon="thumbs-up" /> <span>test</span></div>}>
    content 1
    </TabsItem>
    <TabsItem label="tab2">content 2</TabsItem>
    <TabsItem label="tab3" disabled>content 3</TabsItem>
    <TabsItem label="tab4">content 4</TabsItem>
</Tabs>
`}
            </Code>
          </Card>
        </div>
        <h3>Tabs Props</h3>
        <Table data={TabsDefaultProps}></Table>
        
        <h3>TabsItem Props</h3>
        <Table data={TabsItemDefaultProps}></Table>
      </>
    )
}

export default Example
