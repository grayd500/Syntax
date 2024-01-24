import { Outlet } from "react-router-dom";
import Navbar from "./components/NavTabs.jsx";
import Logo from "./components/Logo.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    
    <div className="bg-black">
      <Navbar />
      <Logo />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
  }