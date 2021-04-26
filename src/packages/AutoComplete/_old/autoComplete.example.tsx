import React from 'react'
import Card from '../../../components/Card/card'
import { getDelay } from '../../../utils'
import AutoComplete, { DataSourceType } from './autoComplete'

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
    await delay(100)
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
  return <div>player: {item.value} | number: {item.number}</div>
}

const Example = () => {
  return (
    <>
      <div className="cv-example">
        <Card title="base AutoComplete">
          <AutoComplete fetchSuggestions={fetchSuggestions}></AutoComplete>
        </Card>

        <Card title="自定义下拉框">
          <AutoComplete
            fetchSuggestions={fetchCustomSuggestion}
            renderOption={renderOption}
          ></AutoComplete>
        </Card>

        <Card title="异步 AutoComplete">
          <AutoComplete
            fetchSuggestions={fetchPromiseSuggestions()}
          ></AutoComplete>
        </Card>
      </div>
    </>
  )
}

export default Example
