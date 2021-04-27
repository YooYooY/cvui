import { FC } from 'react'
import TabsItem, { TabsItemProps } from './tabsItem'
import Tabs, { TabsProps } from './tabs'

export type ITabsComponent = FC<TabsProps> & {
  Item: FC<TabsItemProps>
}

const TransTabs = Tabs as ITabsComponent

TransTabs.Item = TabsItem

export default TransTabs
