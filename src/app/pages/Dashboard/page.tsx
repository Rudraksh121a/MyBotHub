"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";

import {
  FiSettings,
  FiUploadCloud,
  FiAlertCircle,
  FiTrash2,
} from "react-icons/fi";

export default function DashboardPage() {
  const router = useRouter();
  const deployedBots = [
    {
      id: 1,
      name: "Support Bot",
      status: "active",
      template: "Customer Support",
    },
    {
      id: 2,
      name: "Moderator Bot",
      status: "inactive",
      template: "Content Moderator",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <FiAlertCircle className="text-blue-600 text-2xl" />
              Bot Dashboard
            </h1>
          </div>

          {/* Deployed Bots Section */}
          {deployedBots.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FiUploadCloud className="text-green-600" />
                <span className="text-gray-800">
                  Deployed Bots ({deployedBots.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {deployedBots.map((bot) => (
                  <div
                    key={bot.id}
                    className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {bot.name}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          bot.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {bot.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 ">{bot.template}</p>
                    <div className="flex gap-3 text-sm">
                      <button className="cursor-pointer flex items-center gap-1 text-blue-600 hover:text-blue-800 transition" 
                      onClick={() => router.push('/pages/services/telegram/managebot')}
                      >
                        <FiSettings className="text-base" 
                       
                        /> Manage
                      </button>
                      <button className="cursor-pointer flex items-center gap-1 text-red-600 hover:text-red-800 transition"
                      onClick={() => router.push('/pages/services/telegram/editbot')}
                      >
                        <BiEdit className="text-base" /> Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Deployment Analytics Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">
              Deployment Analytics
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-100 rounded-lg">
                <p className="text-2xl font-bold text-green-800">
                  {deployedBots.filter((b) => b.status === "active").length}
                </p>
                <p className="text-sm text-green-700">Active Bots</p>
              </div>
              <div className="text-center p-4 bg-blue-100 rounded-lg">
                <p className="text-2xl font-bold text-blue-800">
                  {deployedBots.filter((b) => b.status === "inactive").length}
                </p>
                <p className="text-sm text-blue-700">Inactive Bots</p>
              </div>
              <div className="text-center p-4 bg-orange-100 rounded-lg">
                <p className="text-2xl font-bold text-orange-800">24/7</p>
                <p className="text-sm text-orange-700">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}
