import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import TripDetails from "./pages/TripDetails";
import Register from "./pages/Register";
import About from "./pages/About";
export default function App(){
    return(
        <Routes>
       <Route element={<Layout />}>
       <Route path="/" element={<Home />} />
       <Route path="/trips" element={<Trips />} />
       <Route path="/trips/:id" element={<TripDetails />} />
       <Route path="/register" element={<Register />} />
       <Route path="/about" element={<About />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    );
}