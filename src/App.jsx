import AnnouncementBar from "./components/AnnouncementBar.jsx";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Marquee from "./components/Marquee.jsx";
import CategoryGrid from "./components/CategoryGrid.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Editorial from "./components/Editorial.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Journal from "./components/Journal.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="font-body">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <Marquee />
      <CategoryGrid />
      <ProductGrid />
      <Editorial />
      <Testimonials />
      <Journal />
      <Newsletter />
      <Footer />
    </div>
  );
}
