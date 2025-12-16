import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./register/Register";
import Login from "./register/login";
import Subscription from "./Subscription/Subscription";
import Profile from "./profile/profile";
import Buy from "./Subscription/buy";
import Dashboard from "./profile/Dashbourd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login/>} />
         <Route path="subscription" element={<Subscription/>} />
          <Route path="profile" element={<Profile/>} />
           <Route path="buy" element={<Buy/>} />
           <Route path="dash" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
