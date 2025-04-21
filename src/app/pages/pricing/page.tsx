import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Pricing() {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Pricing Plans</h1>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition transform hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Basic Plan</h2>
              <p className="text-xl font-bold text-gray-900 mb-6">$19.99/month</p>
              <ul className="text-left text-sm text-gray-600 mb-6">
                <li className="mb-2">10 GB Storage</li>
                <li className="mb-2">Basic Support</li>
                <li className="mb-2">Access to all templates</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
  
            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition transform hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pro Plan</h2>
              <p className="text-xl font-bold text-gray-900 mb-6">$49.99/month</p>
              <ul className="text-left text-sm text-gray-600 mb-6">
                <li className="mb-2">50 GB Storage</li>
                <li className="mb-2">Priority Support</li>
                <li className="mb-2">Advanced Features</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
  
            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition transform hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enterprise Plan</h2>
              <p className="text-xl font-bold text-gray-900 mb-6">$99.99/month</p>
              <ul className="text-left text-sm text-gray-600 mb-6">
                <li className="mb-2">100 GB Storage</li>
                <li className="mb-2">24/7 Support</li>
                <li className="mb-2">Custom Integrations</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
  
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600">
              All plans come with a 30-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
