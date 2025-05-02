import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Offers from "../pages/Offers";
import OffersDetail from "../pages/OffersDetail";
import Stay from "../pages/Stay";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/detail/:id" element={<OffersDetail />} />
        <Route path="/stay" element={<Stay />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
