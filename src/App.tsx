
import './App.scss'
import "rsstest/dist/style.css"

function App() {
  const items = [
    {
      key: "1",
      label: "1",
      children: <div>123</div>,
    },
    {
      key: "2",
      label: "2",
      children: <div>123</div>,
    }
  ]
  return (
    <div className="App">
      {/* <Tabs items={items} default={"1"} ></Tabs> */}
    </div>
  )
}

export default App
