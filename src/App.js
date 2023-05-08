import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";

import Home from "./pages/Vans/Home";
import About from "./pages/Vans/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanInfo, { loader as vansInfoLoader } from "./pages/Vans/VanInfo";

import Layout from "./components/Layout";
import Login, {
  loader as loginLoader,
} from "./pages/Login/Login";
import Dashboard, { loader as dashboardLoader } from "./pages/Host/Dashboard";
import HostLayout, {
  loader as hostLayoutLoader,
} from "./components/HostLayout";
import Income from "./pages/Host/Income";
import HostVans, { loader as hostVansLoader } from "./pages/Host/Vans";
import Reviews from "./pages/Host/Reviews";
import HostVansDetails, {
  loader as hostVansDetailLoader,
} from "./pages/Host/HostVansDetails";
import HostVansDetailsInfo from "./pages/Host/HostVansDetailsInfo";
import DetailedPricing from "./pages/Host/DetailedPricing";
import Gallery from "./pages/Host/Gallery";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
      />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanInfo />} loader={vansInfoLoader} />

      <Route path="host" element={<HostLayout />} loader={hostLayoutLoader}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVansDetails />}
          loader={hostVansDetailLoader}
        >
          <Route index element={<HostVansDetailsInfo />} />
          <Route path="pricing" element={<DetailedPricing />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
