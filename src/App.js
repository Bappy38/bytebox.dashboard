import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import FileExplorer from './components/FileExplorer';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/drive',
    element: <FileExplorer/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;