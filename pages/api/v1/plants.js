import plantsData from "../../../data/plants.json";

export default function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Preflight request
    res.status(200).end();
    return;
  }

  if (req.method === "GET") {
    res.status(200).json(plantsData);
  } else if (req.method === "POST") {
    // Assuming you have access to a database or data storage mechanism
    // You can save the posted plant data to the database here

    // Example: Assuming the request body contains the plant data in JSON format
    const { name, scientificName, description, careInstructions, imageUrl } =
      req.body;

    // Save the plant data to the database or perform any other necessary operations
    // ...

    // Send a success response
    res.status(201).json({ message: "Plant created successfully" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
