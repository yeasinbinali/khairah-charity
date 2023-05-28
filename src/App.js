import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './routes/Route/Route';

function App() {
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
