import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes
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
import Confirm from "./pages/payment/Confirm";

function App() {
  return (
    <div>

      <BrowserRouter>
      
        <Routes>
          <Route path="/*" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/hotel/:id" element={<Hotel/>}/>
          <Route path="/test" element={<Overview/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/newhotel" element={<NewHotel/>}/>
          <Route path="/newroom" element={<NewRoom/>}/>
          <Route path="/listhotel" element={<ListHotel/>}/>
          <Route path="/confirm" element={<Confirm/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;