
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavTabs.jsx";

import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    
    <div className="text-gray-400 bg-gray-900">
      <Navbar />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
  }