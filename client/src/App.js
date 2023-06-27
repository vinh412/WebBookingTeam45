import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Payment from "./pages/payment/Payment";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Overview from "./components/overview/Overview";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Search from "./pages/search/Search"
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import ListHotel from "./pages/listhotel/ListHotel";

function App() {
  return (
    <div>

      <BrowserRouter>
      
        <Routes>
          <Route path="/*" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/hotel" element={<Hotel/>}/>
          <Route path="/test" element={<Overview/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/newHotel" element={<NewHotel/>}/>
          <Route path="/newRoom" element={<NewRoom/>}/>
          <Route path="/listHotel" element={<ListHotel/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;