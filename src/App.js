import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import HomePage from "./Pages/home";
import Detail from "./Pages/detail";
import Profile from "./Pages/profile";
import Category from "./Pages/category"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/register" element={<RegisterPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/detail" element={<Detail/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/category" element={<Category/>}></Route>
    </Routes>
  </Router>
}

export default App;
