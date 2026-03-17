export default function Footer() {
  return (
    <footer className="bg-[#071821] border-t border-[#2F4858]/30 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">JAARI</h3>
          <p className="text-[#A0AEC0]">
            Joint Analytics for Asset Reliability Insights.
            Enterprise-grade predictive intelligence.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-[#A0AEC0]">
            <li>Technology</li>
            <li>Industries</li>
            <li>Use Cases</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-[#A0AEC0]">
            info@jaari.ai
          </p>
        </div>

      </div>

      <div className="mt-16 text-center text-[#718096] text-sm">
        © 2026 JAARI. All rights reserved.
      </div>
    </footer>
  );
}