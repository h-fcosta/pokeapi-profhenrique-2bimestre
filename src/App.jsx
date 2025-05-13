import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="pt-16 pb-16">
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
