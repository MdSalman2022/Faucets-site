import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Router/Routes';


function App() {
  return (
    <div className="bg-base-100 h-screen">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
