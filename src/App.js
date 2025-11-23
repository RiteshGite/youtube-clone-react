
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import Store from './utils/Store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import Result from './components/Result';

const appRouter=createBrowserRouter(
  [
  {
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    },
    {
      path:"/demo",
      element:
      <div className="flex flex-row items-center gap-10 my-10">
      <Demo/>
      <Demo2/>
      </div>
    },
    {
      path:"/result",
      element:<Result/>
    }
  ]
},
]
);

function App() {
  return (
    <Provider store={Store}>
    <div>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
