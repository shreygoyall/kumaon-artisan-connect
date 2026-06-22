import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Artisan Dashboard
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Welcome to your dashboard! Here you can manage your products, view
          orders, and track inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Total Products
            </h3>
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              24
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Pending Orders
            </h3>
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              8
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Total Revenue
            </h3>
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              ₹45,600
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
