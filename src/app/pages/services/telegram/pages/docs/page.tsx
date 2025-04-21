import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FiTerminal, FiCode, FiServer, FiAlertTriangle, FiMessageSquare, FiSettings } from "react-icons/fi";

export default function DocsPage() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                        <FiMessageSquare className="inline-block mr-3 text-blue-600" />
                        Telegram Bot Documentation
                    </h1>

                    {/* Documentation Sections */}
                    <div className="space-y-12">
                        {/* Overview Section */}
                        <section className="bg-white rounded-xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <FiTerminal className="mr-2 text-blue-600" />
                                Overview
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our Telegram Bot integration allows you to automate customer interactions,
                                send notifications, and manage user requests directly through Telegram.
                                This documentation will guide you through setup, configuration, and
                                advanced features.
                            </p>
                        </section>

                        {/* Setup Instructions */}
                        <section className="bg-white rounded-xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <FiSettings className="mr-2 text-blue-600" />
                                Getting Started
                            </h2>
                            
                            <div className="space-y-8">
                                <div className="border-l-4 border-blue-100 pl-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Create Your Bot</h3>
                                    <p className="text-gray-600 mb-4">
                                        Start by creating a new bot with Telegram's BotFather:
                                    </p>
                                    <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm text-gray-100">
                                        <span className="text-green-400">/newbot</span><br />
                                        → Choose a name for your bot<br />
                                        → Choose a username (must end with 'bot')<br />
                                        → You'll receive your API token
                                    </div>
                                </div>

                                <div className="border-l-4 border-blue-100 pl-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Configure Webhook</h3>
                                    <p className="text-gray-600 mb-4">
                                        Set up your webhook to receive updates:
                                    </p>
                                    <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm text-gray-100">
                                        curl -F "url=https://yourdomain.com/webhook" \<br />
                                        https://api.telegram.org/bot<span className="text-yellow-400">{'<YOUR_TOKEN>'}</span>/setWebhook
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* API Reference */}
                        <section className="bg-white rounded-xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <FiCode className="mr-2 text-blue-600" />
                                API Reference
                            </h2>
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Endpoints</h3>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="font-mono text-sm text-blue-600 mb-1">POST /api/messages</div>
                                            <p className="text-gray-600 text-sm">
                                                Send messages through your bot. Include JSON payload with:
                                            </p>
                                            <pre className="mt-2 bg-gray-800 p-4 rounded text-gray-100 text-sm">
{`{
  "chat_id": "123456789",
  "text": "Your message here",
  "parse_mode": "Markdown"
}`}</pre>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Supported Methods</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {['sendMessage', 'editMessage', 'deleteMessage', 'getUpdates'].map((method) => (
                                            <div key={method} className="bg-gray-50 p-4 rounded-lg">
                                                <div className="font-mono text-sm text-blue-600">{method}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Troubleshooting */}
                        <section className="bg-white rounded-xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <FiAlertTriangle className="mr-2 text-blue-600" />
                                Troubleshooting
                            </h2>
                            
                            <div className="space-y-4">
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-red-700 mb-2">Common Errors</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-red-600">
                                        <li>401: Unauthorized - Check your API token</li>
                                        <li>404: Not Found - Verify endpoint URLs</li>
                                        <li>429: Rate Limit Exceeded - Implement backoff strategy</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-blue-700 mb-2">Best Practices</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-blue-600">
                                        <li>Always validate incoming webhook requests</li>
                                        <li>Implement proper error handling</li>
                                        <li>Use HTTPS for webhook endpoints</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}