import Link from 'next/link';

export default function ServicesDropdown() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-64 z-50">
      <h3 className="text-blue-600 font-semibold text-lg mb-2">What we offer</h3>
      <ul className="text-gray-700 text-sm space-y-2">
        <li>
          <Link href="/services/ai-bots" className="hover:text-blue-500">
            🤖 AI Bot Development
          </Link>
        </li>
        <li>
          <Link href="/services/automation" className="hover:text-blue-500">
            ⚙️ Workflow Automation
          </Link>
        </li>
        <li>
          <Link href="/services/support" className="hover:text-blue-500">
            💬 Customer Support Bots
          </Link>
        </li>
      </ul>
    </div>
  );
}
