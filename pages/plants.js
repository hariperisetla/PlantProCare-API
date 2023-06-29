import { useEffect, useState } from "react";
import Link from "next/link";

const PlantsPage = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch plants data from your API or any data source
    // Update the URL with your actual API endpoint for retrieving plants
    fetch("/api/v1/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  if (loading) {
    return <p>Loading plants...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Plants</h1>
      {plants.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <li key={plant.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                {plant.name}
              </h3>
              <p className="text-gray-600">{plant.description}</p>
              <Link
                href={`/plants/${plant.id}`}
                className="text-green-500 hover:text-green-700 mt-4 block"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No plants found.</p>
      )}
    </div>
  );
};

export default PlantsPage;
