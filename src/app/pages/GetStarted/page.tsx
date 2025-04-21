'use client';

import GetStartedServiceCard from '@/app/components/Getstartedservicescard';
export default function GetStartedPage() {


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
   
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Automation Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of bot development and automation services tailored for modern businesses.
          </p>
        </div>

        {/* Services Grid */}
        <GetStartedServiceCard />

        {/* Getting Started Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Start Your Automation Journey in 3 Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="h-12 w-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Platform</h3>
              <p className="text-gray-600">Select from our supported messaging platforms</p>
            </div>
            <div className="text-center p-6">
              <div className="h-12 w-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize Features</h3>
              <p className="text-gray-600">Configure your bots functionality and integrations</p>
            </div>
            <div className="text-center p-6">
              <div className="h-12 w-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Deploy & Manage</h3>
              <p className="text-gray-600">Launch your bot and monitor performance</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using our automation solutions to save time and increase efficiency.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}