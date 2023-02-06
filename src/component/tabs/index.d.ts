
/**
 * @description tabs数组
 */
export type tabsItems = {
    children: string | number | ReactNode,
    label: string,
    key: string
}[]
/**
 * @description 外部参数
 * @param mode tabs模式
 * @param defaultIndex 默认选取
 * @param tabs数组
 */
export type TabsPropsType = {
    mode?: "vertical" | "horizontal",
    defaultIndex: string,
    items: tabsItems
}
/**
 * @description 整个tabs组件参数
 */
export interface TabListType {
    selectedIndex: string,
    setSelectedIndex: React.Dispatch<React.SetStateAction<string>>,
    mode?: "vertical" | "horizontal",
    defaultIndex: string,
    children: string | number | ReactNode
}

/**
 * @description 导航子内容
 * @param children 渲染的按钮内容
 * @param onClick 点击触发的事件(选中事件)
 * @param isSelected 是否被选中
 * @param isHide 是否被隐藏
 */
type TabBarItemType = {
    children: string | number | ReactNode,
    onClick?: React.MouseEventHandler<HTMLDivElement>,
    isSelected?: boolean,
    isHide?: boolean,
    id: string
}

/**
 * @description 导航
 * @param children 导航子内容[]
 */
type TabBarsType = {
    children: ReactElement<TabBarItemType>[]
}

/**
 * @description 展板子内容
 * @param children 展板子内容要呈现的事物
 * @param isSelected 是否被选中
 */
export type TabPanelItemType = { children: string | number | ReactNode, isSelected?: boolean, id: string }

/**
 * @description 展板
 * @param children 展板子内容[]
 */
export type TabPanelsType = { children: ReactElement<TabPanelItemType>[] }