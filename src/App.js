import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './routes/Route/Route';

function App() {
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
