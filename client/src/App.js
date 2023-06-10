import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/home";
import Search from "./pages/search/search";


function App() {
  return (
    <div>

      <BrowserRouter>
      
        <Routes>
          
          <Route path="/*" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;