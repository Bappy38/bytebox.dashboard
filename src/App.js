import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import FileExplorer from './components/FileExplorer';
import { Provider } from 'react-redux';
import appStore from './store/appStore';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/my-drive',
    element: <FileExplorer/>
  },
  {
    path: '/my-drive/folders/:folderId',
    element: <FileExplorer/>
  },
  {
    path: '/shared-drive',
    element: <FileExplorer/>
  },
  {
    path: '/shared-drive/folders/:folderId',
    element: <FileExplorer/>
  }
]);

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;