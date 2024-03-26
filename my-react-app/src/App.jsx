
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import HighVibes from "./pages/HighVibes";
import Pricing from "./pages/Pricing";
import BookClass from "./pages/BookClass";
import BasicCheckout from "./pricing-partials/BasicCheckout";
import SmallCheckout from "./pricing-partials/SmallCheckout";
import PersonalCheckout from "./pricing-partials/PersonalCheckout";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/highvibes" element={<HighVibes />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/bookclass" element={<BookClass />} />
        <Route path="/basiccheckout" element={<BasicCheckout />} />
        <Route path="/smallcheckout" element={<SmallCheckout />} />
        <Route path="/personalcheckout" element={<PersonalCheckout />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App
  