import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ServiceDetails from "./pages/ServiceDetails";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import Preloader from "./components/Preloader";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={loading ? <Preloader /> : <HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service/:slug" element={<ServiceDetails />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
