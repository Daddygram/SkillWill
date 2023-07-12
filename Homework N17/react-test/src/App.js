import './App.css';
import router from './router';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(router)} />
    </div>
  );
}

export default App;
