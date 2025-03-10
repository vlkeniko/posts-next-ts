import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
      {/*     <Link href="/dashboard" className="hover:text-gray-400">
            Dashboard
          </Link> */}
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
      {/*     <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
