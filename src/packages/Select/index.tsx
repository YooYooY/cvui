import { FC } from 'react'
import Select, { SelectProps } from './select'
import Option, { OptionProps } from './option'

export type ISelectComponent = FC<SelectProps> & {
  Option: FC<OptionProps>
}
const TranSelect = Select as ISelectComponent

TranSelect.Option = Option

export default TranSelect
