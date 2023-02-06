
import './App.scss'
import { TabsPropsType } from './component/tabs'
import Tabs from './component/tabs/tabs'
function App() {
  const items: TabsPropsType["items"] = [
    {
      key: "1",
      label: "1",
      children: "1",
    },
    {
      key: "2",
      label: "2",
      children: <div>123</div>,
    }
  ]
  return (
    <div className="App">
      <Tabs items={items} defaultIndex='tab0' mode="horizontal" ></Tabs>
    </div>
  )
}

export default App
