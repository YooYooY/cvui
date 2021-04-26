import React, {
  ChangeEvent,
  useCallback,
  useState,
  memo,
  useRef,
  useEffect,
} from 'react'
import useClickOutside from '../../../hooks/useClickOutside'
import useDebounceValue from '../../../hooks/useDebounce'
import { useKeyEvent } from '../../../hooks/useKeyEvent'
import Icon from '../../Icon/icon'
import Input, { InputProps } from '../../Input/input'

interface DataSourceObject {
  value: string
}

export type DataSourceType<T = any> = T & DataSourceObject

export type RenderOption<T> = (
  dataSource: DataSourceType<T>
) => string | React.ReactElement

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  onSelect?: (item: DataSourceType) => void
  fetchSuggestions: (
    str: string
  ) => DataSourceType[] | Promise<DataSourceType[]>
  renderOption?: (dataSource: DataSourceType) => string | React.ReactElement
  renderLoading?: () => string | React.ReactElement
  debounceDelay?: number
}

interface SuggestListProps {
  selectSuggestion: (item: DataSourceType) => void
  suggestionList: DataSourceType[]
  renderOption?: (dataSource: DataSourceType) => string | React.ReactElement
}

const SuggestionList: React.FC<SuggestListProps> = memo(
  ({ suggestionList, selectSuggestion, renderOption }) => {
    const clickUp = useKeyEvent(38) // up
    const clickDown = useKeyEvent(40) // down
    const clickEnter = useKeyEvent(13) // enter
    const activeIndex = useRef(-1)

    useEffect(() => {
      if (!suggestionList.length) return;
      const maxIndex = suggestionList.length - 1;
      let index = activeIndex.current;
      if (clickUp) {
        if (activeIndex.current <= 0) {
          activeIndex.current = maxIndex
        } else {
          activeIndex.current = --index
        }
      }
      if (clickDown) {
        if (activeIndex.current >= maxIndex) {
          activeIndex.current = 0
        } else {
          activeIndex.current = ++index
        }
      }
      if (clickEnter) {
        activeIndex.current = -1        
        selectSuggestion(suggestionList[index])
      }
    }, [clickUp, clickDown, clickEnter, suggestionList, selectSuggestion])

    if (!suggestionList.length) return null

    return (
      <ul className="cv-autocomplete-list">
        {suggestionList.map((suggest, index) => (
          <li
            className={
              index === activeIndex.current ? 'cv-autocomplete-list-active' : ''
            }
            key={index}
            onClick={() => selectSuggestion(suggest)}
          >
            {renderOption ? renderOption(suggest) : suggest.value}
          </li>
        ))}
      </ul>
    )
  }
)

SuggestionList.defaultProps = {
  suggestionList: [],
}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const {
    onSelect,
    fetchSuggestions,
    renderOption,
    renderLoading,
    value,
    debounceDelay,
    ...restProps
  } = props

  const complete = useRef<boolean>(false)
  const elRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState(value as string)
  const [suggestList, setsuggestList] = useState<DataSourceType[]>([])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value.trim())
    complete.current = false
  }, [])

  useClickOutside(elRef, () => {
    setsuggestList([])
  })

  useDebounceValue(inputValue, debounceDelay!, (value) => {
    if (complete.current) return
    let renderData = fetchSuggestions(value)
    if (renderData instanceof Promise) {
      setLoading(true)
      renderData
        .then((renderResultData) => {
          setsuggestList(renderResultData)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setsuggestList(renderData)
    }
  })

  const selectSuggestion = useCallback(
    (suggestData: DataSourceType) => {
      setInputValue(suggestData.value)
      setsuggestList([])
      onSelect && onSelect(suggestData)
      complete.current = true
    },
    [onSelect]
  )

  const loadingContent = renderLoading ? (
    renderLoading()
  ) : (
    <Icon className="cv-autocomplete-loading" icon="spinner" spin />
  )

  return (
    <div className="cv-autocomplete" ref={elRef}>
      <Input value={inputValue} onChange={handleChange} {...restProps} />
      <div className="cv-autocomplete-result">
        {loading ? (
          loadingContent
        ) : (
          <SuggestionList
            suggestionList={suggestList}
            selectSuggestion={selectSuggestion}
            renderOption={renderOption}
          />
        )}
      </div>
    </div>
  )
}

AutoComplete.defaultProps = {
  value: '',
  debounceDelay: 300,
}

export default AutoComplete
