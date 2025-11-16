import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          ALX Travel
        </h1>

        {/* Search Bar */}
        <div className="hidden md:flex w-1/3">
          <input
            type="text"
            placeholder="Search destination..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
          />
        </div>

        {/* Accommodation Types */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="#">Rooms</Link>
          <Link href="#">Mansion</Link>
          <Link href="#">Countryside</Link>
          <Link href="#">Beach</Link>
        </nav>

        {/* Auth */}
        <div className="flex gap-3">
          <button className="text-gray-700">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
