import {
  RocketLaunchIcon,
  CommandLineIcon,
  ChatBubbleLeftRightIcon,
        
} from "@heroicons/react/24/outline";

const services = [
  {
    id: "telegram",
    title: "Telegram Bot Development",
    icon: <RocketLaunchIcon className="h-8 w-8 text-blue-600" />,
    features: [
      "Custom Bot Creation",
      "AI Integration",
      "Payment Processing",
      "Multi-language Support",
    ],
    description:
      "Build powerful Telegram bots for customer engagement, automation, and business growth.",
  },
  {
    id: "whatsapp",
    title: "WhatsApp Business Automation",
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-green-600" />,
    features: [
      "Broadcast Messaging",
      "CRM Integration",
      "Chatbot Solutions",
      "API Support",
    ],
    description:
      "Automate customer interactions and streamline business communications on WhatsApp.",
  },
  {
    id: "discord",
    title: "Discord Bot Integration",
    icon: <CommandLineIcon className="h-8 w-8 text-purple-600" />,
    features: [
      "Moderation Tools",
      "Game Integrations",
      "Community Management",
      "Custom Commands",
    ],
    description:
      "Enhance your Discord server with powerful moderation and engagement tools.",
  },
  
];

export default function GetStartedServiceCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
        >
          <div className="mb-4">
            <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="space-y-2">
              {service.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="mt-4 cursor-pointer font-medium flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              window.location.href = `/pages/services/${service.id}`;
            }}
          > 
            Create Now
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
