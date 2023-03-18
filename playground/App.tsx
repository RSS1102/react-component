import './App.scss';
import { RsModal } from '../libs';
function App() {
  return (
    <div className="app">
      <RsModal isOpenModal={true}>你好!</RsModal>
    </div>
  );
}
export default App;
