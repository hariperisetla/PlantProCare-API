import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <h1 className="text-6xl font-bold text-green-900 mb-4">
        Welcome to PlantProCare API
      </h1>
      <p className="text-lg text-green-800 mb-8">
        Your go-to API for plant care information
      </p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Link
          href="/docs"
          className="bg-green-800 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
        >
          Documentation
        </Link>
        <Link
          href="/plants"
          className="bg-green-800 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
        >
          Browse Plants
        </Link>
        <Link
          href="/api-reference"
          className="bg-green-800 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
        >
          API Reference
        </Link>
        <Link
          href="/contact"
          className="bg-green-800 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
        >
          Contact Us
        </Link>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">
          PlantProCare API Features
        </h2>
        <ul className="pl-6 text-lg text-green-800 text-center">
          <li>Access comprehensive plant care information</li>
          <li>Search for specific plants and their care requirements</li>
          <li>Retrieve data on watering, sunlight, temperature, and more</li>
          <li>Explore a vast database of plant species</li>
          <li>Integrate the API seamlessly into your applications</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
