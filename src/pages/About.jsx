import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Kumaon Artisan Connect
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Kumaon Artisan Connect is a digital marketplace built to empower
          traditional handloom artisans from the Kumaon Heritage Weavers
          Alliance. Our platform eliminates exploitative middlemen and provides
          direct market access to authentic, handcrafted products.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          We work with artisans across Munsyari and Almora districts in
          Uttarakhand, showcasing their incredible skill in hand-weaving
          woolens, pashmina shawls, and regional wood carvings.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-100 mb-3">
            Our Mission
          </h2>
          <p className="text-indigo-800 dark:text-indigo-200">
            To preserve traditional craftsmanship while providing artisans with
            fair compensation and sustainable livelihoods through
            technology-enabled direct commerce.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
