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
    path: '/drive',
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