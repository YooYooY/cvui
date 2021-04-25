import React from 'react'
import Card from '../../components/Card/card'
import Select from './select'
import Option from './option'
import Code from '../../components/Code/code'
import Markdown from '../../components/Markdown/markdown'
import Table from '../../components/Table/table'

const options = [
  { value: 'apple', label: '苹果' },
  { value: 'watermelon', label: '西瓜' },
  { value: 'mango', label: '芒果' },
]

const SelectDefaultProps = [
  {
    属性: 'name',
    类型: 'string',
    required: '-',
    默认值: '-',
    描述: '',
  },
  {
    属性: 'multiple',
    类型: 'boolean',
    required: '-',
    默认值: 'false',
    描述: '是否多选',
  },
  {
    属性: 'defaultValue',
    类型: `string | string[]`,
    required: '-',
    默认值: '',
    描述: '默认选项',
  },
  {
    属性: 'placeholder',
    类型: 'string',
    required: '-',
    默认值: '-',
    描述: 'input placeholder',
  },
  {
    属性: 'onChange',
    类型: `(selectedValue: SelectOption,selectedValues: SelectOption[]) => void`,
    required: '-',
    默认值: '-',
    描述: '选中触发函数',
  },
  {
    属性: 'onVisibleChange',
    类型: `(visible: boolean) => void`,
    required: '-',
    默认值: '-',
    描述: '下拉框显示触发函数',
  },
];

const OptionDefaultProps = [
  {
    属性: 'value',
    类型: 'string',
    required: '-',
    默认值: '-',
    描述: '默认值',
  },
  {
    属性: 'label',
    类型: 'string',
    required: '-',
    默认值: '-',
    描述: '显示值',
  },
  {
    属性: 'disabled',
    类型: 'boolean',
    required: '-',
    默认值: '-',
    描述: '禁用',
  },
]

const Example = () => {

  return (
    <>
      <Markdown>
        {`
引入组件:
~~~js
import { Select } from "cvui";
const { Option } = Select;
~~~
`}
      </Markdown>
      <div className="cv-example">
        <Card title="Select example" type="inline">
          <Select placeholder="请选择" onChange={(item) => alert(item.value)}>
            {options.map((item) => (
              <Option value={item.value} key={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
          <Code open>
            {`<Select placeholder="请选择" onChange={(item) => alert(item.value)}>
  <Option value="apple">苹果</Option>
  <Option value="watermelon">西瓜</Option>
  <Option value="mango">芒果</Option>
</Select>
`}
          </Code>
        </Card>

        <Card title="默认值 与 禁用选项" type="inline">
          <Select placeholder="默认值" defaultValue="apple">
            {options.map((item) => (
              <Option
                value={item.value}
                disabled={item.value === 'mango'}
                key={item.value}
              >
                {item.label}
              </Option>
            ))}
          </Select>
          <Code open>
            {`<Select placeholder="默认值" defaultValue="apple">
  <Option value="apple">苹果</Option>
  <Option value="watermelon">西瓜</Option>
  <Option value="mango" disabled>芒果</Option>
</Select>
`}
          </Code>
        </Card>

        <Card title="Select 多选" type="inline">
          <Select
            placeholder="可以多选哦~"
            multiple
            defaultValue={['apple', 'mango']}
          >
            {options.map((item) => (
              <Option value={item.value} key={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
          <Code open>
            {`<Select placeholder="可以多选哦~" multiple defaultValue={['apple', 'mango']}>
  <Option value="apple">苹果</Option>
  <Option value="watermelon">西瓜</Option>
  <Option value="mango">芒果</Option>
</Select>
`}
          </Code>
        </Card>

        <Card title="Select 禁用" type="inline">
          <Select
            placeholder="disabled"
            disabled
            defaultValue={['apple', 'mango']}
          >
            {options.map((item) => (
              <Option value={item.value} key={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
          <Code open>
            {`<Select placeholder="disabled" disabled defaultValue={['apple', 'mango']}>
  <Option value="apple">苹果</Option>
  <Option value="watermelon">西瓜</Option>
  <Option value="mango">芒果</Option>
</Select>
`}
          </Code>
        </Card>
      </div>
      <h3>Select Props</h3>
      <Table data={SelectDefaultProps}></Table>
      <h3>Option Props</h3>
      <Table data={OptionDefaultProps}></Table>
    </>
  )
}

export default Example
