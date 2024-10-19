import 'bootstrap/dist/css/bootstrap.min.css';
import InputArea from './components/InputArea';
import LineItems from './components/LineItems';
import { DataProvider } from './hooks/DataContext';
function App() {

  return (
    <DataProvider>
        <div className="App">
          <InputArea />
          <LineItems />
        </div>
    </DataProvider>
  );
}

export default App;
