import './App.scss';
import RsTabs from '../libs/RsTabs/index';
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
      <RsTabs items={items} defaultIndex="1" />
    </div>
  );
}
export default App;
