import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import FileExplorer from './components/FileExplorer';
import { Provider } from 'react-redux';
import appStore from './store/appStore';
import { useState } from 'react';
import NotificationBar from './components/NotificationBar';
import { NOTIFICATION_TYPE } from './constants/notificationType';

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

  const [notification, setNotification] = useState(null);

  window.showNotification = (id, message, type = NOTIFICATION_TYPE.INFO) => {
    setNotification({ id, message, type });
  };

  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter}/>
        {
          notification && (
            <NotificationBar
              notificationId={notification.id}
              message={notification.message}
              type={notification.type}/>
          )
        }
      </Provider>
    </div>
  );
}

export default App;