import React from 'react'
import Card from '../../components/Card/card'
import AutoComplete, { DataSourceType } from './autoComplete'
import { getDelay } from '../../utils'
import Code from '../../components/Code/code'

const lakers = [
  'bradley',
  'pope',
  'caruso',
  'cook',
  'cousins',
  'james',
  'AD',
  'green',
  'howard',
  'kuzma',
  'McGee',
  'rando',
]

const fetchSuggestions = (value: string) => {
  if (!value) return []
  return lakers.filter((r) => r.includes(value)).map((value) => ({ value }))
}

const fetchCustomSuggestion = (value: string) => {
  if (!value) return []
  return lakers
    .filter((r) => r.includes(value))
    .map((value) => {
      let number = Math.round(Math.random() * 20)

      return {
        value,
        number,
      }
    })
}

const fetchPromiseSuggestions = () => {
  let { cancel, delay } = getDelay()
  let fetching = false
  let cacheData: Record<string, DataSourceType[]> = {}

  return async (value: string) => {
    if (!value) return []
    if (cacheData[value]) return cacheData[value]
    if (fetching) {
      cancel && cancel(value)
      fetching = false
    }

    fetching = true
    await delay(1000)
    let data = fetchSuggestions(value)
    cacheData[value] = data
    fetching = false
    if (Object.keys(cacheData).length >= 5) {
      cacheData = {}
    }
    return data
  }
}

const renderOption = (item: DataSourceType<{ number: number }>) => {
  return (
    <div>
      player: {item.value} | number: {item.number}
    </div>
  )
}

const Example = () => {
  return (
    <div className="cv-example">
      <Card title="normal">
        <AutoComplete
          placeholder="请输入关键字，例如：c"
          fetchSuggestions={fetchSuggestions}
          onSelect={(val) => console.log(val)}
        />
        <Code type="js">{`const fetchSuggestions = (searchVal: string)=> {
  return data.filter(item => item.value.includes(searchVal));
}

<AutoComplete
    placeholder="请输入关键字，例如：c"
    fetchSuggestions={fetchSuggestions}
    onSelect={(val) => console.log(val)}
/>
`}</Code>
      </Card>

      <Card title="自定义下拉框">
        <AutoComplete
          placeholder="请输入关键字，例如：c"
          fetchSuggestions={fetchCustomSuggestion}
          renderOption={renderOption}
        />
        <Code type="js">{`const renderOption = (item: DataSourceType<{ number: number }>) => {
  return (
    <div>
      player: {item.value} | number: {item.number}
    </div>
  )
}

<AutoComplete
    placeholder="请输入关键字，例如：c"
    fetchSuggestions={fetchSuggestions}
    renderOption={renderOption}
/>
`}</Code>
      </Card>

      <Card title="异步加载">
        <AutoComplete
          placeholder="异步搜索"
          fetchSuggestions={fetchPromiseSuggestions()}
        ></AutoComplete>
        <Code type="js">
          {`const fetchPromiseSuggestions = (searchVal: string) => {
  return new Promise(resolve=>{
    
    setTimeout(()=>{
      resolve(data)
    }, 1000)
    
  })
}

<AutoComplete
    placeholder="异步搜索"
    fetchSuggestions={fetchPromiseSuggestions}
/>
`}
        </Code>
      </Card>
    </div>
  )
}


Example.defaultProps = [
  {
    属性: 'fetchSuggestions',
    类型: '(searchStr: string)=> DataSource[] | Promise<DataSource[]>',
    required: 'true',
    默认值: '-',
    描述: '搜索数据获取方法',
  },
  {
    属性: 'onSelect',
    类型: '(item: DataSourceType) => void',
    required: 'false',
    默认值: '-',
    描述: '选中方法',
  },
  {
    属性: 'renderOption',
    类型: ' (item: DataSourceType) => ReactElement',
    required: 'false',
    默认值: '-',
    描述: '自定义渲染函数',
  },
]

export default Example
