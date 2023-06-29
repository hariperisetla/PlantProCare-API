import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-lg">
              PlantProCare
            </Link>
          </div>
          <div className="flex">
            <Link
              href="/plants"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md"
            >
              Plants
            </Link>
            <Link
              href="/api-reference"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md"
            >
              API Reference
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
