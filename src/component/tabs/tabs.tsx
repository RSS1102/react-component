import { cloneElement, createContext, Children, useContext, useMemo, useState } from "react"
const tabsContent = createContext({ selectedIndex: "", setSelectedIndex: (index: string) => { } });
import { TabsPropsType, TabListType, TabBarItemType, TabPanelItemType, TabBarsType, TabPanelsType } from "./index"
import "./tabs.scss";


/**
 * @description 生成样式 : 选中|隐藏
 * @returns [className]+'hided'| [className]+'selected'
 */
const isSelectedTabBarItemClassName = (className: string, isSelected?: boolean, isHide?: boolean) => {
    if (isHide) {
        return "hided";
    }
    return (isSelected ? [className].concat("tab-bars-item-selected") : [className]).join(" ");
}


/**
 * @returns TabBarItem 导航子组件
 */
const TabBarsItem = ({ children, onClick, isSelected, isHide, id }: TabBarItemType) => {
    const className = isSelectedTabBarItemClassName("tab-bars-item", isSelected, isHide);
    return (
        <>
            <div className={className} onClick={onClick} id={id}>
                {children}
            </div>
        </>
    )
}

/**
 * @returns TabBars 导航组件
 */
const TabBars = ({ children }: TabBarsType) => {
    const context = useContext(tabsContent);
    return (
        <div className="tab-bars">
            {Children.map(children, child => {
                console.log(child.props.id)
                return cloneElement(child, {
                    onClick: () => context.setSelectedIndex(child.props.id),
                    isSelected: child.props.id === context.selectedIndex
                });
            })}
        </div>
    );
};

/**
 * @returns 展板子内容
 */
const TabPanelItem = ({ children, isSelected }: TabPanelItemType) => {
    const isSelectedTabPanelItemClassName
        = (isSelected
            ? ["tab-panel-item"].concat("tab-panel-item-show")
            : ["tab-panel-item"].concat("tab-panel-item-hide"))
            .join(" ")
    return <div className={isSelectedTabPanelItemClassName}>{children}</div>;
};

/**
 * @returns 展板内容
 */
const TabPanels = ({ children }: TabPanelsType) => {
    const context = useContext(tabsContent);

    return (
        <div className="tab-panels">
            {Children.map(children, child => {
                console.log(child.props.id)
                return cloneElement(child, {
                    isSelected: child.props.id === context.selectedIndex
                });
            })}
        </div>
    );
}

/**
 * @returns  返回整个tabs组件
 */
const TabList = ({ children, selectedIndex, setSelectedIndex, defaultIndex }: TabListType) => {
    const context = useMemo(() => ({ selectedIndex, setSelectedIndex }), [
        selectedIndex,
        setSelectedIndex
    ]);
    return (
        <tabsContent.Provider value={context}>{children}</tabsContent.Provider>
    );
};

const Tabs = (props: TabsPropsType) => {
    const [selectedIndex, setSelectedIndex] = useState("tab0");
    const tabMode = props.mode
        ? (props.mode === "horizontal"
            ? "tabs-horizontal"
            : (props.mode === "vertical" ? "tabs-vertical" : 'tabs-horizontal'))
        : "tabs-horizontal"

    return (
        <div className={tabMode}>
            <TabList selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} defaultIndex={props.defaultIndex} >
                <TabBars>
                    {props.items.map(item =>
                        <TabBarsItem key={item.key ?? item.label} id={item.key ?? item.label}>{item.label}</TabBarsItem>)}
                </TabBars>
                <TabPanels>
                    {props.items.map(item =>
                        <TabPanelItem key={item.key ?? item.label} id={item.key ?? item.label}>{item.children}</TabPanelItem>)}
                </TabPanels>
            </TabList>
        </div>
    )
}

export default Tabs
