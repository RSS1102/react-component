import React, { createContext, useContext, useMemo, useState } from "react"
const tabsContent = createContext({ selectedIndex: "", setSelectedIndex: (index: string) => { } });
import "./index.scss";

//切换按钮
/**
 * @description 生成被选中样式/生成被隐藏样式
 * @param className 
 * @param isSelected 
 * @param isHide 
 * @returns className  hided| [className]+selected
 */
const isSelectedClassName = (className: string, isSelected: boolean | undefined, isHide: boolean | undefined) => {
    if (isHide) {
        return "hided";
    }
    console.log((isSelected ? [className].concat("selected") : [className]).join(" "))

    return (isSelected ? [className].concat("selected") : [className]).join(" ");
}

/**
 * @description 构建导航栏子按钮的样式
 * @param children 渲染的按钮内容
 * @param onClick 点击触发的事件(选中事件)
 * @param isSelected 是否被选中
 * @param isHide 是否被隐藏
 * @returns 返回一个dom元素
 */

const TabBar = ({ children, onClick, isSelected, isHide }: {
    children: any,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
    isSelected?: boolean,
    isHide?: boolean
}) => {
    const className = isSelectedClassName("tab-bar", isSelected, isHide);
    return (
        <>
            <div className={className} onClick={onClick}>
                {children}
            </div>
        </>

    )
}

/**
 * @description  构建导航栏
 * @param children 渲染的按钮内容
 * @returns 整个导航栏
 */
const TabBarProvider = ({ children }: any) => {
    const context = useContext(tabsContent);
    return (
        <div className="tab-bar-provider">
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    onClick: () => context.setSelectedIndex(index.toString()),
                    isSelected: index.toString() === context.selectedIndex
                });
            })}
        </div>
    );
};

/**
 * @description 获取整个tabs的子组件
 * @param children 子组件
 * @todo defaultIndex 默认选中
 * @returns 
 */
const TabList = ({ children, selectedIndex, setSelectedIndex }
    : { children: any, selectedIndex: string, setSelectedIndex: React.Dispatch<React.SetStateAction<string>> }) => {

    const context = useMemo(() => ({ selectedIndex, setSelectedIndex }), [
        selectedIndex,
        setSelectedIndex
    ]);
    return (
        <tabsContent.Provider value={context}>{children}</tabsContent.Provider>
    );
};

//内容样式
/**
 * @description 子内容
 * @param children 需要展示的子内容
 * @param isSelected 是否被选中
 * @returns 子内容
 */
const TabPanel = ({ children, isSelected }: { children: any, isSelected?: boolean }) => {
    console.log(children, isSelected)
    if (!isSelected) return null;
    return <div className="tab-panel-item">{children}</div>;
};

/**
 * @description 内容组
 * @param children 子内容 
 * @returns 内容组
 */
const TabPanels = ({ children }: any) => {
    const context = useContext(tabsContent);
    return (
        <div className="tabpanels">
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    isSelected: index.toString() === context.selectedIndex
                });
            })}
        </div>
    );
}

const Tabs = () => {
    const [selectedIndex, setSelectedIndex] = useState("0");
    const [num, setNum] = useState(3)
    const onClick = () => {
        setSelectedIndex("1")
        setNum(num + 1)
    }
    return (
        <div className="tabs">
            <button onClick={onClick}>tab之外的按钮</button>
            <TabList selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}>
                <TabBarProvider>
                    <TabBar>tab0{num}</TabBar>
                    <TabBar>tab1{num}</TabBar>
                </TabBarProvider>
                <TabPanels>
                    <TabPanel>TabContent 0</TabPanel>
                    <TabPanel>TabContent 1</TabPanel>
                </TabPanels>
            </TabList>
        </div>
    )
}

export default Tabs
