import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FiSettings, FiActivity, FiTerminal, FiSliders, FiTrash2 } from "react-icons/fi";

export default function ManageBot() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 md:px-10">
                <div className="max-w-7xl mx-auto flex gap-8">
                    {/* Left Sidebar */}
                    <div className="w-64 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm p-4 space-y-6">
                            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                <FiSettings className="text-blue-600" />
                                Bot Settings
                            </h2>
                            
                            <nav className="space-y-2">
                                <button className="w-full text-left px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium">
                                    Basic Info
                                </button>
                                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
                                    Commands
                                </button>
                                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
                                    Permissions
                                </button>
                            </nav>

                            <div className="border-t pt-6 space-y-4">
                                <h3 className="text-sm font-medium text-gray-500 flex items-center gap-2">
                                    <FiActivity className="text-green-600" />
                                    Analytics
                                </h3>
                                <nav className="space-y-2">
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
                                        Usage Stats
                                    </button>
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
                                        Activity Logs
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex-1">
                        <div className="bg-white rounded-xl shadow-sm p-8">
                            {/* Basic Info Section */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                    <FiTerminal className="text-blue-600" />
                                    Basic Configuration
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Bot Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                            placeholder="My Awesome Bot"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Bot Description
                                        </label>
                                        <textarea
                                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                                            placeholder="Describe your bot's purpose..."
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Commands Section */}
                            <div className="mt-12 space-y-6">
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                    <FiSliders className="text-purple-600" />
                                    Bot Commands
                                </h2>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="text"
                                            className="flex-1 p-2 border rounded-lg"
                                            placeholder="/command"
                                        />
                                        <input
                                            type="text"
                                            className="flex-1 p-2 border rounded-lg"
                                            placeholder="Description"
                                        />
                                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                            Add Command
                                        </button>
                                    </div>

                                    <div className="border rounded-lg divide-y">
                                        <div className="p-3 flex items-center justify-between hover:bg-gray-50">
                                            <div>
                                                <span className="font-mono">/start</span>
                                                <span className="text-gray-500 ml-4">Start conversation</span>
                                            </div>
                                            <button className="text-red-600 hover:text-red-700">
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Danger Zone */}
                            <div className="mt-12 border-t pt-8">
                                <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2">
                                    <FiTrash2 className="text-red-700" />
                                    Danger Zone
                                </h2>
                                
                                <div className="mt-4 p-4 bg-red-50 rounded-lg flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium text-red-700">Delete this bot</h3>
                                        <p className="text-sm text-red-600">
                                            This will permanently delete the bot and all associated data
                                        </p>
                                    </div>
                                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                                        Delete Bot
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}