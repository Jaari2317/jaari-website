import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-950 text-white p-4 shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Your Company Logo/Name */}
        <div className="text-2xl font-bold tracking-wider">
          <Link href="/">JaaRi <span className="text-blue-500">AI</span></Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/platform" className="hover:text-blue-400 transition">Platform</Link>
          <Link href="/technology" className="hover:text-blue-400 transition">Hardware & Tech</Link>
          <Link href="/industries" className="hover:text-blue-400 transition">Industries</Link>
          <Link href="/about" className="hover:text-blue-400 transition">About Us</Link>
        </div>

        {/* Call to Action Button */}
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold transition">
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );
}