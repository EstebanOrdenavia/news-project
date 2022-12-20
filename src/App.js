import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorNotfound from './components/not-found-error/ErrorNotFound';
import NewsPage from './pages/NewsPage';
import NewDetailsPage from './pages/NewDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewsPage/>,
    errorElement: <ErrorNotfound/>
  },
  {
    path: "/noticias",
    element: <NewsPage/>,
  },
  {
    path: "/noticias/:id",
    element: <NewDetailsPage/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
