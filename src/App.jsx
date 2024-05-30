import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import FlightSearch from "./pages/FlightSearch.jsx";
import BookingConfirmation from "./pages/BookingConfirmation.jsx"; // Import the new BookingConfirmation component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/flight-search" element={<FlightSearch />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
