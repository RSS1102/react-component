import './App.scss';
import '@rss1102/react-component/dist/style.css';
import { Tabs } from '@rss1102/react-component';

function App() {
  const items = [
    {
      key: '1',
      label: '1',
      children: <div>1111</div>,
    },
    {
      key: '2',
      label: '2',
      children: <div>2222</div>,
    },
  ];
  return (
    <div className="App">
      <Tabs items={items} default="1" />
    </div>
  );
}

export default App;
