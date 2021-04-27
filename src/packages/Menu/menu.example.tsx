import React from 'react'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
import Card from '../../components/Card/card'
import Code from '../../components/Code/code'
import Table from '../../components/Table/table'
import Markdown from '../../components/Markdown/markdown'

const menuDefaultProps = [
  {
    属性: 'defaultIndex',
    类型: 'string | number',
    required: '-',
    默认值: '-',
    描述: '默认选中',
  },
  {
    属性: 'className',
    类型: 'string',
    required: '-',
    默认值: '-',
    描述: '样式名',
  },
  {
    属性: 'mode',
    类型: `'horizontal' | 'vertical'`,
    required: '-',
    默认值: 'horizontal',
    描述: '横向或纵向显示',
  },
  {
    属性: 'style',
    类型: `CSSProperties`,
    required: '-',
    默认值: '-',
    描述: '样式',
  },
  {
    属性: 'onSelect',
    类型: `(selectedIndex: string) => void`,
    required: '-',
    默认值: '-',
    描述: '选中回调函数方法',
  },
  {
    属性: 'defaultOpenSubMenus',
    类型: `Array<number | string>`,
    required: '-',
    默认值: '-',
    描述: '默认打开menu',
  },
]

const menuItemDefaultProps = [
  {
    属性: 'index',
    类型: 'string | number',
    required: '-',
    默认值: '-',
    描述: '索引',
  },
  {
    属性: 'disabled',
    类型: 'boolean',
    required: '-',
    默认值: '',
    描述: '禁用',
  },
  {
    属性: 'className',
    类型: 'string',
    required: '-',
    默认值: '',
    描述: '样式名',
  },
  {
    属性: 'style',
    类型: `CSSProperties`,
    required: '-',
    默认值: '-',
    描述: '样式',
  },
]

const subMenuDefaultProps = [
  {
    属性: 'index',
    类型: 'string | number',
    required: '-',
    默认值: 'false',
    描述: '索引',
  },
  {
    属性: 'title',
    类型: 'string',
    required: '-',
    默认值: '',
    描述: '标题',
  },
  {
    属性: 'className',
    类型: 'string',
    required: '-',
    默认值: '',
    描述: '样式名',
  }
]

const Example = () => {
  return (
    <>
      <Markdown>
        {`
### 引入方式

~~~jsx
import { Menu } from "cvui;
const { MenuItem, SubMenu } = Menu;
~~~

`}
      </Markdown>
      <div className="cv-example">
        <Card title="base Menu">
          <Menu
            defaultIndex="0"
            defaultOpenSubMenus={[]}
            mode="horizontal"
            onSelect={(selectedIndex) => {
              console.log(selectedIndex)
            }}
          >
            <MenuItem>cool link</MenuItem>
            <MenuItem>cool link 2</MenuItem>
            <MenuItem disabled>disabled</MenuItem>
            <SubMenu title="下拉选项">
              <MenuItem>下拉选项一</MenuItem>
              <MenuItem>下拉选项二</MenuItem>
            </SubMenu>
          </Menu>
          <Code>
            {`<Menu
    defaultIndex="0"
    defaultOpenSubMenus={[]}
    mode="horizontal"
    onSelect={(selectedIndex) => console.log(selectedIndex)}
>
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <SubMenu title="下拉选项">
        <MenuItem>下拉选项一</MenuItem>
        <MenuItem>下拉选项二</MenuItem>
    </SubMenu>
</Menu>
`}
          </Code>
        </Card>

        <Card title="纵向 menu">
          <Menu
            defaultIndex="0"
            defaultOpenSubMenus={[]}
            mode="vertical"
            onSelect={(selectedIndex) => {
              console.log(selectedIndex)
            }}
          >
            <MenuItem>cool link</MenuItem>
            <MenuItem>cool link 2</MenuItem>
            <MenuItem disabled>disabled</MenuItem>
            <SubMenu title="下拉选项">
              <MenuItem>下拉选项一</MenuItem>
              <MenuItem>下拉选项二</MenuItem>
            </SubMenu>
          </Menu>
          <Code>
            {`<Menu
    defaultIndex="0"
    defaultOpenSubMenus={[]}
    mode="vertical"
    onSelect={(selectedIndex) => console.log(selectedIndex)}
>
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <SubMenu title="下拉选项">
        <MenuItem>下拉选项一</MenuItem>
        <MenuItem>下拉选项二</MenuItem>
    </SubMenu>
</Menu>
`}
          </Code>
        </Card>

        <Card title="默认展开 menu">
          <Menu
            defaultIndex="0"
            defaultOpenSubMenus={[2]}
            mode="vertical"
            onSelect={(selectedIndex) => {
              console.log(selectedIndex)
            }}
          >
            <MenuItem>cool link</MenuItem>
            <MenuItem>cool link 2</MenuItem>
            <SubMenu title="下拉选项">
              <MenuItem>下拉选项一</MenuItem>
              <MenuItem>下拉选项二</MenuItem>
            </SubMenu>
          </Menu>
          <Code>
            {`<Menu
    defaultIndex="0"
    defaultOpenSubMenus={['2']}
    mode="vertical"
    onSelect={(selectedIndex) => console.log(selectedIndex)}
>
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <SubMenu title="下拉选项">
        <MenuItem>下拉选项一</MenuItem>
        <MenuItem>下拉选项二</MenuItem>
    </SubMenu>
</Menu>
`}
          </Code>
        </Card>
      </div>
      <h3>Menu</h3>
      <Table data={menuDefaultProps}></Table>
      <h3>MenuItem</h3>
      <Table data={menuItemDefaultProps}></Table>
      <h3>SubMenu</h3>
      <Table data={subMenuDefaultProps}></Table>
    </>
  )
}



export default Example
