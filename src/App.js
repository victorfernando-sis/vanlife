import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Vans/Home";
import About from "./pages/Vans/About";
import Vans from "./pages/Vans/Vans";
import VanInfo from "./pages/Vans/VanInfo";

import "./server";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import HostLayout from "./components/HostLayout";
import Income from "./pages/Host/Income";
import HostVans from "./pages/Host/Vans";
import Reviews from "./pages/Host/Reviews";
import HostVansDetails from "./pages/Host/HostVansDetails";
import HostVansDetailsInfo from "./pages/Host/HostVansDetailsInfo";
import DetailedPricing from "./pages/Host/DetailedPricing";
import Gallery from "./pages/Host/Gallery";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanInfo />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetails />}>
              <Route index element={<HostVansDetailsInfo />} />
              <Route path="pricing" element={<DetailedPricing />} />
              <Route path="gallery" element={<Gallery />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
