import './App.css';
import { useEffect } from 'react';
import MyForm from './MyFom';
function App() {
  useEffect(() => {
    document.title = "To Do List"; 
  }, []); // 

  return (
    <div className="App">
      <MyForm/>
    </div>
  );
}

export default App;
