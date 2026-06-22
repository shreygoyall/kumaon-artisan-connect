import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Pashmina Shawl"
            description="Hand-woven traditional pashmina shawl"
            price={4500}
          />
          <Card
            title="Woolen Blanket"
            description="Pure wool blanket with traditional patterns"
            price={3200}
          />
          <Card
            title="Wood Carving"
            description="Handcrafted wooden artifact"
            price={1800}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
